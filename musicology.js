var TelegramBot = require('node-telegram-bot-api');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.send('it is running\n');
}).listen(process.env.PORT || 5000);

var token = '585154658:AAEuYv4NXwZ1YS_M3Gf-bj-BoT6BolT5VPw';
var bot = new TelegramBot(token, {
    polling: true
});

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
