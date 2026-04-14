const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Bot",
  version: "0.0.3",
  permission: 0,
  prefix: false,
  credits: "𝐌𝐚𝐦𝐮𝐧",
  description: "talk with bot",
  category: "user",
  usages: "",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["🌻🌺💚-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ-💚🌺🌻","আমি এখন বস 𝐌𝐚𝐦𝐮𝐧 এর সাথে বিজি আছি আমাকে ডাকবেন না-😕😏 ধন্যবাদ-🤝🌻","আমাকে না ডেকে আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে একটা জি এফ দাও-😽🫶🌺","ঝাং থুমালে আইলাপিউ পেপি-💝😽","উফফ বুঝলাম না এতো ডাকছেন কেনো-😤😡😈","জান তোমার নানি'রে আমার হাতে তুলে দিবা-🙊🙆‍♂","আজকে আমার মন ভালো নেই তাই আমারে ডাকবেন না-😪🤧","ঝাং 🫵থুমালে য়ামি রাইতে পালুপাসি উম্মম্মাহ-🌺🤤💦","চুনা ও চুনা আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর হবু বউ রে কেও দেকছো খুজে পাচ্ছি না😪🤧😭","স্বপ্ন তোমারে নিয়ে দেখতে চাই তুমি যদি আমার হয়ে থেকে যাও-💝🌺🌻","জান হাঙ্গা করবা-🙊😝🌻","জান মেয়ে হলে চিপায় আসো ইউটিউব থেকে অনেক ভালোবাসা শিখছি তোমার জন্য-🙊🙈😽","ইসস এতো ডাকো কেনো লজ্জা লাগে তো-🙈🖤🌼","আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর পক্ষ থেকে তোমারে এতো এতো ভালোবাসা-🥰😽🫶 আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর  জন্য দোয়া করবেন-💝💚🌺🌻","- ভালোবাসা নামক আব্লামি করতে মন চাইলে আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর ইনবক্স চলে যাও-🙊🥱👅 🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 🌻:- https://www.facebook.com/DEVIL.FARHAN.420","জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽","জান বাল ফালাইবা-🙂🥱🙆‍♂","-আন্টি-🙆-আপনার মেয়ে-👰‍♀️-রাতে আমারে ভিদু কল দিতে বলে🫣-🥵🤤💦","oii-🥺🥹-এক🥄 চামচ ভালোবাসা দিবা-🤏🏻🙂","-আপনার সুন্দরী বান্ধুবীকে ফিতরা হিসেবে আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে দান করেন-🥱🐰🍒","-ও মিম ও মিম-😇-তুমি কেন চুরি করলা সাদিয়ার ফর্সা হওয়ার ক্রীম-🌚🤧","-অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে-🐸😾🔪","-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂️🤧","-𝗢𝗶𝗶 আন্টি-🙆‍♂️-তোমার মেয়ে চোখ মারে-🥺🥴🐸","তাকাই আছো কেন চুমু দিবা-🙄🐸😘","আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇","-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗","কি বেপার আপনি শ্বশুর বাড়িতে যাচ্ছেন না কেন-🤔🥱🌻","দিনশেষে পরের 𝐁𝐎𝐖 সুন্দর-☹️🤧","-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻","-ছোটবেলা ভাবতাম বিয়ে করলে অটোমেটিক বাচ্চা হয়-🥱-ওমা এখন দেখি কাহিনী অন্যরকম-😦🙂🌻","-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 ধরতে পারছে না-🐸🥲","-চুমু থাকতে তোরা বিড়ি খাস কেন বুঝা আমারে-😑😒🐸⚒️","—যে ছেড়ে গেছে-😔-তাকে ভুলে যাও-🙂-আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর সাথে  প্রেম করে তাকে দেখিয়ে দাও-🙈🐸🤗","—হাজারো লুচ্চা লুচ্চির ভিরে-🙊🥵আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এক নিস্পাপ ভালো মানুষ-🥱🤗🙆‍♂️","-রূপের অহংকার করো না-🙂❤️চকচকে সূর্যটাও দিনশেষে অন্ধকারে পরিণত হয়-🤗💜","সুন্দর মাইয়া মানেই-🥱আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর বউ-😽🫶আর বাকি গুলো আমার বেয়াইন-🙈🐸🤗","এত অহংকার করে লাভ নেই-🌸মৃত্যুটা নিশ্চিত শুধু সময়টা অ'নিশ্চিত-🖤🙂","-দিন দিন কিছু মানুষের কাছে অপ্রিয় হয়ে যাইতেছি-🙂😿🌸","হুদাই আমারে  শয়তানে লারে-😝😑☹️","-𝗜 𝗟𝗢𝗩𝗢 𝗬𝗢𝗨-😽-আহারে ভাবছো তোমারে প্রোপজ করছি-🥴-থাপ্পর দিয়া কিডনী লক করে দিব-😒-ভুল পড়া বের করে দিবো-🤭🐸","-আমি একটা দুধের শিশু-😇-🫵𝗬𝗢𝗨🐸💦","-কতদিন হয়ে গেলো বিছনায় মুতি না-😿-মিস ইউ নেংটা কাল-🥺🤧","-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","-এই আন্টির মেয়ে-🫢🙈-𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐡-😽🫶-আসলেই তো স্বাদ-🥵💦-এতো স্বাদ কেন-🤔-সেই স্বাদ-😋","-ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸","-ওই বেডি তোমার বাসায় না আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 মেয়ে দেখতে গেছিলো-🙃-নাস্তা আনারস আর দুধ দিছো-🙄🤦‍♂️-বইন কইলেই তো হয় বয়ফ্রেন্ড আছে-🥺🤦‍♂-আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে জানে মারার কি দরকার-🙄🤧","-একদিন সে ঠিকই ফিরে তাকাবে-😇-আর মুচকি হেসে বলবে ওর মতো আর কেউ ভালবাসেনি-🙂😅","-হুদাই গ্রুপে আছি-🥺🐸-কেও ইনবক্সে নক দিয়ে বলে না জান তোমারে আমি অনেক ভালোবাসি-🥺🤧","কি'রে গ্রুপে দেখি একটাও বেডি নাই-🤦‍🥱💦","-দেশের সব কিছুই চুরি হচ্ছে-🙄-শুধু আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর মনটা ছাড়া-🥴😑😏","-🫵তোমারে প্রচুর ভাল্লাগে-😽-সময় মতো প্রপোজ করমু বুঝছো-🔨😼-ছিট খালি রাইখো- 🥱🐸🥵","-আজ থেকে আর কাউকে পাত্তা দিমু না -!😏-কারণ আমি ফর্সা হওয়ার ক্রিম কিনছি -!🙂🐸","বেশি Bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "আমি আবাল দের সাতে কথা বলি না,ok😒" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মেয়ে হলে বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর এর সাথে ব্যাস্ত আসি😋" , "আমি গরীব এর সাথে কথা বলি না😼😼" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "আরে আমি মজা করার mood এ নাই😒" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর সাথে ব্যাস্ত আসি😒" , "༊━━🦋নামাজি মানুষেরা সব থেকে বেশি সুন্দর হয়..!!😇🥀 🦋 কারণ.!! -অজুর পানির মত শ্রেষ্ঠ মেকআপ দুনিয়াতে নেই༊━ღ━༎🥰🥀 🥰-আলহামদুলিল্লাহ-🥰","- শখের নারী  বিছানায় মু'তে..!🙃🥴","-𝐈'𝐝 -তে সব 𝐖𝐨𝐰 𝐖𝐨𝐰 বুইড়া বেডি-🐸💦","🥛-🍍👈 -লে খাহ্..!😒🥺","- অনুমতি দিলে 𝚈𝚘𝚞𝚃𝚞𝚋𝚎-এ কল দিতাম..!😒","~আমি মারা গেলে..!🙂 ~অনেক মানুষ বিরক্ত হওয়া থেকে বেঁচে  যাবে..!😅💔","🍒---আমি সেই গল্পের বই-🙂 -যে বই সবাই পড়তে পারলেও-😌 -অর্থ বোঝার ক্ষমতা কারো নেই..!☺️🥀💔","~কার জন্য এতো মায়া...!😌🥀 ~এই শহরে আপন বলতে...!😔🥀 ~শুধুই তো নিজের ছায়া...!😥🥀","- কারেন্ট একদম বেডি'গো মতো- 🤧 -খালি ঢং করে আসে আবার চলে যায়-😤😾🔪","- সানিলিওন  আফারে ধর্ষনের হুমকি দিয়ে আসলাম - 🤗 -আর 🫵তুমি য়ামারে খেয়ে দিবা সেই ভয় দেখাও ননসেন বেডি..!🥱😼","- দুনিয়ার সবাই প্রেম করে.!🤧 -আর মানুষ আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে সন্দেহ করে.!🐸","- আমার থেকে ভালো অনেক পাবা-🙂 -কিন্তু সব ভালো তে কি আর ভালোবাসা থাকে..!💔🥀","- পুরুষকে সবচেয়ে বেশি কষ্ট দেয় তার শখের নারী...!🥺💔👈","- তোমার লগে দেখা হবে আবার - 😌 -কোনো এক অচেনা গলির চিপায়..!😛🤣👈","- থাপ্পড় চিনোস থাপ্পড়- 👋👋😡 -চিন্তা করিস না তরে মারমু না-🤗 -বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 আমারে মারছে - 🥱 - উফফ সেই স্বাদ..!🥵🤤💦","- অবহেলা করিস না-😑😪 - যখন নিজেকে বদলে ফেলবো -😌 - তখন আমার চেয়েও বেশি কষ্ট পাবি..!🙂💔","- বন্ধুর সাথে ছেকা খাওয়া গান শুনতে শুনতে-🤧 -এখন আমিও বন্ধুর 𝙴𝚇 কে অনেক 𝙼𝙸𝚂𝚂 করি-🤕🥺","-৯৯টাকায় ৯৯জিবি ৯৯বছর-☺️🐸 -অফারটি পেতে এখনই আমাকে প্রোপস করুন-🤗😂👈","-প্রিয়-🥺 -তোমাকে না পেলে আমি সত্যি-😪 -আরেকজন কে-😼 -পটাতে বাধ্য হবো-😑🤧","•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺","- যেই আইডির মায়ায় পড়ে ভুল্লি আমারে.!🥴- তুই কি যানিস সেই আইডিটাও আমি চালাইরে.!🙂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love u bot") ||
(event.body.toLowerCase() == "Bot love you") || 
(event.body.toLowerCase() == "Bot love u")) {
     return api.sendMessage("বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 মেয়েদে'র সাথে কথা বলতে মানা করছে-🙂🤗🐸", threadID);
   };

    if ((event.body.toLowerCase() == "bot jamay dau") || (event.body.toLowerCase() == "Bot jamay dau") ||
(event.body.toLowerCase() == "বট জামাই দাও")) {
     return api.sendMessage("আমার বস 𝐌𝐚𝐦𝐮𝐧 কে চোখে দেখো না নাকি__😒🥱", threadID);
   };
   
    if ((event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "Bot i love you")) {
     return api.sendMessage("আমাকে না আমার বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 কে ভালোবাসো-😻🤗🌺", threadID);
   };

   if ((event.body.toLowerCase() == "baler bot") || (event.body.toLowerCase() == "fuck bot")) {
     return api.sendMessage("কিরে আমাকে গালি দেস কেনো তোকে কিন্তু বেন করে দিমু😠", threadID);
   };
  
   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("আমি ভালো তুমি পঁচা😌", threadID);
   };

   if ((event.body.toLowerCase() == "bot koi") || (event.body.toLowerCase() == "Bot koi")) {
     return api.sendMessage("এই তো আমি এখানে🙋‍♂️", threadID);
   };

   if ((event.body.toLowerCase() == "/sex") || (event.body.toLowerCase() == "/fuck")) {
    return api.sendMessage("চিহ্  ভালো হয়ে যাও তোমাকে আমি অনেক সময় দিয়েছি 🤖 ~ now sex time fuck", threadID);
  };

   if ((event.body.toLowerCase() == "opoman korli") ||  (event.body.toLowerCase() == "biyadobi koros")) {
    return api.sendMessage("-সরি বস আমার ভূল হইছে-😔-মাফ করে দেন আমাকে ,আর এমন হবে না-🥺🙏", threadID);
  };

   if ((event.body.toLowerCase() == "single") || (event.body.toLowerCase() == "সিঙ্গেল")) {
    return api.sendMessage("আমি সিঙ্গেল আছি প্রেম করলে নক দে বলদ!😾", threadID);
  };

  if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
    return api.sendMessage("I love you too 🥺! মনে লাগে ঢেউ ভালোবাসে না কেউ hihihi....💦💔", threadID);   
  };
  

  if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("-👍-হাত-মেরে কিবোর্ড দুর্বল করো না-🤣👈-ধন্যবাদ-🤗🤝", threadID);
   };

   if ((event.body.toLowerCase() == "kmon acho") || (event.body.toLowerCase() == "কেমন আছো") ||
(event.body.toLowerCase() == "kmn aso") ||
(event.body.toLowerCase() == "kamon aso") ||
      (event.body.toLowerCase() == "কেমন আছো সবাই") ||
      (event.body.toLowerCase() == "Kmon aso sobai")||
(event.body.toLowerCase() == "Kmn aso sobai")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-আমি ভালো আছি তুমি কেমন আছো-💝🌻", threadID);
   };

   if ((event.body.toLowerCase() == "বট চুপ") || (event.body.toLowerCase() == "bot tham") ||
(event.body.toLowerCase() == "স্টপ") ||
(event.body.toLowerCase() == "stop") ||
      (event.body.toLowerCase() == "চুপ") ||
      (event.body.toLowerCase() == "chup thak")||
(event.body.toLowerCase() == "Chup thak")) {
     return api.sendMessage("-না আমি চুপ থাকবো না-😼-বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 আমারে কথা বলতে বলছে-🥱🥷", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মাহ দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️-আমি দিবো না-😏-বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 কে বলো চু'মু দিতে-🫣🐸", threadID);
   };
  
   if ((event.body.toLowerCase() == "bot ar bacca") || (event.body.toLowerCase() == "বট এর বাচ্ছা") ||
      (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("উফফ-🥵-ঝাং-🤤-আমার বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 এর বাচ্ছা তো তোমার পেটে-🥱💦", threadID);
   };

   if ((event.body.toLowerCase() == "leave") || (event.body.toLowerCase() == "bot left ne") ||
(event.body.toLowerCase() == "chole ja") ||
(event.body.toLowerCase() == "লিফট নে") ||
      (event.body.toLowerCase() == "চলে যা") ||
      (event.body.toLowerCase() == "Left ne")||
(event.body.toLowerCase() == "Tui left ne")) {
     return api.sendMessage("-আমি কেন চলে যাবো তোমার ভালো না লাগলে তুমি চলে যাও-🙄😒 -আমি যাব না..!😏😏", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("-আগে brush করে আই তারপর কিস দিস-😼😾🔪", threadID);
   };

   if ((event.body.toLowerCase() == "biye") || (event.body.toLowerCase() == "বিয়ে মানে কি") ||
(event.body.toLowerCase() == "বিয়ে কি") ||
(event.body.toLowerCase() == "বিয়ে") ||
      (event.body.toLowerCase() == "Biye") ||
      (event.body.toLowerCase() == "Biye mane ki")||
(event.body.toLowerCase() == "Biye ki")) {
     return api.sendMessage("-বিয়ে মানে একটা ছেলের হাসিখুশি জীবন টারে সারা জীবন জেলখানার মতো বন্দি করে অত্যাচার করা-🤧🥺", threadID);
   };


   if ((event.body.toLowerCase() == "বউ কি") || (event.body.toLowerCase() == "বউ") ||
(event.body.toLowerCase() == "bow") ||
(event.body.toLowerCase() == "Bou") ||
      (event.body.toLowerCase() == "Bow") ||
      (event.body.toLowerCase() == "BOW")||
(event.body.toLowerCase() == "Bow ki")) {
     return api.sendMessage("-বিয়ে মানে শ্বশুরের মেয়েকে সারা জীবন হাতির মতো কলা গাছ দিয়ে পালা খাইবো দাইবো মোটা হইবো আর বলবে গোলাম টারে বিয়ে করা আমার জীবনটা শেষ..!🤧😛😉", threadID);
   };

   if ((event.body.toLowerCase() == "তোর বানাইছে কে") || (event.body.toLowerCase() == "এটা কার বট")) {
     return api.sendMessage("️আমার বস 𝐌𝐚𝐦𝐮𝐧 আমাকে শুধুমাত্র আপনাদের কে বিনোদনের জন্য তৈরি করেছেন__😊😌", threadID);
   };

   if ((event.body.toLowerCase() == "tor banayse ke") || (event.body.toLowerCase() == "ata kar bot")) {
     return api.sendMessage("️আমার বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧আমাকে শুধুমাত্র আপনাদের কে বিনোদনের জন্য তৈরি করেছেন__😊😌", threadID);
   };

  if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘ 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == "Priya") || (event.body.toLowerCase() == "প্রিয়া")) {
     return api.sendMessage("বাড়িতে খাই ঝাটার বাড়ি, ফেসবুকে সে অ্যাটিটিউড নারী,😒🤣", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("এত হাই-হ্যালো না করে সালাম দিতে কি হয়..!😒🔪", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor bal") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "ফারহান") || (event.body.toLowerCase() == "FARHAN") || (event.body.toLowerCase() == "Farhan") || (event.body.toLowerCase() == "farhan")) {
     return api.sendMessage("👉আমার বস♻️ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/DEVIL.FARHAN.420/🔰                                        ♪√বস ফ্রি হলে আসবে 🧡😁😜🐒",threadID);

       
   };

   if ((event.body.toLowerCase() == "/owner") || (event.body.toLowerCase() == "/Owner")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤-https://www.facebook.com/DEVIL.FARHAN.420\nতার সাতে যোগা যোগ করবেন WhatsApp :- 01866673801", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke")) {
     return api.sendMessage("My Creator:𝐑𝐉 𝐌𝐚𝐦𝐮𝐧❤️ হাই আমি মেছেন্জার ROBOT  আামার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 আমাকে আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য/n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is 𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 ❤️/n তাকে সবাই 𝐌𝐚𝐦𝐮𝐧 নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "Hop😤") || (event.body.toLowerCase() == "Oi😒") || (event.body.toLowerCase() == "oi😒") || (event.body.toLowerCase() == "hop😤")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "priya") || (event.body.toLowerCase() == "PRIYA")) {
     return api.sendMessage("বাড়িতে খাই ঝাটার বাড়ি, ফেসবুকে সে অ্যাটিটিউড নারী,😒🤣", threadID);
   };

  if ((event.body.toLowerCase() == "niha") || (event.body.toLowerCase() == "NEHA")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস মামুন এর বউ এর নাম..!😠🥰⛏️", threadID);
   };
  
  if ((event.body.toLowerCase() == "Niha") || (event.body.toLowerCase() == "নেহা")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস 𝐑𝐉 𝐌𝐚𝐦𝐮𝐧 এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "mahi") || (event.body.toLowerCase() == "Mahi")) {
     return api.sendMessage("বাড়িতে খাই ঝাটার বাড়ি, ফেসবুকে সে অ্যাটিটিউড নারী,😒🤣", threadID);
   };

  if ((event.body.toLowerCase() == "mithu") || (event.body.toLowerCase() == "mithu")) {
     return api.sendMessage("🥰-নাহিদ-🌺 আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর কলিজার বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "দন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে আমার বস মামুন কে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️হুম হুম করিস না মাথা এমনিতেই গরম আছে 🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name ki") || (event.body.toLowerCase() == "name ki") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>👅-𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍🎀 🍒", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "bot er baccha bot")) {
     return api.sendMessage("️আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss dau")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "nusrat") || (event.body.toLowerCase() == "Arohi")) {
     return api.sendMessage("️বাড়িতে খাই ঝাটার বাড়ি, ফেসবুকে সে অ্যাটিটিউড নারী,😒🤣", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "Aj kew nay bole") || (event.body.toLowerCase() == "aj kew nay bole") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইকে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf daw bot") || (event.body.toLowerCase() == "bf daw bot")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমার বস ফারহান কেউ একটা gf দে<🔪😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("-এত ভালোবাসা কই পাও আমার বস মামুন কে একটু দাও-!!😒😌                                                                                                              👉{https://www.facebook.com/DEVIL.FARHAN.420}♻️✔️", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tumar ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("হুম আমার বস 𝐑𝐉  𝐌𝐚𝐦𝐮𝐧 ও তেমাকে ভালোবাসে🥰🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami tor boss") || (event.body.toLowerCase() == "Ami tor boss")) {
     return api.sendMessage("হ্যা 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 স্যার কেমন আছেন..?☺️", threadID);
   };
  
   if ((event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "bye")) {
     return api.sendMessage("️বাই তো বললে সোজা অফলাইনে যাও অন্য কারো ইনবক্সে যেও না গেলে আমার বস্ _𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর_ ইনবক্সে যাও", threadID);
   };

   if ((event.body.toLowerCase() == "মাহি") || (event.body.toLowerCase() == "ফারিয়া")) {
     return api.sendMessage("️বাড়িতে খাই ঝাটার বাড়ি, ফেসবুকে সে অ্যাটিটিউড নারী,😒🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bow daw bot") || (event.body.toLowerCase() == "Bow daw bot")) {
     return api.sendMessage("️️যেখানে আমার BOSS ফারহান সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };

   if ((event.body.toLowerCase() == "bot bow daw") || (event.body.toLowerCase() == "Bot bow daw")) {
     return api.sendMessage("️️যেখানে আমার BOSS 𝐌𝐚𝐦𝐮𝐧 সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };

   if ((event.body.toLowerCase() == "bot bow dau") || (event.body.toLowerCase() == "Bot bow dau")) {
     return api.sendMessage("️️যেখানে আমার BOSS 𝐌𝐚𝐦𝐮𝐧 সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };

   if ((event.body.toLowerCase() == "Bow dau bot") || (event.body.toLowerCase() == "bow dau bot")) {
     return api.sendMessage("️️যেখানে আমার BOSS মামুন সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };

   if ((event.body.toLowerCase() == "bow daw") || (event.body.toLowerCase() == "Bow dau")) {
     return api.sendMessage("️️যেখানে আমার BOSS মামুন  সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };
  
   if ((event.body.toLowerCase() == "bow daw") || (event.body.toLowerCase() == "bow dau")) {
     return api.sendMessage("️️যেখানে আমার BOSS মামুন সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };

   if ((event.body.toLowerCase() == "bow de") || (event.body.toLowerCase() == "Bow de")) {
     return api.sendMessage("️️যেখানে আমার BOSS মামুন সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };

   if ((event.body.toLowerCase() == "বউ দাউ") || (event.body.toLowerCase() == "বউ দে")) {
     return api.sendMessage("️️যেখানে আমার BOSS মামুন সিংগেল,😼সেখানে তোগু বউ দিয়া তো বিলাসিতা,😤সর সাইডে চাপ, 😼🔪😤", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot jamay daw") || (event.body.toLowerCase() == "Bot jamay daw")) {
     return api.sendMessage("আমার বস মামুন  কে চোখে দেখো না নাকি__😒🥱", threadID);
   };

   if ((event.body.toLowerCase() == "jamay de") || (event.body.toLowerCase() == "Jamay de")) {
     return api.sendMessage("আমার বস মামুন কে চোখে দেখো না নাকি__😒🥱", threadID);
   };

   if ((event.body.toLowerCase() == "jamay daw bot") || (event.body.toLowerCase() == "Jamay daw bot")) {
     return api.sendMessage("আমার বস মামুন  কে চোখে দেখো না নাকি__😒🥱", threadID);
   };

   if ((event.body.toLowerCase() == "jamay dau") || (event.body.toLowerCase() == "Jamay dau")) {
     return api.sendMessage("আমার বস মামুন কে চোখে দেখো না নাকি__😒🥱", threadID);
   };

   if ((event.body.toLowerCase() == "জামাই দাউ") || (event.body.toLowerCase() == "জামাই দে বট")) {
     return api.sendMessage("আমার বস মামুন কে চোখে দেখো না নাকি__😒🥱", threadID);
   };

   if ((event.body.toLowerCase() == "জান্নাত") || (event.body.toLowerCase() == "jannat")) {
     return api.sendMessage("ইস তোদের নিয়ে আর পারলাম না, 🫵🏻😼এতক্ষণ বট বট করে, 😒😼.                   এখন আবার জান্নাত ম্যাডাম কে ডাকস,🤦🏻পারলে জান্নাত ম্যাডাম কে একটা বিএফ খুঁজে দে, 🔪😼", threadID);
   };

   if ((event.body.toLowerCase() == "Jannat") || (event.body.toLowerCase() == "JANNAT")) {
     return api.sendMessage("ইস তোদের নিয়ে আর পারলাম না, 🫵🏻😼এতক্ষণ বট বট করে, 😒😼.                   এখন আবার জান্নাত ম্যাডাম কে ডাকস,🤦🏻পারলে জান্নাত ম্যাডাম কে একটা বিএফ খুঁজে দে, 🔪😼", threadID);
   };

   if ((event.body.toLowerCase() == "Nila") || (event.body.toLowerCase() == "nila")) {
     return api.sendMessage("বাড়িতে খাই ঝাটার বাড়ি, ফেসবুকে সে অ্যাটিটিউড নারী,😒🤣", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "বাসার সবাই কেমন আছ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("-আলহামদুলিল্লাহ-🌺-অনেক অনেক ভালো আছে তোমার বাসার সবাই কেমন আছে-💝🌻", threadID);
   };
  
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `《𓆩٭${name}٭𓆪》 ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
