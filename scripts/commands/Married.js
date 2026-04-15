const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const jimp = require("jimp");

module.exports.config = {
  name: "married",
  version: "3.0.0",
  permission: 0,
  prefix: true,
  credits: "Clarence DK + Edited by Mamun",
  description: "Generate married image with mention",
  category: "img",
  usage: "@mention",
  cooldown: 5
};

module.exports.onLoad = async () => {
  const dirPath = path.join(__dirname, "cache", "canvas");
  const imgPath = path.join(dirPath, "married.png");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(imgPath)) {
    const res = await axios.get(
      "https://i.ibb.co/PjWvsBr/13bb9bb05e53ee24893940892b411ad2.png",
      { responseType: "arraybuffer" }
    );
    fs.writeFileSync(imgPath, Buffer.from(res.data));
  }
};

async function circle(imgPath) {
  const img = await jimp.read(imgPath);
  img.circle();
  return await img.getBufferAsync(jimp.MIME_PNG);
}

async function makeImage(uid1, uid2) {
  const basePath = path.join(__dirname, "cache", "canvas");

  const bg = await jimp.read(path.join(basePath, "married.png"));

  const avt1Path = path.join(basePath, `avt_${uid1}.png`);
  const avt2Path = path.join(basePath, `avt_${uid2}.png`);
  const outPath = path.join(basePath, `married_${uid1}_${uid2}.png`);

  const avt1 = await axios.get(
    `https://graph.facebook.com/${uid1}/picture?width=512&height=512`,
    { responseType: "arraybuffer" }
  );
  const avt2 = await axios.get(
    `https://graph.facebook.com/${uid2}/picture?width=512&height=512`,
    { responseType: "arraybuffer" }
  );

  fs.writeFileSync(avt1Path, Buffer.from(avt1.data));
  fs.writeFileSync(avt2Path, Buffer.from(avt2.data));

  const circle1 = await jimp.read(await circle(avt1Path));
  const circle2 = await jimp.read(await circle(avt2Path));

  bg.composite(circle1.resize(150, 150), 280, 45);
  bg.composite(circle2.resize(150, 150), 130, 90);

  const buffer = await bg.getBufferAsync(jimp.MIME_PNG);
  fs.writeFileSync(outPath, buffer);

  fs.unlinkSync(avt1Path);
  fs.unlinkSync(avt2Path);

  return outPath;
}

module.exports.run = async function ({ event, api }) {
  const { threadID, messageID, senderID, mentions } = event;

  const mentionID = Object.keys(mentions);
  if (!mentionID[0]) {
    return api.sendMessage("❌ একজনকে mention করো", threadID, messageID);
  }

  const one = senderID;
  const two = mentionID[0];

  try {
    const imgPath = await makeImage(one, two);

    api.sendMessage(
      {
        body: "😆 তোমার তো বিয়ে হয়ে গেল! 🤧💍 এখন বাসর রাতের প্রস্তুতি নাও 🤭🤣",
        attachment: fs.createReadStream(imgPath)
      },
      threadID,
      () => fs.unlinkSync(imgPath),
      messageID
    );
  } catch (err) {
    console.log(err);
    api.sendMessage("❌ ইমেজ বানাতে সমস্যা হয়েছে", threadID, messageID);
  }
};
