const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VUbY+qOBj9L/2qcwXl1WSSRVB8F0V8mc3NppQCRShYqoIT//tGZyYzm829O8unpqXnOT3nPM8roDkp8QTXoPsKCkbOkOP7ktcFBl3QO4UhZqAJAsgh6IKT07JhWrvezLoULj5HYkM8rJliLhNNbltT5NNltqKX3W7/DG5NUJz8lKDfAA64aOdV1Key5q3COevZJTYLfTLwey9mGOe6zqaZBk/JwXsGtzsiJIzQqF/EOMMMphNcO5Cw79G3TXPixYcVRTvLS05lcaQG8dIF5J11KzKnM8VCZFuRw3D2PfqystilNeLhOuuV87SuNf8q1bbFFC2bstzOG/WydRDKoWC80S9JRHEwCjDlhNff1h2Nza0qbNrR5NJHYmyM48PyZaYnY3il1JiNTWd90Ra+vdtJ3yOuBP2dIeqdqWFFIRqoIx6iWkgGIoQ6c+3KaxXeIQuXL9U/iDvsIyuH/6P7ZJjWrXBHtyOn7xU7nOQZIrGQrxtDd1fLjgTl82qxUpNB+c3YiNdV1UFrxT4UyrpfJfvVkNXOauXmGwj7G9U2ncteq7ye8Ekf8hP7HcsNDi/a5Xo08MixzXBK19daWCGhsfKSkZwIqhJ34r2TuM5MmO+3ZLccjCwvNlrHrBoUZWMwbRXrayXpi86ktw07DdYw4uXz40UHXI8C0BVvTcBwRErOICc5fezpnSaAwdnFiGH+kBcoapCp4iJerG3Skdut4XRg2OPpIe2JFhUiqsrReJaE5OAJz6AJCpYjXJY4GJKS56ye4bKEES5B98+fTUBxxd+Mu5friE0QElZyj56KNIfBh6sfhxCh/ES5W1Nk3heYga7wuY05JzQq7zqeKGQoJmdsxpCXoBvCtMS3JgjwmSB8xwPj6pIhYRIth9iHf81YFfnZU3SnHOf07Zc29FUdBfBJUcP2k4Rk7cnvIPUJtX1d1zqSAIM2aALy3jP3O7+0sL/cqUOH6Tmd7dJC486B+30rd5Nt9LDhTXvMcAC6nJ1wE/gQHU7FOj9g+hvcvbJaeNdNQ4J+4lu9UxI2ttO26ef08gX3zVPQff2cU2Ye3PHa0l4SB2YfNEH2iCB5vFxWVFlURFXVtK6m/VH+uNyFhEXxg2J+x30X/X4jwByStARdYDqLcaNhDPpzk9WqYNtGPzLMyACfJn2k/T1NKDiJ7vFllkxjJReVl+vCv46u+T5QTh13i7zKYYJ0FK37kP03COiCoVtlQWdaypYXOaFb92Ikj52w3LtK7zicG7m3SaahtbUk7ay3hsTxY08eLwaX/QtTSvOcGPrSWKlcqk2rLtunJTtezej5Xu0tLF+LeV58RdZZWE5E5kXnNkLtdaZcXxzGfZbwldEv7dFgn0czaV61yNFBYiHVy151iUSmRZM8xHh37sf0GunFxi7nUsP96MPHHEjf5y95dMjre7RCgh/jjMIM/7c5X1Mu3JpfMN4H5C+S1MN06HPvmK1HtYSPc5yha6bVM8UeYsaFlA5ma0VfTPhSHoDb7WcTFCnkYc4y0AWQBiwnAWiCFJbc+GzUNclwyWFWgK6odnRV7UiC3ARZbRSFyyH/6G9g3L+Fi8Dtb/DJ7P/7BwAA',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "ZIK",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "256751617788",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "no",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",
    OWNER_REACT: process.env.OWNER_REACT || "non",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    EMOJIS: process.env.EMOJIS || "❤️, 🩵, 🧡, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'no',
    TIMEZONE : process.env.TIMEZONE || "America/Chicago",              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha md',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'no',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTICALL: process.env.ANTICALL || 'no',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
