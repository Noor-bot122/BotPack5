module.exports.config = {
    name: "npm",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Rahad",
    description: "NPM Package information",
    commandCategory: "npm",
    usages: "/npm [packageName]",
    usePrefix: false,
    cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios");
    let { threadID, messageID, body } = event;
    let tid = threadID,
        mid = messageID;
    const packageName = encodeURIComponent(args.join(" "));

    if (!args[0]) return api.sendMessage("Please type a package name...", tid, mid);

    try {
        const apiEndpoint = `https://npm-packages-information.mohammad-rahad.repl.co/npm?packageName=${packageName}`;
        const res = await axios.get(apiEndpoint);
        const packageInfo = res.data;
       const response = `📦 NPM Package: ${packageInfo["NPM Package"] || "no info"}\n` +
                          `🔄 Latest Version: ${packageInfo["Latest Version"] || "no info"}\n` +
                          `📄 Description: ${packageInfo["Description"] || "no info"}\n` +
                          `🌐 API backed by: ${packageInfo["API backed by"] || "no info"}\n` +
                          `📝 License: ${packageInfo["License"] || "no info"}\n` +
                          `👤 Author: ${packageInfo["Author"] || "no info"}\n` +
                          `🏠 Homepage: ${packageInfo["Homepage"] || "no info"}\n` +
                          `🔍 Keywords: ${packageInfo["Keywords"] ? packageInfo["Keywords"].join(', ') : "no info"}\n` +
                          `👥 Maintainers: ${packageInfo["Maintainers"] ? packageInfo["Maintainers"].join(', ') : "no info"}\n` +
                          `📜 ReadmeFilename: ${packageInfo["ReadmeFilename"] || "no info"}\n` +
                          `📦 Repository: ${packageInfo["Repository"] || "no info"}\n` +
                          `🐛 Bugs: ${packageInfo["Bugs"] || "no info"}\n\n` +
                          `🛠️ Engines:\n` +
                          `  - Node: ${packageInfo["Engines"] && packageInfo["Engines"]["node"] ? packageInfo["Engines"]["node"] : "no info"}\n\n` +
                          `📦 Additional Information:\n` +
                          `  - pkgin install:\n` +
                          `    \`\`\`\n${packageInfo["pkgin install"] || "no info"}\n    \`\`\`\n` +
                          `  - pkg how to work:\n` +
                          `    - Dependencies: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["dependencies"] ? packageInfo["pkg how to work"]["dependencies"] : "no info"}\`\n` +
                          `    - Dumpconf: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["dumpconf"] ? packageInfo["pkg how to work"]["dumpconf"] : "no info"}\`\n` +
                          `    - Licenses: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["licenses"] ? packageInfo["pkg how to work"]["licenses"] : "no info"}\`\n` +
                          `    - Test: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["test"] ? packageInfo["pkg how to work"]["test"] : "no info"}\`\n` +
                          `    - Test:nocolor: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["test:nocolor"] ? packageInfo["pkg how to work"]["test:nocolor"] : "no info"}\`\n` +
                          `    - Test-all: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["test-all"] ? packageInfo["pkg how to work"]["test-all"] : "no info"}\`\n` +
                          `    - Snap: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["snap"] ? packageInfo["pkg how to work"]["snap"] : "no info"}\`\n` +
                          `    - Prepack: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["prepack"] ? packageInfo["pkg how to work"]["prepack"] : "no info"}\`\n` +
                          `    - Posttest: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["posttest"] ? packageInfo["pkg how to work"]["posttest"] : "no info"}\`\n` +
                          `    - Lint: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["lint"] ? packageInfo["pkg how to work"]["lint"] : "no info"}\`\n` +
                          `    - Lintfix: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["lintfix"] ? packageInfo["pkg how to work"]["lintfix"] : "no info"}\`\n` +
                          `    - Lint-all: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["lint-all"] ? packageInfo["pkg how to work"]["lint-all"] : "no info"}\`\n` +
                          `    - Resetdeps: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["resetdeps"] ? packageInfo["pkg how to work"]["resetdeps"] : "no info"}\`\n` +
                          `    - Rp-pull-request: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["rp-pull-request"] ? packageInfo["pkg how to work"]["rp-pull-request"] : "no info"}\`\n` +
                          `    - Postlint: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["postlint"] ? packageInfo["pkg how to work"]["postlint"] : "no info"}\`\n` +
                          `    - Template-oss-apply: \`${packageInfo["pkg how to work"] && packageInfo["pkg how to work"]["template-oss-apply"] ? packageInfo["pkg how to work"]["template-oss-apply"] : "no info"}\``;
      api.sendMessage(response, tid, (error, info) => {
            if (error) {
                console.error(error);
            }
        }, mid);
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};