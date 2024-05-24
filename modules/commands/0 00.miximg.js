module.exports.config = {
  name: "image vip",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "ramdom Facebook Profile img mix",
  commandCategory: "mix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const PREFIX = config.PREFIX
const timeStart = Date.now();
  const time = process.uptime();
     var h = Math.floor(time / (60 * 60));
    var m = Math.floor((time % (60 * 60)) / 60);
  var s = Math.floor(time % 60);
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Dhaka").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Dhaka').format('dddd');
var tl = ["😍","💞","💕","🙊","👌","🤗","🥀","💔","❣️","❤️‍🔥","😇","😌","🤭","🖤" , "💛" , "❤️" , "❤️‍🩹" , "💘" , "💝" , "💖" , "💗" , "🧡" , "💚" , "💙" , "💜" , "🤎" , "🤍" , "🍀" , "🌸" , "🦋" , "🌼" , "🌺" , "🌻" , "🍒" , "😊"];
var tle = tl[Math.floor(Math.random() * tl.length)];
const t = Date.parse("January 23, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
const res1 = await axios.get(`http://rajib-api-1.islam500.repl.co/cosplay`);
const res2 = await axios.get(`http://rajib-api-1.islam500.repl.co/bot`);
const res3 = await axios.get(`http://rajib-api-1.islam500.repl.co/gai`);
const res4 = await axios.get(`http://rajib-api-1.islam500.repl.co/ig`) 
const res5 = await axios.get(`http://rajib-api-1.islam500.repl.co/trai`);
const res6 = await axios.get(`http://rajib-api-1.islam500.repl.co/tw`);
const res7 = await
axios.get(`http://rajib-api-1.kingoflijend.repl.co/bot`)
const res8 = await
axios.get(`http://rajib-api-1.kingoflijend.repl.co/cosplay`)
const res9 = await
axios.get(`http://rajib-api-1.kingoflijend.repl.co/gai`)
var data1 = res1.data.url;
var array = [];
var data2 = res2.data.url;
var data3 = res3.data.url;
var data4 = res4.data.url;
var data5 = res5.data.url;
var data6 = res6.data.url
var data7 = res7.data.url
var data8 = res8.data.url
var data9 = res9.data.url
var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
var downloadfile3 = (await axios.get(data3, {responseType: 'stream'})).data;
var downloadfile4 = (await axios.get(data4, {responseType: 'stream'})).data;
var downloadfile5 = (await axios.get(data5, {responseType: 'stream'})).data;
var downloadfile6 = (await axios.get(data6, {responseType: 'stream'})).data;
var downloadfile7 = (await axios.get(data7, {responseType: 'stream'})).data;
var downloadfile8 = (await axios.get(data8, {responseType: 'stream'})).data;
var downloadfile9 = (await axios.get(data9, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);    
    array.push(downloadfile3);
    array.push(downloadfile4);
    array.push(downloadfile5);    
    array.push(downloadfile6);
    array.push(downloadfile7);
    array.push(downloadfile8);
    array.push(downloadfile9);
  api.sendMessage({
                                                body: `╭•┄┅════❁🌺❁════┅┄•╮\n     𝐌𝐈𝐗 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐈𝐌𝐀𝐆𝐄\n╰•┄┅════❁🌺❁════┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n\nᴄʀᴇᴀᴛᴇ ʙʏ :𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭\nɪᴍɢ ᴄᴀᴛᴇɢᴏʀʏ: ${tle}`, attachment: array},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }