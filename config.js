const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "www.youtube.com" ;
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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_39_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWXlmYUJEMW1TWmxOUVpYMnVVQ1ZWVVBKb0Z1NEtIVEdwV2xHM0pYNURadz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic19TRWE2aUlSYzJZYUdrVFo1OWtTZ1wiLFxuICBcInBob25lSWRcIjogXCI4ODFlN2NiZC01NGExLTQ1MDktOGFjNS04ZjVmMTY2ZTc5ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMjE5LFxuICAgICAgMjE5LFxuICAgICAgMTE0LFxuICAgICAgMTcyLFxuICAgICAgNTUsXG4gICAgICAxNzMsXG4gICAgICAxNSxcbiAgICAgIDE2MCxcbiAgICAgIDE4MSxcbiAgICAgIDI2LFxuICAgICAgMTUwLFxuICAgICAgMjksXG4gICAgICAyMTUsXG4gICAgICA3LFxuICAgICAgMTczLFxuICAgICAgNzQsXG4gICAgICAxNzYsXG4gICAgICA1NixcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA3MSxcbiAgICAgIDcwLFxuICAgICAgMTk1LFxuICAgICAgMjA5LFxuICAgICAgMTc4LFxuICAgICAgMjI5LFxuICAgICAgMTExLFxuICAgICAgMTIsXG4gICAgICA4MyxcbiAgICAgIDEyNCxcbiAgICAgIDE4NSxcbiAgICAgIDExMSxcbiAgICAgIDIwNSxcbiAgICAgIDE5MixcbiAgICAgIDIyOCxcbiAgICAgIDExMixcbiAgICAgIDE2NyxcbiAgICAgIDE4OSxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3Tjk5RUpQV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDQxOTgwMTQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdl5TwnZWV8J2VnvCdlZrwnZWfXCIsXG4gICAgXCJsaWRcIjogXCIxOTMwNTkyODMzMTI4MzI6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdmt0TGNHRU42S3M3VUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlCc0dRZ3I1eSsyRWRnamFaSWF3eU5aUVBuamxGRHJ5Vm5lNzk4ekJEbEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU09sdjdDMTZOaHVTdmQ3R3haVEJKTFpBdnMrdjlPcXNMaHVYSnFlcHhCM2tHcTZ6OXZwaFdmT3JoYk5DVTU5SGc1dEZ1YkFnN3YxMVBCZjhSOFVwQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaWIwaS81a08vWmFaTlY5LzFYSml4bTZiR3ZQVzV3N3h1SlVxOUE0TzllNnZRcWdFbkw4dzFMK2hSbWhWUGtjU1lkMXpUZUR0dmZlSWxkS0dzcENXaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDQxOTgwMTQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1OTg3NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFObmJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5uYi5qc29uIjogIntcImtleURhdGFcIjpcIi9ST1NnREpIL1Y4bHNEck9wcW16QnBVd0szMldPdkttR0NjNVJUZjRxRGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyNjgyMDk4NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIyNTExMzAyNTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "GIMAA-MD",
  ownername:process.env.OWNER_NAME|| "Thisara",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "suhail"  ).toUpperCase(),



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
