//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "9478126144,94781226144";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NnZEpheHVYa3Uya1dDSSticG4rVDJmZzJUQmcrYXNRaW5JQXI4UWVtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWS9oc2xkNExlUUt0a0tQaWZ2WkNHbTh5OG1XMEM1cXdPYzdWOWpGSXJnWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUFZIcEFlSVo4aXNzNXRMQ1lTY052SDIvaVB1N2lSQVBranZFc1VUUDNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRN1lsbmk2SnFydThaci9uNDRqSlZESlA1Q2QxVlF0RjNCRUNONFlWVHpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBWC9NeFZKVlhUdjhsdkp0VnY4eWpBSmd3UHVCZnpIS0xyeThPQUI5WE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDVUJaU21BQW16UGFpQ1d4YVFCT3paZDlwcHNlREtPWFdWWjhmZEFEeFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUR5aXllVWlnVGpTV0pBY2Jvc1AwMEV3VmRnTmNxSWxxZU1wWHVXbkVrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW8rSmVtQ1RqSU1lL2kvSEVLaEhjcktmTisra2ZxQ2VtcnphV21leENYRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktqM3R6cFFvaUhkdExPdkxvK3ZZTWdZMWtCQUIxN1NWZU1OZldVcVdZUk5xdzMvV2ZmaFRlcFl1K0d2TmR4ZzlBc0R2cmVncjBzTnBXbU9YZUlsakJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJlSDJNeDlucjJ6RWdaZUozUnBhc1lGZEJrVGhHbTJWT0RweGljaHk4RTNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzgxMjI2MTQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0QTJGNzU0QzA4MzU1MzBGN0U5NURBMjJCM0I3QkUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA2ODU4MjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjVWdUdyaVV6U2xLMUc3UmpFc21STlEiLCJwaG9uZUlkIjoiMjk5NGE4MGMtNzViMC00YjZiLWE0NTktZWJhNzQ3ZjFjOGRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo0NHN6dXUxYUwyNXhtTTcxeWVjaUljV1VhST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNUgrblRkZzA2T2ZFbjVzc2lCcVBKZ1FlT2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVFZNDYzRzIiLCJtZSI6eyJpZCI6Ijk0NzgxMjI2MTQ0OjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIPCdkJXwnZCI8J2QjPCdkJQgICDwnZCS8J2Qk/CdkIDwnZCR8J2QkyA88J2QlvCdkIDwnZCI8J2Qkz4gICAgICAgICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgIPCdkJLwnZCT8J2QgPCdkJPwnZCU8J2QkiDwnZCK8J2QiPCdkI3wnZCGIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnJ5ZkVHRU82cHZyUUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJlK2N4ekRzSUdCMFdHWVNYRllwU1oyRGxVeGtoKzROZ2tGdlNrTmR1MjFBPSIsImFjY291bnRTaWduYXR1cmUiOiJsOWtvbUt5Z3FDN2wrU1RYVmZ4MUw4T0gweEp3Z3ZQb0ZTOERUZkU0M0duT1VKc3AvVG11Vncwa3RHOThOQmhSbTJ3aVJsUmVncytXTXZHc3lVNkRCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSWVrclF2UFZsQ05nWnZvdVVsUDVkdXBHM1M5S29WTEk3bnRmYllSMldvNUtJMDBzZCs2WEU0SU1rdWhITjBpZkU1VHZmZ3dmODB5MjlsUDhUKzFyREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4MTIyNjE0NDoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdm5NY3c3Q0JnZEZobUVseFdLVW1kZzVWTVpJZnVEWUpCYjBwRFhidHRRIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjg1ODIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUgvMyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐑𝐂𝐃-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "V ɪ  m u  🐼💗🖇️",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
