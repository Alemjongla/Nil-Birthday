const unlockButton = document.getElementById("unlockButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const passwordScreen = document.getElementById("passwordScreen");
const birthdayRoom = document.getElementById("birthdayRoom");
const passwordDisplay = document.getElementById("passwordDisplay");
const passwordMessage = document.getElementById("passwordMessage");
const keys = document.querySelectorAll(".key");

const moment1 = document.getElementById("moment1");
const giftButton = document.getElementById("giftButton");
const letterButton = document.getElementById("letterButton");

const ps5Screen = document.getElementById("ps5Screen");
const closeGift = document.getElementById("closeGift");

const letterOverlay = document.getElementById("letterOverlay");
const closeLetter = document.getElementById("closeLetter");
const letterContent = document.getElementById("letterContent");
const memoriesButton = document.getElementById("memoriesButton");

const photoMoment = document.getElementById("photoMoment");
const photoNext = document.getElementById("photoNext");
const photoSlides = document.querySelectorAll(".photoSlide");

const finalMessage = document.getElementById("finalMessage");

const birthdayMusic = document.getElementById("birthdayMusic");
const giftMusic = document.getElementById("giftMusic");
const ourSong = document.getElementById("ourSong");


const correctPassword = "120426";

let enteredPassword = "";
let attempts = 0;


unlockButton.addEventListener("click", function () {

    welcomeScreen.style.display = "none";
    passwordScreen.style.display = "flex";

});


keys.forEach(function (key) {

    key.addEventListener("click", function () {

        const number = key.getAttribute("data-number");

        if (number === "clear") {

            enteredPassword = "";
            updateDisplay();
            return;

        }

        if (number === "enter") {

            checkPassword();
            return;

        }

        if (enteredPassword.length < 6) {

            enteredPassword += number;
            updateDisplay();

        }

    });

});


function updateDisplay() {

    const boxes = passwordDisplay.querySelectorAll("span");

    boxes.forEach(function (box, index) {

        if (index < enteredPassword.length) {

            box.textContent = "●";

        } else {

            box.textContent = "";

        }

    });

}


function checkPassword() {

    if (enteredPassword === correctPassword) {

        passwordMessage.textContent =
            "✓ PASSWORD CORRECT ❤️";

        birthdayMusic.volume = 0.7;

        birthdayMusic.play().catch(function (error) {

            console.log(
                "Birthday music could not start:",
                error
            );

        });

        setTimeout(function () {

            passwordScreen.style.display = "none";

            birthdayRoom.style.display = "block";

            moment1.style.display = "flex";

        }, 1000);

        return;

    }


    attempts++;

    if (attempts === 1) {

        passwordMessage.textContent =
            "Hmm... that's not our date. 🤭";

    }

    else if (attempts === 2) {

        passwordMessage.textContent =
            "Baby... think about us. 😂❤️";

    }

    else {

        passwordMessage.textContent =
            "One last chance... you know this. ❤️";

    }

    enteredPassword = "";
    updateDisplay();

}


giftButton.addEventListener("click", function () {

    ps5Screen.style.display = "flex";

});


closeGift.addEventListener("click", function () {

    ps5Screen.style.display = "none";

    moment1.style.display = "flex";

});


letterButton.addEventListener("click", function () {

    birthdayMusic.pause();

    giftMusic.pause();
    giftMusic.currentTime = 0;

    ourSong.volume = 0.75;
    ourSong.currentTime = 0;

    ourSong.play().catch(function (error) {

        console.log(
            "Khat could not start:",
            error
        );

    });

    letterOverlay.style.display = "flex";

    requestAnimationFrame(function () {

        letterOverlay.classList.add("opening");

    });

    setTimeout(function () {

        writeLetter();

    }, 900);

});


function writeLetter() {

    letterContent.innerHTML = "";

    memoriesButton.classList.remove("ready");


    const paragraphs = [

        "BABYYYY, HAPPY BIRTHDAY!!!!!!!! ❤️",

        "Hum dono kaha se kya ho gaye? 😂",

        "Pata hi nahi chala ki kab best friends se ek dusre ke person ban gaye. ❤️",

        "I chose this song because it reminds me of our best memories that we made... Tawang. 🥹❤️",

        "Bas yaad rakhna ki you are the most special person to me, and I will always love you. ❤️",

        "Thank you for coming into my life, for loving me, and meri craziness ko hamesha sambhalne ke liye. 😂❤️",

        "Aur haan, this PS5 is your little gift for always being so patient with me. 😂🎮",

        "Real wala baad mein pakka, when I'm successful enough to buy it for you. 😭❤️",

        "Aaj tumhara din hai, so just remember how loved you are.",

        "Whatever happens, I'll always be there for you. ❤️",

        "Even on the days when you feel alone, or when things aren't going your way, please remember that I'll always be here loving you and believing in you.",

        "I know you're going to be successful and achieve everything you want.",

        "Bas haar mat maanna, push karte rehna, khud pe believe rakhna, and most importantly, have faith in God. ❤️",

        "Mujhe pata hai tum bohot kuch achieve karoge. And I want to be there to see it all. 🥹",

        "Abhi 1716 km door hoon, but dil se hamesha tumhare paas. ❤️",

        "I wish I could be there today, but it's okay.",

        "Next year milke saari missed masti karenge. 😂❤️",

        "More trips, more memories, more stupid fights, more laughing, more birthdays… sab kuch saath mein.",

        "I don't know what the future holds, but I want to discover it with you.",

        "I will always keep choosing you, again and again. ❤️",

        "And alsooo… this little website is my tiny birthday gift to you. 😂❤️",

        "CSE GF hoon, toh itna toh kar hi sakti hoon na? 😭",

        "I put a little bit of my time, effort, and craziness into this, and I really hope you love it. 🥹❤️",

        "It's not perfect, but it's made just for you. ❤️",

        "Happy birthday, my Baby. 🥹❤️",

        "I love you so, so much.",

        "Forever. ❤️",

        "Always yours,",

        "your crazy girl ❤️",

        "— Angry Bird 🐦❤️"

    ];


    paragraphs.forEach(function (paragraph) {

        const p = document.createElement("p");

        p.classList.add("letterParagraph");

        const words = paragraph.split(" ");


        words.forEach(function (word, index) {

            const span = document.createElement("span");

            span.classList.add("letterWord");

            span.textContent = word;

            p.appendChild(span);


            if (index < words.length - 1) {

                p.appendChild(
                    document.createTextNode(" ")
                );

            }

        });


        letterContent.appendChild(p);

    });


    const allWords =
        letterContent.querySelectorAll(".letterWord");


    allWords.forEach(function (word, index) {

        setTimeout(function () {

            word.classList.add("visible");

        }, index * 75);

    });


    const totalTime =
        allWords.length * 75 + 1000;


    setTimeout(function () {

        memoriesButton.classList.add("ready");

    }, totalTime);

}


closeLetter.addEventListener("click", function () {

    letterOverlay.classList.remove("opening");

    letterOverlay.style.display = "none";

    ourSong.pause();
    ourSong.currentTime = 0;

    moment1.style.display = "flex";

});


memoriesButton.addEventListener("click", function () {

    letterOverlay.classList.remove("opening");

    letterOverlay.style.display = "none";

    moment1.style.display = "none";

    photoMoment.style.display = "flex";

});


let currentPhoto = 0;


function showPhoto(index) {

    photoSlides.forEach(function (slide, i) {

        if (i === index) {

            slide.classList.add("active");

        } else {

            slide.classList.remove("active");

        }

    });

}


showPhoto(0);


photoNext.addEventListener("click", function () {

    currentPhoto++;

    if (currentPhoto < photoSlides.length) {

        showPhoto(currentPhoto);
        return;

    }


    photoMoment.style.display = "none";

    finalMessage.style.display = "flex";


    setTimeout(function () {

        ourSong.pause();
        ourSong.currentTime = 0;

    }, 5000);

});