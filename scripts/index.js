let transitionActive = false;
var song = document.getElementById("song");
var current_page = "main";


//PAGE LOADING


function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector('.display-text');
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const memberButtons = document.getElementById("member-container");
            const mainButtons = document.getElementById("main-container");
            memberButtons.style.display = "flex";
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                memberButtons.style.transition = "opacity 1s ease-in-out";
                memberButtons.style.opacity = 1;
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);

    setTimeout(startHome, 1000);
    setRandomSong();
};


//MEMBER BUTTONS
function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@socket; " + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@socket; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;
        randomGif.style.position = "absolute";

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function $cars() {
    memberCall(
        "assets/bandwithdbandit.png",
        "<a href='https://discord.gg/socket' target='_blank' style='color: white;'>discord</a>",
        "bandwidthbandit"
    );
}

function duplex() {
    const images = [
        "assets/duplex.png",
        "assets/os_icon.png",
        "assets/duplex_icon3.png"
      ];

      const randomIndex = Math.floor(Math.random() * images.length);
      const randomImagePath = images[randomIndex];
      
    memberCall(
        randomImagePath,
        "<a href='https://discord.com/users/383755442507087874' target='_blank' style='color: white;'>discord</a>, <a href='https://x.com/2bap' target='_blank' style='color: white;'>x (formerly twitter)</a>, <a href='https://t.me/l7mitigation' target='_blank' style='color: white;'>telegram</a>",
        "duplex"
    );
}

function sony() {
    memberCall(
        "assets/sony_icon.png",
        "<a href='https://discord.com/users/1166703542468358234' target='_blank' style='color: white;'>discord</a>, <a href='https://t.me/valexntt' target='_blank' style='color: white;'>telegram</a>",
        "sony"
    );
}

function texthill() {
    memberCall(
        "assets/texthill.png",
        "<a href='https://discord.gg/socket' target='_blank' style='color: white;'>socket</a>",
        "texthill"
    );
}


// CORE BUTTONS

function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@socket; " + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@socket; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function updatePage(htmlContent, pageTitle) {
    if (transitionActive) return;
    transitionActive = true;
    const displayText = document.querySelector(".display-text");

    if (current_page !== "main") {
        current_page = "main";
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.opacity = 0;
        randomGif.style.display = "block";
        randomGif.style.opacity = 1;
        displayText.innerHTML = htmlContent;
        pfpImage.style.display = "none";
        displayText.style.opacity = 1;

        transitionActive = false;
    } else {
        displayText.innerHTML = htmlContent;
        transitionActive = false;
    }
}


function domains() {
    updatePage(
        "<a href='https://cant.rest' target='_blank' style='color: white;'>cant.rest</a>, <a href='https://derealization.xyz' target='_blank' style='color: white;'>derealization.xyz</a>, <a href='https://fartbin.cfd' target='_blank' style='color: white;'>fartbin.cfd</a>, <a href='https://fartbin.com' target='_blank' style='color: white;'>fartbin.com</a>, <a href='https://fuckedur.mom' target='_blank' style='color: white;'>fuckedur.mom</a>, <a href='https://federals.cyou' target='_blank' style='color: white;'>federals.cyou</a>, <a href='https://kidtouching.club' target='_blank' style='color: white;'>kidtouching.club</a>, <a href='https://llanfairpwllgwyngllgogerychwyrndrobwllllantysiliogogogoch.co.uk' target='_blank' style='color: white;'>llanfairpwllgwyngllgogerychwyrndrobwllllantysiliogogogoch.co.uk</a>, <a href='https://niggastresser.cc' target='_blank' style='color: white;'>niggastresser.cc</a>, <a href='https://nigger.xyz' target='_blank' style='color: white;'>nigger.xyz</a>, <a href='https://pube.hair' target='_blank' style='color: white;'>pube.hair</a>, <a href='https://sack.hair' target='_blank' style='color: white;'>sack.hair</a>, <a href='https://swatme.today' target='_blank' style='color: white;'>swatme.today</a>, <a href='https://tracer.lol' target='_blank' style='color: white;'>tracer.lol</a>, <a href='https://twerking.lol' target='_blank' style='color: white;'>twerking.lol</a>, <a href='https://tlodyour.mom' target='_blank' style='color: white;'>tlodyour.mom</a>, <a href='https://undownable.lol' target='_blank' style='color: white;'>undownable.lol</a>, <a href='https://waifu.rest' target='_blank' style='color: white;'>waifu.rest</a>, <a href='https://yourchronically.online' target='_blank' style='color: white;'>yourchronically.online</a>",
        "projects"
    );
}

function about() {
    updatePage(
        "<a href='https://discord.gg/socket' target='_blank' style='color: white;'>@socket</a> is a cyber collective with a primary focus on coding and various other activities around coding.",
        "about"
    );
}



function discord() {
    window.open("https://discord.gg/socket", "_blank");
}


//OTHER


function getRandomSentence() {
    const sentences = [
        "@ <a href='https://discord.gg/socket' target='_blank' style='color: white;'>socket</a>, a collective"
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [
    "alakazam.gif",
    "arceus.gif",
    "articuno.gif",
    "charizard.gif",
    "darkrai.gif",
    "dialga.gif",
    "dragonite.gif",
    "entei.gif",
    "garchomp.gif",
    "gardevoir.gif",
    "genesect.gif",
    "gengar.gif",
    "giratina.gif",
    "groudon.gif",
    "ho-oh.gif",
    "kyogre.gif",
    "kyurem.gif",
    "lugia.gif",
    "mewtwo.gif",
    "moltres.gif",
    "palkia.gif",
    "raikou.gif",
    "rayquaza.gif",
    "reshiram.gif",
    "scizor.gif",
    "suicune.gif",
    "tyranitar.gif",
    "venusaur.gif",
    "zapdos.gif",
    "zekrom.gif"
    ];

var songs = [
    "illdowhatever.mp3",
    "2run.mp3",
    "moneytrees.mp3",
    "feelgood.mp3",
    "certified.mp3",
    "honest.mp3",
    "goosebumps.mp3",
    "firstlight.mp3",
    "morningdew.mp3",
    "trophyboyz.mp3",
    "hoonigan.mp3",
    "psychopass.mp3"
];
    
var audioElement = document.createElement('audio');
audioElement.id = "random-song";
document.body.appendChild(audioElement);

function setRandomSong() {
    var randomIndex = Math.floor(Math.random() * songs.length);
    var randomSong = songs[randomIndex];
    document.getElementById("random-song").src = "assets/" + randomSong;

    const song = document.getElementById("random-song"); 
    song.volume = 0;
    song.playbackRate = 0.90; 

    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.4) {
            song.volume = 0.45;
            clearInterval(fadeInInterval);
        }
    }, 350);

    song.onended = function() {
        setRandomSong();
    };
}
    

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "assets/" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function(button) {
        button.setAttribute("data-gif", currentGif);
    });
}

