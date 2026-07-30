/*=========================================================
    VEDSHREE BIRTHDAY WEBSITE
    PREMIUM SCRIPT.JS
    PART 1
=========================================================*/

"use strict";

/*=========================================================
    ELEMENTS
=========================================================*/

const intro = document.getElementById("intro");
const beginBtn = document.getElementById("beginBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");
const heroContent = document.querySelector(".hero-content");

const typingText = document.getElementById("typingText");

const revealItems = document.querySelectorAll(".reveal");

const cursorGlow = document.querySelector(".cursor-glow");

/*=========================================================
    INTRO
=========================================================*/

window.addEventListener("load", () => {

    window.scrollTo(0,0);

    document.body.style.opacity = "1";

});

/*=========================================================
    BEGIN BUTTON
=========================================================*/

if(beginBtn){

    beginBtn.addEventListener("click", async ()=>{

        intro.style.opacity="0";
        intro.style.pointerEvents="none";

        setTimeout(()=>{
            intro.remove();
        },1000);

        if(music){

            try{
                await music.play();
            }
            catch(e){}

        }

    });

}

/*=========================================================
    MUSIC BUTTON
=========================================================*/

if(musicBtn && music){

    musicBtn.addEventListener("click", async ()=>{

        if(music.paused){

            try{

                await music.play();

                musicBtn.innerHTML =
                `<i class="fa-solid fa-pause"></i>`;

            }

            catch(e){}

        }

        else{

            music.pause();

            musicBtn.innerHTML =
            `<i class="fa-solid fa-music"></i>`;

        }

    });

}

/*=========================================================
    CURSOR GLOW
=========================================================*/

if(window.innerWidth>900 && cursorGlow){

    let mouseX=0;
    let mouseY=0;

    let glowX=0;
    let glowY=0;

    document.addEventListener("mousemove",(e)=>{

        mouseX=e.clientX;
        mouseY=e.clientY;

    });

    function animateGlow(){

        glowX += (mouseX-glowX)*0.18;
        glowY += (mouseY-glowY)*0.18;

        cursorGlow.style.left=glowX+"px";
        cursorGlow.style.top=glowY+"px";

        requestAnimationFrame(animateGlow);

    }

    animateGlow();

}

/*=========================================================
    TYPEWRITER
=========================================================*/

if(typingText){

const message=`Happy Birthday ❤️

Some people enter our lives and leave a beautiful impact without even realizing it.

I wanted to create something that would always exist...

Something you could revisit whenever you wanted to smile.

I hope today brings endless happiness,
beautiful memories,
success,
good health,
and everything your heart wishes for.

Never stop smiling.

Never stop dreaming.

Never stop being yourself.

Happy Birthday once again ❤️`;

typingText.textContent="";

let i=0;
let typingStarted=false;

function type(){

    if(i>=message.length) return;

    typingText.textContent += message.charAt(i);

    i++;

    setTimeout(type,26);

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !typingStarted){

typingStarted=true;

type();

}

});

},{
threshold:.45
});

observer.observe(typingText);

}

/*=========================================================
    SCROLL REVEAL
=========================================================*/

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.18
});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*=========================================================
    HERO PARALLAX
=========================================================*/

if(heroImage){

window.addEventListener("scroll",()=>{

const y=window.scrollY;

heroImage.style.transform=

`translateY(${y*0.18}px) scale(${1.05+y*0.00008})`;

});

}

if(heroContent){

window.addEventListener("scroll",()=>{

const y=window.scrollY;

heroContent.style.transform=

`translateY(${y*0.20}px)`;

heroContent.style.opacity=

Math.max(1-y/650,0);

});

}

/*=========================================================
    SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================================
    IMAGE LOAD
=========================================================*/

document.querySelectorAll("img").forEach(img=>{

img.style.opacity="0";

img.addEventListener("load",()=>{

img.style.transition="opacity .9s ease";

img.style.opacity="1";

});

if(img.complete){

img.dispatchEvent(new Event("load"));

}

});

/*=========================================================
    DESKTOP ONLY PARALLAX
=========================================================*/

if(window.innerWidth>900){

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*20;

if(heroContent){

heroContent.style.transform=

`translate(${x}px,${y}px)`;

}

});

}

/*=========================================================
    RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth<900){

if(cursorGlow){

cursorGlow.style.display="none";

}

}

});

/*=========================================================
    PART 1 END
=========================================================*/
/*=========================================================
    PART 2
    Premium Gallery • Scroll Animations • Stars • Hearts
=========================================================*/

"use strict";

/*=========================================================
    GALLERY
=========================================================*/

const galleryItems = document.querySelectorAll(".gallery-item");

