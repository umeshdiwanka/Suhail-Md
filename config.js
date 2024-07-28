const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_07_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDEyNixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImZtZExSQ3ZFYncxUzRURGFzeVYrcGlXRkhWWkRkNTd3NG4xeDFrKzlYWnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImtwT2lUTVFUU0ZLTGZFZG1xZFB0NlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjZhZDI1YmQtYTAzMS00ZTc3LWI3MTItMDdlZmY3ZTFhZmUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDE2MSxcbiAgICAgIDE1OSxcbiAgICAgIDE2NyxcbiAgICAgIDIzMyxcbiAgICAgIDE4LFxuICAgICAgNTksXG4gICAgICA0NixcbiAgICAgIDExNCxcbiAgICAgIDExOCxcbiAgICAgIDEwNSxcbiAgICAgIDEzMixcbiAgICAgIDgsXG4gICAgICAxNjksXG4gICAgICAxMjAsXG4gICAgICAyNSxcbiAgICAgIDE0OCxcbiAgICAgIDY4LFxuICAgICAgMjQ4LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDg5LFxuICAgICAgMTY3LFxuICAgICAgMTQxLFxuICAgICAgMTMxLFxuICAgICAgMjMwLFxuICAgICAgODMsXG4gICAgICA2OSxcbiAgICAgIDEwOSxcbiAgICAgIDE1OCxcbiAgICAgIDE1MyxcbiAgICAgIDE4MSxcbiAgICAgIDQzLFxuICAgICAgMTY0LFxuICAgICAgMjIzLFxuICAgICAgMjI5LFxuICAgICAgMTQwLFxuICAgICAgMTQzLFxuICAgICAgNTQsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEFNWEZOOTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE1NzI3MzU2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTE5NDc4Mzk1NTc4MTc6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VLdDRrSEVOcjFtYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4dVhSckJxcmZzUE0ySFNUZ3pqMGNsbFV3dUR3ajhJRnV2UG1tTHJxaFRRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklkNEtTMWx4STNRa1ZzL3FUL3gzYzJQb3J3alZDdGtLZW1laFYrNDlhUGZqTUxLVmlWMVJsWk95Z2lHR3c1czdOZGczOUU3cFVQejZuMEJoRFBjZ0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNXRElhSjVrWTF6Zk42Um5SWnhXenFNdGhlMmg4enlRWEY4dUk4TEZHcHJlTDNIN3p1aU95L3hJUS9uanhtMzdGUUgzMVRHK3poRzgrZm4xd1BJU2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE1NzI3MzU2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxODY0NjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCNG1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI0bS5qc29uIjogIntcImtleURhdGFcIjpcIlVtZ3Y2cXFmeDV4L0FtNm5CR0JCT0hSMkVoZk5TV3kzVjZqRUNSSGt6WUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg5ODgyNTA2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjE4NDI3MTM4NFwifSIKfQ=="  // PUT your S

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
