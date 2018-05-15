var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
var token = '585154658:AAEuYv4NXwZ1YS_M3Gf-bj-BoT6BolT5VPw';
// Включить опрос сервера
var bot = new TelegramBot(token, {
    polling: true
});

//var jazz_collection = ['https://soundcloud.com/zer0day'];
//var house_collection =[];
//var triphop_collection = [];
//bot.on('message', (msg) => {
//
//    var Jazz = "jazz";
//    var House = "house";
//    var trip_hop = "trip-hop"
//
//    if (msg.text.toString().toLowerCase().indexOf(Jazz) === 0) {
//        bot.sendMessage(msg.chat.id, jazz[0]);
//    } else if (msg.text.toString().toLowerCase().indexOf(House) === 0) {
//        bot.sendMessage(msg.chat.id, house[0]);
//    } else if (msg.text.toString().toLowerCase().indexOf(trip_hop) === 0) {
//        bot.sendMessage(msg.chat.id, trip_hop[0]);
//    }
//
//});
var jazz_collection = [];
var house_collection = [];
var techno_collection = [];
var electro_collection = ["https://soundcloud.com/zer0day", "https://soundcloud.com/klandestinepr/huntter-back-klandestine035?in=zer0day/sets/feature-december-picks-12-17", "https://soundcloud.com/house-mag/pimpo-gama-in-my-house-original-mix-free-download", "https://soundcloud.com/eatbeat-records/come-home-ep", "https://soundcloud.com/visagemusic/infected-mushroom-i-wish-visage-music-bootleg"];

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome, " + msg.from.first_name + ". Choose a style and you'll be provided with a link to some nice musik ;)", {
        "reply_markup": {
            "keyboard": [["Jazz", "House"], ["Techno", "Electro"]]
        }
    });

});

var count = 0;

//bot.on('message', (msg) => {
//    var jazz = "jazz";
//    if (msg.text.toString().toLowerCase().indexOf(jazz) === 0) {
//        bot.sendMessage(msg.chat.id, "Here is your jazz song:");
//    }
//    var house = "house";
//    if (msg.text.toString().toLowerCase().includes(bye)) {
//        bot.sendMessage(msg.chat.id, "Here is your house track:");
//    }
//    var techno = "techno";
//    if (msg.text.indexOf(robot) === 0) {
//        bot.sendMessage(msg.chat.id, "Here is your techno song:");
//    }
//    var electro = "electro";
//    if (msg.text.indexOf(electro) === 0) {
//        bot.sendMessage(msg.chat.id, "Here is your electro song:");
//        bot.sendMessage(msg.chat.id, electro_collection[Math.floor(Math.random() * items.length)]);
//    }
var rand = function () {
    return Math.floor(Math.random() * electro_collection.length);
}

bot.on('message', (msg) => {
    var electro = "electro";
    if (msg.text.toString().toLowerCase().indexOf(electro) === 0) {
        console.log(count += 1);
        bot.sendMessage(msg.chat.id, "Here is your electro song " + msg.from.first_name);
        bot.sendMessage(msg.chat.id, electro_collection[rand()]);
    }
});