/*=========================================================
    IMAGE SHINE
=========================================================*/

galleryItems.forEach(card=>{

    const shine=document.createElement("div");
    shine.className="image-shine";

    card.appendChild(shine);

    card.addEventListener("mouseenter",()=>{

        shine.style.left="130%";

        setTimeout(()=>{

            shine.style.transition="none";
            shine.style.left="-120%";

            requestAnimationFrame(()=>{

                shine.style.transition=".8s";

            });

        },800);

    });

});

/*=========================================================
    DESKTOP 3D HOVER
=========================================================*/

if(window.innerWidth>900){

galleryItems.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/rect.width)*12;
const rotateX=-((y-rect.height/2)/rect.height)*12;

card.style.transform=

`perspective(1200px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-8px)
 scale(1.02)`;

const img=card.querySelector("img");

if(img){

img.style.transform=

`scale(1.08)
 translate(${rotateY*1.4}px,${rotateX*1.4}px)`;

}

});

card.addEventListener("mouseleave",()=>{

card.style.transform="none";

const img=card.querySelector("img");

if(img){

img.style.transform="scale(1)";

}

});

});

}

/*=========================================================
    MOBILE
=========================================================*/

else{

galleryItems.forEach(card=>{

card.style.transform="none";

});

}

/*=========================================================
    GALLERY REVEAL
=========================================================*/

const galleryObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,
transform:"translateY(80px)"

},

{

opacity:1,
transform:"translateY(0)"

}

],{

duration:900,
fill:"forwards",
easing:"ease"

});

galleryObserver.unobserve(entry.target);

}

});

},{
threshold:.2
});

galleryItems.forEach(card=>{

galleryObserver.observe(card);

});

/*=========================================================
    FLOATING STARS
=========================================================*/

const stars=document.getElementById("stars");

if(stars){

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

const size=Math.random()*3+1;

star.style.width=size+"px";
star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.animationDuration=

(2+Math.random()*5)+"s";

star.style.animationDelay=

Math.random()*4+"s";

stars.appendChild(star);

}

}

/*=========================================================
    SHOOTING STAR
=========================================================*/

function createShootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.left=Math.random()*window.innerWidth+"px";
star.style.top=Math.random()*250+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1700);

}

setInterval(createShootingStar,6500);

/*=========================================================
    FLOATING HEARTS
=========================================================*/

const hearts=document.getElementById("hearts");

function createHeart(x,y){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=x+"px";
heart.style.top=y+"px";

heart.style.fontSize=

(18+Math.random()*16)+"px";

heart.style.position="fixed";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

document.addEventListener("click",(e)=>{

createHeart(e.clientX,e.clientY);

});

/*=========================================================
    PARALLAX LIGHTS
=========================================================*/

const lights=document.querySelectorAll(".light");

window.addEventListener("scroll",()=>{

const y=window.scrollY;

lights.forEach((light,index)=>{

light.style.transform=

`translateY(${y*(0.08+index*0.02)}px)`;

});

});

/*=========================================================
    BUTTON RIPPLE
=========================================================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

const size=Math.max(

button.offsetWidth,
button.offsetHeight

);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=

(e.offsetX-size/2)+"px";

ripple.style.top=

(e.offsetY-size/2)+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/*=========================================================
    SCROLL PROGRESS
=========================================================*/

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const progress=

window.scrollY/total;

document.documentElement.style.setProperty(

"--scroll",

progress

);

});

/*=========================================================
    END PART 2
=========================================================*/
/*=========================================================
    PART 3A
    CONFETTI + FIREWORKS
=========================================================*/

const canvas = document.getElementById("confetti");
const ctx = canvas ? canvas.getContext("2d") : null;

let confettiPieces = [];
let fireworks = [];
let particles = [];

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/*=========================
    CONFETTI
=========================*/

class Confetti {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = -20;

        this.size = Math.random() * 8 + 4;

        this.speed = Math.random() * 3 + 2;

        this.swing = Math.random() * 2;

        this.angle = Math.random() * Math.PI * 2;

        this.color = [
            "#ff4d6d",
            "#ffd60a",
            "#00d4ff",
            "#7b2ff7",
            "#ffffff"
        ][Math.floor(Math.random() * 5)];

    }

    update() {

        this.y += this.speed;

        this.angle += 0.05;

        this.x += Math.sin(this.angle) * this.swing;

        if (this.y > canvas.height + 20) {

            this.y = -20;

            this.x = Math.random() * canvas.width;

        }

    }

    draw() {

        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.angle);

        ctx.fillStyle = this.color;

        ctx.fillRect(
            -this.size / 2,
            -this.size / 2,
            this.size,
            this.size
        );

        ctx.restore();

    }

}

