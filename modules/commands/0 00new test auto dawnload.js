const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
    name: "bing",
    version: "1.0",
    Credits: "Cock,dipto| credit change korla bts💩🐤",
    countDown: 15,
    hasPermssion: 0,
    Description: "Generate images by bing",
    commandCategory: "download",
  },

module.exports.run = async function ({ api, message, args , event }) {
    try {
      const dipto = args.join(" ");

      const w = await api.sendMessage("Please wait...", event.threadID);

      const data2 = {
        prompt: dipto, cookie:"16CkFT_Yo2dTmhoXdPKvl3szHN-bMO4i1E6kKtmJty7jJRAXHiXrXEjB7dP2u10-00SC0mQLLEk7y5voT50rjmBdU_CEyiYJ8XFtSBG4NDs69t_Olhm-LZ_qsg8gcnXkruj5v3TOo0HJZcN_hGCc3c_UgyoPs6EVgUGVNIzRqTpjEA8ZC1x6pbyS1cGJePPtncTKHbqGQijUCeOxFC3DeBA"};

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('https://project-dallee3.onrender.com/dalle', data2, config);

      if (response.status === 200) {
        const imageUrls = response.data.image_urls.filter(url => !url.endsWith('.svg'));
        const imgData = [];

        for (let i = 0; i < imageUrls.length; i++) {
          const imgResponse = await axios.get(imageUrls[i], { responseType: 'arraybuffer' });
          const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
          await fs.outputFile(imgPath, imgResponse.data);
          imgData.push(fs.createReadStream(imgPath));
        }

      //  await api.unsendMessage(w.messageID);

        await api.sendMessage({
          body: `-ᴄʀᴇᴀᴛᴇ ʏᴏᴜʀ ɪᴍɢ✨🌺`,
          attachment: imgData
        },event.threadID);
      } else {
        throw new Error("Non-200 status code received");
      }
    } catch (error) {
      return api.sendMessage("Redirect failed! Most probably bad prompt.",event.threadID);
    }
}