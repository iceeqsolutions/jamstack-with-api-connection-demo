const vibes = [
    "...because it was awesome!",
    "...yeah, me neither!",
    "...there are no news, which is good news!",
    "...there will be more news later!"
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);