function launchConfetti(amount = 200) {

    for (let i = 0; i < amount; i++) {

        confettiPieces.push(new Confetti());

    }

}

/*=========================
    FIREWORKS
=========================*/

class Firework {

    constructor(x, y) {

        this.x = x;

        this.y = canvas.height;

        this.targetY = y;

        this.speed = 8;

        this.done = false;

    }

    update() {

        this.y -= this.speed;

        if (this.y <= this.targetY && !this.done) {

            this.done = true;

            explode(this.x, this.y);

        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);

        ctx.fillStyle = "white";

        ctx.fill();

    }

}

class Particle {

    constructor(x, y) {

        this.x = x;

        this.y = y;

        this.life = 100;

        this.speed = Math.random() * 5 + 2;

        this.angle = Math.random() * Math.PI * 2;

        this.color = `hsl(${Math.random() * 360},100%,60%)`;

    }

    update() {

        this.life--;

        this.x += Math.cos(this.angle) * this.speed;

        this.y += Math.sin(this.angle) * this.speed;

        this.speed *= 0.98;

    }

    draw() {

        ctx.globalAlpha = this.life / 100;

        ctx.beginPath();

        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

        ctx.globalAlpha = 1;

    }

}

function explode(x, y) {

    for (let i = 0; i < 70; i++) {

        particles.push(new Particle(x, y));

    }

}

function launchFirework() {

    fireworks.push(

        new Firework(

            Math.random() * canvas.width,

            Math.random() * canvas.height * 0.5 + 50

        )

    );

}

/*=========================
    ANIMATION LOOP
=========================*/

function animateCelebration() {

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(c => {

        c.update();

        c.draw();

    });

    fireworks.forEach((f, i) => {

        f.update();

        f.draw();

        if (f.done)

            fireworks.splice(i, 1);

    });

    particles.forEach((p, i) => {

        p.update();

        p.draw();

        if (p.life <= 0)

            particles.splice(i, 1);

    });

    requestAnimationFrame(animateCelebration);

}

if (ctx)

    animateCelebration();

/*=========================
    AUTO FIREWORKS
=========================*/

setInterval(() => {

    launchFirework();

}, 2200);
/*=========================================================
    PART 3B
    BALLOONS • HEARTS • CELEBRATION • FLASH
=========================================================*/

const celebrateBtn = document.getElementById("celebrateBtn");

/*=========================================================
    BALLOONS
=========================================================*/

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        `hsl(${Math.random() * 360},90%,65%)`;

    balloon.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    balloon.style.transform =
        `scale(${0.8 + Math.random() * 0.5})`;

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 15000);

}

function launchBalloons(count = 25) {

    let i = 0;

    const interval = setInterval(() => {

        createBalloon();

        i++;

        if (i >= count)
            clearInterval(interval);

    }, 250);

}

/*=========================================================
    HEART BURST
=========================================================*/

function heartBurst() {

    const total = 40;

    for (let i = 0; i < total; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.className = "celebration-heart";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        const angle = (Math.PI * 2 / total) * i;

        const distance = 180 + Math.random() * 140;

        heart.animate([
            {
                transform: "translate(-50%,-50%) scale(.2)",
                opacity: 1
            },
            {
                transform:
                    `translate(
                        calc(-50% + ${Math.cos(angle) * distance}px),
                        calc(-50% + ${Math.sin(angle) * distance}px)
                    ) scale(1.4)`,
                opacity: 0
            }
        ], {
            duration: 1800,
            easing: "ease-out"
        });

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1900);

    }

}

/*=========================================================
    SCREEN FLASH
=========================================================*/

function screenFlash() {

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.inset = "0";
    flash.style.background = "white";
    flash.style.opacity = "0";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "99999";

    document.body.appendChild(flash);

    flash.animate([
        { opacity: 0 },
        { opacity: .8 },
        { opacity: 0 }
    ], {
        duration: 500
    });

    setTimeout(() => flash.remove(), 550);

}

/*=========================================================
    SECRET MESSAGE
=========================================================*/

function secretMessage() {

    const box = document.createElement("div");

    box.className = "secret-message";

    box.innerHTML = `
        <h2>💖 Happy Birthday Vedshree 💖</h2>
        <p>
        You deserve every smile,
        every success,
        every dream,
        and every beautiful moment life has to offer.
        <br><br>
        Never stop shining ✨
        </p>
    `;

    document.body.appendChild(box);

    setTimeout(() => {

        box.classList.add("show");

    }, 100);

}

