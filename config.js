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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_19_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI4LFxuICAgICAgICAzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMzLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDYsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgNSxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5PNjVtVExjdWptOVNXZFMzRDZLelA3S3ZYQ1Jyd2dkNDB1VlhEWTlHZE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTU3MjczNTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdDOTE0NzE5QjhGN0ZDOTM4RjFGNUNBOTU0Njg1MTQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE2OTE4MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI1ODJTQy1DTlNnLWN0c2hjVXRTM3NBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU4ODdlZGRiLTBjM2UtNDczMC05MDM2LTcwMzYyZGVjODM4NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAxOTEsXG4gICAgICAxNjAsXG4gICAgICAxOSxcbiAgICAgIDEyLFxuICAgICAgMTgzLFxuICAgICAgNjMsXG4gICAgICAxNjcsXG4gICAgICAzMyxcbiAgICAgIDQ5LFxuICAgICAgMSxcbiAgICAgIDEwOSxcbiAgICAgIDE2MyxcbiAgICAgIDEwMixcbiAgICAgIDIwLFxuICAgICAgNjUsXG4gICAgICAxODksXG4gICAgICA2NSxcbiAgICAgIDIyMixcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxMzAsXG4gICAgICA0OCxcbiAgICAgIDg1LFxuICAgICAgMzgsXG4gICAgICA3NSxcbiAgICAgIDEzNCxcbiAgICAgIDI0MixcbiAgICAgIDE4NyxcbiAgICAgIDE1NixcbiAgICAgIDIyMixcbiAgICAgIDIzMixcbiAgICAgIDEwNCxcbiAgICAgIDYxLFxuICAgICAgNzAsXG4gICAgICAxNjAsXG4gICAgICAxMTYsXG4gICAgICAyMSxcbiAgICAgIDExNixcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIRUVWUDlTR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTU3MjczNTY6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTk0NzgzOTU1NzgxNzozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPZUt0NGtIRU5IdW1MVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInh1WFJyQnFyZnNQTTJIU1RnemowY2xsVXd1RHdqOElGdXZQbW1McnFoVFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQk5HcjY1d2F5dkVXT1hHRTY5aC9LMUpSZkJEQUVnM1E0ZVZjcWNqSU9jL3UzeTEyN21ha2ZZRXRaM3V2ZHJZOFBvZ3VnZ3ZrYXpUdlRCaVJFelJWQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmJRVHJNMmdveWJ1bGM5dkp6cFJZL2lqL0JPU2JqV2pyS1BzRkVRQzdwb3g0M2MxbkxiWjdBZ1RNTXI1RDlhZG5ycGROMUIwVnk0RUFEU1U0d28rQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTU3MjczNTY6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE2OTE3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUI0aVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjRpLmpzb24iOiAie1wia2V5RGF0YVwiOlwibWJjSWkycy9NNTRXL3ZPNXV2N1pkdldJMXBWYStpSnZDTUZ6YkN3cDhNUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODk4ODI1MDYyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMTY5MDUyMDYwXCJ9Igp9"  // PUT your SESSION_ID 


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
