var TelegramBot = require('node-telegram-bot-api');
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.send('it is running\n');
}).listen(process.env.PORT || 5000);
var token = '570995339:AAGWlutaj1EH4_00PGLZ7AkSQQ83o9bLPZ4'; // токен от MusicologyChannelBot
var bot = new TelegramBot(token, {
    polling: true
});
// в этих массивах лежат ссылки на песни пока не включится soundcloud api
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

var bestmix_collection = ["https://soundcloud.com/hkpp/beating-the-crates-220118",
"https://soundcloud.com/cirquedusoul/cirque-du-soul-the-nextmen-018",
"https://soundcloud.com/ghettofunk/dancefloor-outlaws-live-at-the-backroom-bristol-dec-2017",
"https://soundcloud.com/juwee/juwee-funkanomics-chillax-mix-5th",
"https://soundcloud.com/s1xmusic/best-of-trip-hop-downtemp-lo-fi-nujazz",
"https://soundcloud.com/thefunkhunters/detour-podcast-02",
"https://soundcloud.com/nige-bc/future-hip-pop-vol-3",
"https://soundcloud.com/nige-bc/future-hip-pop-vol-2",
"https://soundcloud.com/skug-1/boom-bap-mix-11"];

var trip_hop_collection = ["https://soundcloud.com/meticmusic/gthang-summertime-bootleg",
"https://soundcloud.com/griz/for-the-love-feat-talib-kweli",
"https://soundcloud.com/chali2na/3-show-me",
"https://soundcloud.com/chali2na/movin-on-1",
"https://soundcloud.com/chali2na/alone-1",
"https://soundcloud.com/thenextmen/the-milk-danger-nextmen-remix",
"https://soundcloud.com/runforyourlife/naffra-ft-nai-palm-laneous",
"https://soundcloud.com/thefunkhunters/word-to-spread-feat-tom-thum"];
//markup and message after "start button"
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Welcome, " + msg.from.first_name + ". Choose a style and you'll be provided with a link to some nice music;)", {
        "reply_markup": {
            "keyboard": [["House"], ["Trip-hop"], ["Best mixes"]]
        }
    });

});
//that's how random song is obtained
var rand_bestmix = function () {
    return Math.floor(Math.random() * bestmix_collection.length);
}

var rand_house = function () {
    return Math.floor(Math.random() * house_collection.length);
}

var rand_trip_hop = function () {
    return Math.floor(Math.random() * trip_hop_collection.length);
}
//complete keyboard when back to styles
bot.on('message', (msg) => {
    var back_to_styles = "back to choose style";
    if (msg.text.toString().toLowerCase().indexOf(back_to_styles) === 0) {
        bot.sendMessage(msg.chat.id, "Feel free to choose, I've got more ideas, dear " + msg.from.first_name + "🎧", {
            "reply_markup": {
                "keyboard": [["House"], ["Trip-hop"], ["Best mixes"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " pressed back")
    }
});
//wanna best mix
bot.on('message', (msg) => {
    var bestmix = "best mixes";
    if (msg.text.toString().toLowerCase().indexOf(bestmix) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your mix " + bestmix_collection[rand_bestmix()], {
            "reply_markup": {
                "keyboard": [["More mixes"], ["Back to choose style"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " wants a mix")
    }
});
//wanna more mixes
bot.on('message', (msg) => {
    var more_bestmix = "more mixes";
    if (msg.text.toString().toLowerCase().indexOf(more_bestmix) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your mix: " + bestmix_collection[rand_bestmix()], {
            "reply_markup": {
                "keyboard": [["More mixes"], ["Back to choose style"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " wants more mixes")
    }
});
//wanna house
bot.on('message', (msg) => {
    var house = "house";
    if (msg.text.toString().toLowerCase().indexOf(house) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your house song: " + house_collection[rand_house()], {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " wants house")
    }
});
//wanna more house 
bot.on('message', (msg) => {
    var more_house = "more house";
    if (msg.text.toString().toLowerCase().indexOf(more_house) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your some more house: " + house_collection[rand_house()], {
            "reply_markup": {
                "keyboard": [["More house"], ["Back to choose style"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " wants more house")
    }
});
//wanna trip-hop
bot.on('message', (msg) => {
    var trip_hop = "trip-hop";
    if (msg.text.toString().toLowerCase().indexOf(trip_hop) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your trip-hop song: " + trip_hop_collection[rand_trip_hop()], {
            "reply_markup": {
                "keyboard": [["More trip-hop"], ["Back to choose style"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " wants trip-hop")
    }
});
//wanna more trip-hop
bot.on('message', (msg) => {
    var more_trip_hop = "more trip-hop";
    if (msg.text.toString().toLowerCase().indexOf(more_trip_hop) === 0) {
        bot.sendMessage(msg.chat.id, "Here is your some more trip-hop: " + trip_hop_collection[rand_trip_hop()], {
            "reply_markup": {
                "keyboard": [["More trip-hop"], ["Back to choose style"]]
            }
        });
        console.log(msg.from.first_name, msg.from.last_name + " wants more trip-hop")
    }
});
