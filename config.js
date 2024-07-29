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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_11_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDgyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRrRUVBVjBqcEFtVUxKa3Z4NmtQVklKZlhpb1dnVlFldUZ1UDl5KzNPMUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjU2T29neEM1VFNpTl96LTBuckloWkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDIzZWUxZDEtMzExMC00YTMzLWFiMjItOGE5YmI2ZWYxM2E5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE1OSxcbiAgICAgIDgwLFxuICAgICAgMjExLFxuICAgICAgMjIsXG4gICAgICAyMzMsXG4gICAgICAxNzUsXG4gICAgICAyNTUsXG4gICAgICAyMDcsXG4gICAgICA0LFxuICAgICAgMTEyLFxuICAgICAgMjEwLFxuICAgICAgMjA4LFxuICAgICAgMjEyLFxuICAgICAgMTYwLFxuICAgICAgMTk4LFxuICAgICAgMjYsXG4gICAgICAzNyxcbiAgICAgIDE2NyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDMsXG4gICAgICAzMixcbiAgICAgIDgyLFxuICAgICAgNzgsXG4gICAgICAyNDQsXG4gICAgICAyNyxcbiAgICAgIDUyLFxuICAgICAgODAsXG4gICAgICAxMzMsXG4gICAgICA1OSxcbiAgICAgIDEzOSxcbiAgICAgIDEwLFxuICAgICAgMjMsXG4gICAgICAxMDEsXG4gICAgICAyMzAsXG4gICAgICAyOSxcbiAgICAgIDE1NCxcbiAgICAgIDEwMCxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllGWFNGTEdCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNTcyNzM1NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUxOTQ3ODM5NTU3ODE3OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095S3Q0a0hFTy9JbkxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHVYUnJCcXJmc1BNMkhTVGd6ajBjbGxVd3VEd2o4SUZ1dlBtbUxycWhUUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEYkFyWnpDeExuUGFGcHBncHpWQVNBb0E2NGQ5UVhiNkwxdUFvc0FQN0lzTFhhbzRYb05yOFNvMVhVNmpkZ2VXMm1wNTFtSWRRM2QrTEgyb0h4QXhDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZa1p0TmlGUWVMWjdZbld2WWFyUGpvOUtOWktRcUhpeXpzSnVDQTNRbHFRNktRUk8vT0pka1hzMXFKV0FBRFVJd1dYMFAwdzRxVXRJUFFkRnNKSmVCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNTcyNzM1NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjI5ODc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjRtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNG0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVbWd2NnFxZng1eC9BbTZuQkdCQk9IUjJFaGZOU1d5M1Y2akVDUkhrellJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTg4MjUwNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxODQyNzEzODRcIn0iCn0="  // PUT your S

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
