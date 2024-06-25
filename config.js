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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_41_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTExLFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NixcbiAgICAgICAgODEsXG4gICAgICAgIDE2LFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqdnA3ei9ibmFzdG5DbDViUVNQVlBJMTFqSmF0UUFFQTBHYnJPSW5XYjBJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTSF9scHQwT1JMcVFYN1hXajc1dkdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQyMTE1MmQ3LTNkNWItNDgzYS04NDQxLTEwMzlkN2U1YzkwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAyMjYsXG4gICAgICAxODMsXG4gICAgICA1OSxcbiAgICAgIDIwMCxcbiAgICAgIDEyNSxcbiAgICAgIDExMyxcbiAgICAgIDAsXG4gICAgICAxMzksXG4gICAgICAyNDAsXG4gICAgICAyMDksXG4gICAgICAyMTEsXG4gICAgICAxNjgsXG4gICAgICA4MCxcbiAgICAgIDE2OCxcbiAgICAgIDIwMixcbiAgICAgIDc4LFxuICAgICAgMTI3LFxuICAgICAgMTg0LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDEyMyxcbiAgICAgIDIxOCxcbiAgICAgIDE5MCxcbiAgICAgIDQ5LFxuICAgICAgMTU0LFxuICAgICAgNjYsXG4gICAgICAyMTQsXG4gICAgICAyMjEsXG4gICAgICAxNjAsXG4gICAgICAxMDMsXG4gICAgICAyMzEsXG4gICAgICAyNDgsXG4gICAgICAzMixcbiAgICAgIDIyNCxcbiAgICAgIDIzNixcbiAgICAgIDgxLFxuICAgICAgNTMsXG4gICAgICAyMDQsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpGS0E4WFEyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYwNzg5OTExOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmFuc29tZSBNZWRpYVwiLFxuICAgIFwibGlkXCI6IFwiMTAyOTgwODUwMjk4OTcxOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIaTJma0VFT24xNnJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ0JlZW9hdk52WXI5ckhtWGRtamVRNkY2SEZZZ0JKbXdzVlhsNlJKbHJHRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzai81N09NL3kzSG13a0V1ZkNDbk1wVDYvZkZ0UDkzYlZpVU1hdDBIODRpeGVORjg5UG9CSGxpUUswclZMTmh3TXVFUmNEcFJweU1QaWxEd2hwclZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2cHBoQ2FTVXNpazJwZVpyS0lSMlQ4QzRNNWxjOVdKNS9BOWdSanVJY1dxS1h1MnNaR0J6RS9ubFpibUQ5TWs0Rm5IWkNVOEpxSmZINVdVeGpXbFhBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYwNzg5OTExOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzE5Mjc3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
