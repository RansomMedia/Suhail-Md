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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160789911";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_17_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDcwLFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY1LFxuICAgICAgICA4MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU3LFxuICAgICAgICA2LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzLFxuICAgICAgICA5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpQUNXVkNCS3ZVZjlocFhQSWYvQjUra3Z2eHllRUIvZVJWbjVCZ3FaQ1hvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFT1Y1SDh1d1NxNk1Ja2NBNzBHWHBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImY2NDU2ZjdhLTQ4MjYtNDQ0Yi1iZGQ4LTVmMDc4OTFmNTdhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyMzksXG4gICAgICAxMTQsXG4gICAgICAyMzUsXG4gICAgICA5NyxcbiAgICAgIDI1MyxcbiAgICAgIDI4LFxuICAgICAgMTA2LFxuICAgICAgMTM4LFxuICAgICAgNDAsXG4gICAgICAxMTEsXG4gICAgICA1NixcbiAgICAgIDIzNCxcbiAgICAgIDYzLFxuICAgICAgMTk1LFxuICAgICAgNjAsXG4gICAgICAyMzksXG4gICAgICAxNzQsXG4gICAgICAzNixcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDE0OSxcbiAgICAgIDEyMixcbiAgICAgIDUsXG4gICAgICAyMjcsXG4gICAgICAyMjMsXG4gICAgICA3MixcbiAgICAgIDIyOCxcbiAgICAgIDE5NyxcbiAgICAgIDI0NCxcbiAgICAgIDEzOSxcbiAgICAgIDE0LFxuICAgICAgOTcsXG4gICAgICA0OCxcbiAgICAgIDI2LFxuICAgICAgNzksXG4gICAgICAyMDYsXG4gICAgICAxNzEsXG4gICAgICAxOTYsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLR0xZVlozMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MDc4OTkxMToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhbnNvbWUgTWVkaWFcIixcbiAgICBcImxpZFwiOiBcIjEwMjk4MDg1MDI5ODk3MToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTGkyZmtFRUtIYjY3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNCZWVvYXZOdllyOXJIbVhkbWplUTZGNkhGWWdCSm13c1ZYbDZSSmxyR0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSG5kWVIvVFg1YVM4cEhsMlFjK2R6aUtRb0kwU2NUWVJTNHgxZngyeU1UeE1sZlZWYWxUaUNtT1JQTVBKNVRxellWOW5sWWlpOGNmenZHaEswVEtPQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHZqYVlYODdabXdqbWc0clV5SGpoZzVSR3MzYWptdXJTV1AwdlNOMU44MWRjVnJ2MTVCcDJReW1PYUU0Nmpid0JFYjNmdTlwUlhYSVpwVVkwSGl5QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MDc4OTkxMToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTMzMjI2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkyWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSTJYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGo4ZERmK3hZdWhjaFNlb1FTTTIyYXpTUVl6cG9mMzJvTGhmUU1LUnR0cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzI4OTY3OTUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5MzExMjcyNzEzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
