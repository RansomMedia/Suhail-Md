const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160789911";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_31_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjMyLFxuICAgICAgICA4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllFcW0ycUpNbWRtTU83YytzelVFRFA5d0R6anhSbHhZNjNqcWlkS3VrWnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkEyYnRTNXp5UmhtYnNYeHBnakJvYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWMzMWIxZmQtNWVlNy00YWYzLTgzMjYtMGIyZTQzYzc5ODliXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgODcsXG4gICAgICA1MCxcbiAgICAgIDE2NixcbiAgICAgIDEzNCxcbiAgICAgIDE1MCxcbiAgICAgIDEwNSxcbiAgICAgIDU3LFxuICAgICAgMjE4LFxuICAgICAgMTYyLFxuICAgICAgMixcbiAgICAgIDY0LFxuICAgICAgMjcsXG4gICAgICAyNDAsXG4gICAgICA2MCxcbiAgICAgIDc4LFxuICAgICAgMTczLFxuICAgICAgMTkwLFxuICAgICAgMTk0LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAyMzIsXG4gICAgICAxNjMsXG4gICAgICAxMjksXG4gICAgICA5OSxcbiAgICAgIDE4LFxuICAgICAgMTk4LFxuICAgICAgMTE3LFxuICAgICAgMTUwLFxuICAgICAgODcsXG4gICAgICAyMDYsXG4gICAgICAyMjQsXG4gICAgICAyMTQsXG4gICAgICA3NSxcbiAgICAgIDE3NyxcbiAgICAgIDE3NyxcbiAgICAgIDI0MSxcbiAgICAgIDE4NCxcbiAgICAgIDU3LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNYV0dFSEpYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYwNzg5OTExOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmFuc29tZSBNZWRpYVwiLFxuICAgIFwibGlkXCI6IFwiMTAyOTgwODUwMjk4OTcxOjE3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pQaTJma0VFTXEvNzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ0JlZW9hdk52WXI5ckhtWGRtamVRNkY2SEZZZ0JKbXdzVlhsNlJKbHJHRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoT20rSUl4ZlhrMlEzZDAwdDFBTEtxaU9mVGJjR1ptT1dVcTgrdEdhRFpYa0VhK0VTUVhXQWhuVzkvb0lnR0ZjVVhBQi8xMjJUc3F4bERqU082SldCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzRTB5NlpZSTRKbXdPTnNiQU1sYjVMU21JeCtMY1RHem8xcWloRS9QKzlaMGVrZ292Vm9YNEFhY1U4d1dmeW8yRDlnNEdzT3F6WmdKeENTQjlqM2tBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYwNzg5OTExOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Mzk0MjU0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTJYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJMlguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMajhkRGYreFl1aGNoU2VvUVNNMjJhelNRWXpwb2YzMm9MaGZRTUtSdHRzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjg5Njc5NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzMTEyNzI3MTNcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
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

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























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
