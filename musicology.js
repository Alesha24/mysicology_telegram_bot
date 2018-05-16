var TelegramBot = require('node-telegram-bot-api');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.send('it is running\n');
}).listen(process.env.PORT || 5000);


// Устанавливаем токен, который выдавал нам бот.
var token = '585154658:AAEuYv4NXwZ1YS_M3Gf-bj-BoT6BolT5VPw';
// Включить опрос сервера
var bot = new TelegramBot(token, {
    polling: true
});



var house_collection = ["https://soundcloud.com/paul-david/paul-david-up-on-this-original-mix-1",
"https://soundcloud.com/samlamore/takin-hold",
"https://soundcloud.com/ttmnl/tracy-chapman-give-me-one-reason-the-tailors-remix",
"https://soundcloud.com/bodhicollective/bijou-x-ryan-collins-x-thee",
"https://soundcloud.com/stern/angus-and-julia-stone-big-jet",
"https://soundcloud.com/pjlsounds/youre-the-only-thing",
"https://soundcloud.com/smalltowndjs/all-your-soul-feat-erica-dee-smalltown-vip-edit",
"https://soundcloud.com/illeven-eleven-recordings/move-your-body-clb-2017-reboot-11",
"https://soundcloud.com/gave2vibes/michael-kiwanuka-one-more-night-shen-kin-remix",
"https://soundcloud.com/dirty-secretz/dirty-secretz-back-to-life-original-mix-free-download",
"https://soundcloud.com/noir/noir-messiah-ft-judge-soundcloud-snippet",
"https://soundcloud.com/smalltowndownloads/treat-em-right-smalltown-djs-skratch-bastid-remix",
"https://soundcloud.com/groove-motion-56001459/groove-motion-runnin123",
"https://soundcloud.com/benfoxmusic/ben-fox-freak-mighty",
"https://soundcloud.com/dj-kakes/boz-scaggs-lowdown-kakes-edit-1",
"https://soundcloud.com/thelovelytunes/vanilla-ace-party-all-the-time-free-download",
"https://soundcloud.com/smoove-and-turrell/smoove-turrell-youre-gone-feat-izo-fitzroy",
"https://soundcloud.com/toomanyzooz/too-many-zooz-vs-kda-warriors"];

var electro_collection = ["https://soundcloud.com/zer0day",
 "https://soundcloud.com/klandestinepr/huntter-back-klandestine035?in=zer0day/sets/feature-december-picks-12-17",
 "https://soundcloud.com/house-mag/pimpo-gama-in-my-house-original-mix-free-download",
 "https://soundcloud.com/eatbeat-records/come-home-ep",
 "https://soundcloud.com/visagemusic/infected-mushroom-i-wish-visage-music-bootleg"];

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome, " + msg.from.first_name + ". Choose a style and you'll be provided with a link to some nice music;)", {
        "reply_markup": {
            "keyboard": [["In process", "House"], ["In process", "Electro"]]
        }
    });

});

var rand_electro = function () {
    return Math.floor(Math.random() * electro_collection.length);
}

var rand_house = function () {
    return Math.floor(Math.random() * house_collection.length);
}
// полная клавиатура при нажатии на вернуться к стилям
bot.on('message', (msg) => {
    var back_to_styles = "back to choose style";
    if (msg.text.toString().toLowerCase().indexOf(back_to_styles) === 0) {
        bot.sendMessage(msg.chat.id, "Feel free to choose, I've got more ideas, dear " + msg.from.first_name + "🎧", {
            "reply_markup": {
                "keyboard": [["Jazz", "House"], ["Techno", "Electro"]]
            }
        });
    }
});

bot.on('message', (msg) => {
    var electro = "electro";
    if (msg.text.toString().toLowerCase().indexOf(electro) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your electro song " + electro_collection[rand_electro()], {
            "reply_markup": {
                "keyboard": [["More electro"], ["Back to choose style"]]
            }
        });
    }
});


bot.on('message', (msg) => {
    var house = "house";
    if (msg.text.toString().toLowerCase().indexOf(house) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your house song: " + house_collection[rand_house()], {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
    }
});

bot.on('message', (msg) => {
    var more_house = "more house";
    if (msg.text.toString().toLowerCase().indexOf(more_house) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your some more house: " + house_collection[rand_house()], {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
    }
});

bot.on('message', (msg) => {
    var more_electro = "more electro";
    if (msg.text.toString().toLowerCase().indexOf(more_electro) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your some more electro: " + electro_collection[rand_electro()], {
            "reply_markup": {
                "keyboard": [["More electro"], ["Back to choose style"]]
            }
        });
    }
});