/*=========================================================
    CELEBRATE BUTTON
=========================================================*/

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        launchConfetti(250);

        for (let i = 0; i < 6; i++) {

            setTimeout(() => {

                launchFirework();

            }, i * 450);

        }

        launchBalloons(30);

        heartBurst();

        screenFlash();

        setTimeout(secretMessage, 900);

    });

}

/*=========================================================
    AUTO MINI CONFETTI
=========================================================*/

setInterval(() => {

    if (confettiPieces.length < 120)
        launchConfetti(25);

}, 7000);

/*=========================================================
    END PART 3
=========================================================*/
/*=========================================================
    PART 4
    PERFORMANCE • POLISH • FINAL TOUCHES
=========================================================*/

"use strict";

/*=========================================================
    FPS FRIENDLY SCROLL
=========================================================*/

let scrollTick = false;

function updateScrollEffects() {

    const y = window.scrollY;

    // Progress Bar
    const progress =
        y / (document.documentElement.scrollHeight - window.innerHeight);

    document.documentElement.style.setProperty(
        "--scroll-progress",
        progress
    );

    // Navbar Blur
    const nav = document.querySelector("nav");

    if (nav) {

        if (y > 50)
            nav.classList.add("scrolled");
        else
            nav.classList.remove("scrolled");

    }

    scrollTick = false;

}

window.addEventListener("scroll", () => {

    if (!scrollTick) {

        requestAnimationFrame(updateScrollEffects);

        scrollTick = true;

    }

});

/*=========================================================
    BUTTON HOVER GLOW
=========================================================*/

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});

/*=========================================================
    RANDOM TWINKLE
=========================================================*/

function twinkle() {

    document.querySelectorAll(".star").forEach(star => {

        star.animate([

            {
                opacity: .2
            },

            {
                opacity: 1
            },

            {
                opacity: .2
            }

        ], {

            duration: 1200 + Math.random() * 2500

        });

    });

}

setInterval(twinkle, 1800);

/*=========================================================
    HERO IMAGE FLOAT
=========================================================*/

if (heroImage) {

    heroImage.animate([

        {
            transform: "translateY(0px)"
        },

        {
            transform: "translateY(-12px)"
        },

        {
            transform: "translateY(0px)"
        }

    ], {

        duration: 4500,

        iterations: Infinity

    });

}

/*=========================================================
    MOBILE OPTIMIZATION
=========================================================*/

if (window.innerWidth < 768) {

    document.querySelectorAll(".gallery-item").forEach(card => {

        card.style.transform = "none";

    });

    document.querySelectorAll(".star").forEach((star, index) => {

        if (index % 2 === 0)
            star.remove();

    });

}

/*=========================================================
    PAGE VISIBILITY
=========================================================*/

document.addEventListener("visibilitychange", () => {

    if (!music) return;

    if (document.hidden) {

        music.pause();

    } else {

        music.play().catch(() => {});

    }

});

/*=========================================================
    DOUBLE CLICK SURPRISE
=========================================================*/

document.body.addEventListener("dblclick", () => {

    launchConfetti(120);

    launchFirework();

});

/*=========================================================
    KEYBOARD SHORTCUTS
=========================================================*/

document.addEventListener("keydown", e => {

    if (e.code === "Space") {

        e.preventDefault();

        if (music.paused)
            music.play().catch(() => {});
        else
            music.pause();

    }

});

/*=========================================================
    RANDOM HEART
=========================================================*/

setInterval(() => {

    if (Math.random() > .75) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.bottom = "-30px";

        heart.style.pointerEvents = "none";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        heart.animate([

            {

                transform: "translateY(0)",

                opacity: 1

            },

            {

                transform: "translateY(-350px)",

                opacity: 0

            }

        ], {

            duration: 5000,

            easing: "linear"

        });

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}, 2500);

/*=========================================================
    PRELOAD IMAGES
=========================================================*/

window.addEventListener("load", () => {

    document.querySelectorAll("img").forEach(img => {

        const preload = new Image();

        preload.src = img.src;

    });

});

/*=========================================================
    SMOOTH APPEAR
=========================================================*/

document.body.animate([

    {

        opacity: 0

    },

    {

        opacity: 1

    }

], {

    duration: 1200,

    fill: "forwards"

});

/*=========================================================
    MEMORY CLEANUP
=========================================================*/

window.addEventListener("beforeunload", () => {

    confettiPieces.length = 0;

    fireworks.length = 0;

    particles.length = 0;

});

/*=========================================================
    FINAL MESSAGE
=========================================================*/

console.log(`
🎂 Happy Birthday Vedshree ❤️

Made with love.

Every animation,
every line,
every effect
was created specially for you.

✨
`);

/*=========================================================
    END OF SCRIPT
=========================================================*/
