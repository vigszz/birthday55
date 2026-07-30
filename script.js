/*=========================================================
        VEDSHREE BIRTHDAY WEBSITE
        Premium Script.js
=========================================================*/

"use strict";

/*==========================
        ELEMENTS
==========================*/

const intro = document.getElementById("intro");
const beginBtn = document.getElementById("beginBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");

const cursorGlow = document.querySelector(".cursor-glow");

const typingText = document.getElementById("typingText");

const revealElements = document.querySelectorAll(".reveal");

/*==========================
        BEGIN JOURNEY
==========================*/

if(beginBtn && intro){

    beginBtn.addEventListener("click",()=>{

        intro.style.opacity="0";
        intro.style.pointerEvents="none";

        setTimeout(()=>{

            intro.style.display="none";

        },1000);

        if(music){

            music.play().catch(()=>{});

        }

    });

}

/*==========================
        MUSIC BUTTON
==========================*/

if(musicBtn && music){

    musicBtn.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            musicBtn.innerHTML='<i class="fas fa-pause"></i>';

        }

        else{

            music.pause();

            musicBtn.innerHTML='<i class="fas fa-play"></i>';

        }

    });

}

/*==========================
        CURSOR GLOW
==========================*/

if(cursorGlow){

    let mouseX=0;
    let mouseY=0;

    let glowX=0;
    let glowY=0;

    document.addEventListener("mousemove",(e)=>{

        mouseX=e.clientX;
        mouseY=e.clientY;

    });

    function animateCursor(){

        glowX+=(mouseX-glowX)*0.15;
        glowY+=(mouseY-glowY)*0.15;

        cursorGlow.style.left=glowX+"px";
        cursorGlow.style.top=glowY+"px";

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

}

/*==========================
        TYPEWRITER
==========================*/

if(typingText){

const message=`Happy Birthday ❤️

Some people enter our lives and leave a beautiful impact without even realizing it.

I wanted to create something that would always exist...

Something you could revisit whenever you wanted to smile.

Thank you for every memory, every laugh and every beautiful moment.

I hope today brings endless happiness, unforgettable memories and all the love you deserve.

Never stop smiling.

Never stop dreaming.

Never stop being yourself.

Happy Birthday once again ❤️`;

typingText.textContent="";

let index=0;

function typeWriter(){

    if(index<message.length){

        typingText.textContent+=message.charAt(index);

        index++;

        setTimeout(typeWriter,28);

    }

}

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            typeWriter();

            observer.disconnect();

        }

    });

},{
    threshold:0.4
});

observer.observe(typingText);

}

/*==========================
        SMOOTH SCROLL
==========================*/

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
        PART 2
        Scroll Reveal • Hero Parallax • Animations
=========================================================*/

/*==========================
        SCROLL REVEAL
==========================*/

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});


/*==========================
        HERO PARALLAX
==========================*/

const heroImage=document.querySelector(".hero img");

if(heroImage){

    window.addEventListener("scroll",()=>{

        const offset=window.scrollY;

        heroImage.style.transform=
        `translateY(${offset*0.18}px) scale(1.08)`;

    });

}


/*==========================
        HERO CONTENT PARALLAX
==========================*/

const heroContent=document.querySelector(".hero-content");

if(heroContent){

    window.addEventListener("scroll",()=>{

        const y=window.scrollY;

        heroContent.style.transform=
        `translateY(${y*0.22}px)`;

        heroContent.style.opacity=
        Math.max(1-y/700,0);

    });

}


/*==========================
        SECTION FADE
==========================*/

const sections=document.querySelectorAll("section");

const sectionObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.12
});

sections.forEach(section=>{


    sectionObserver.observe(section);

});


/*==========================
        TITLE GLOW
==========================*/

const titles=document.querySelectorAll(".section-title");

titles.forEach(title=>{

    setInterval(()=>{

        title.style.textShadow=

        `0 0 ${18+Math.random()*22}px rgba(95,169,255,.55)`;

    },1500);

});


/*==========================
        IMAGE FADE-IN
==========================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="scale(1)";

        }

    });

},{
    threshold:0.2
});

images.forEach(img=>{

    img.style.opacity="0";

    img.style.transform="scale(.94)";

    img.style.transition=
    "all 1s ease";

    imageObserver.observe(img);

});


/*==========================
        SCROLL PROGRESS
==========================*/

window.addEventListener("scroll",()=>{

    const totalHeight=

    document.documentElement.scrollHeight-
    window.innerHeight;

    const progress=

    window.scrollY/totalHeight;

    document.body.style.setProperty(

        "--scroll-progress",

        progress

    );

});


/*==========================
        BUTTON HOVER EFFECT
==========================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform=
        "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform=
        "translateY(0) scale(1)";

    });

});


/*==========================
        SCROLL TO TOP
==========================*/

const scrollBtn=document.querySelector(".scroll-btn");

if(scrollBtn){

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*=======================

/*=========================================================
        PART 4
        Premium Gallery • 3D Hover • Floating Effects
=========================================================*/

/*==========================
        GALLERY TILT
==========================*/

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x-rect.width/2)/rect.width)*18;
        const rotateX = -((y-rect.height/2)/rect.height)*18;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.04)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            scale(1)
        `;

    });

});


/*==========================
        IMAGE PARALLAX
==========================*/

galleryItems.forEach(card=>{

    const img = card.querySelector("img");

    if(!img) return;

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = (e.clientX-rect.left)/rect.width-.5;
        const y = (e.clientY-rect.top)/rect.height-.5;

        img.style.transform=`

            scale(1.12)

            translate(${x*18}px,${y*18}px)

        `;

    });

    card.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


/*==========================
        GALLERY FADE
==========================*/

const galleryObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

galleryItems.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition=

"all 1s cubic-bezier(.22,.61,.36,1)";

galleryObserver.observe(card);

});


/*==========================
        FLOATING EFFECT
==========================*/

galleryItems.forEach((card,index)=>{

setInterval(()=>{

card.style.transform+=`

 translateY(${Math.sin(Date.now()/700+index)*3}px)

`;

},40);

});


/*==========================
        IMAGE SHINE
==========================*/

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

},850);

});

});


/*==========================
        CARD GLOW
==========================*/

galleryItems.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=

"0 35px 80px rgba(95,169,255,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow=

"0 15px 40px rgba(0,0,0,.3)";

});

});


/*==========================
        QUOTE FLOAT
==========================*/

const quote=document.querySelector(".quote");

if(quote){

window.addEventListener("scroll",()=>{

const y=window.scrollY;

quote.style.transform=

`translateY(${Math.sin(y/180)*20}px)`;

});

}


/*==========================
        TIMELINE CARDS
==========================*/

document.querySelectorAll(".timeline-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform=

"translateY(-10px) scale(1.03)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform=

"translateY(0) scale(1)";

});

});


/*==========================
        HERO IMAGE ZOOM
==========================*/

if(heroImage){

window.addEventListener("scroll",()=>{

const scale=1.08+window.scrollY*0.00018;

heroImage.style.transform=

`translateY(${window.scrollY*.18}px)

 scale(${scale})`;

});

}


/*==========================
        END PART 4
==========================*/

/*=========================================================
        PART 5
        Celebration • Secret Surprise • Fireworks
=========================================================*/

/*==========================
        CONFETTI
==========================*/

const canvas=document.getElementById("confetti");
const celebrateBtn=document.getElementById("celebrateBtn");

let ctx=null;
let confetti=[];

if(canvas){

ctx=canvas.getContext("2d");

function resizeCanvas(){

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

function random(min,max){

return Math.random()*(max-min)+min;

}

function createConfetti(){

confetti=[];

for(let i=0;i<320;i++){

confetti.push({

x:random(0,canvas.width),

y:random(-canvas.height,0),

size:random(4,10),

speed:random(2,8),

rotation:random(0,360),

rotationSpeed:random(-6,6),

color:[
"#5fa9ff",
"#9b7bff",
"#ffd166",
"#ffffff",
"#ff7eb6",
"#8ce99a"
][Math.floor(Math.random()*6)]

});

}

}

function drawConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(piece=>{

ctx.save();

ctx.translate(piece.x,piece.y);

ctx.rotate(piece.rotation*Math.PI/180);

ctx.fillStyle=piece.color;

ctx.fillRect(

-piece.size/2,

-piece.size/2,

piece.size,

piece.size*1.6

);

ctx.restore();

piece.y+=piece.speed;

piece.rotation+=piece.rotationSpeed;

if(piece.y>canvas.height+20){

piece.y=-20;

piece.x=random(0,canvas.width);

}

});

requestAnimationFrame(drawConfetti);

}

}

/*==========================
        FIREWORKS
==========================*/

function fireworkBurst(){

for(let i=0;i<60;i++){

const particle=document.createElement("div");

particle.className="firework";

particle.style.left=

(window.innerWidth/2)+"px";

particle.style.top=

(window.innerHeight/2)+"px";

const angle=Math.random()*360;

const distance=80+Math.random()*180;

particle.style.setProperty(

"--x",

Math.cos(angle*Math.PI/180)*distance+"px"

);

particle.style.setProperty(

"--y",

Math.sin(angle*Math.PI/180)*distance+"px"

);

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},1200);

}

}

/*==========================
        CELEBRATE BUTTON
==========================*/

/*==========================
        CELEBRATE BUTTON
==========================*/

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        // Confetti
        if (canvas) {
            createConfetti();
            drawConfetti();
        }

        // Fireworks
        fireworkBurst();

        // Button animation
        celebrateBtn.innerHTML = "🎉 Happy Birthday! 🎉";
        celebrateBtn.style.transform = "scale(1.12)";
        celebrateBtn.style.boxShadow = "0 0 60px rgba(95,169,255,.9)";

        // Play music
        if (music && music.paused) {
            music.play().catch(() => {});
        }

        // Extra effects
        createBalloons();
        createHearts();
        screenFlash();

    });

}


/*==========================
        BALLOONS
==========================*/

function createBalloons(){

    for(let i=0;i<25;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.innerHTML="🎈";

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.animationDuration=(5+Math.random()*4)+"s";

        balloon.style.fontSize=(25+Math.random()*30)+"px";

        document.body.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },9000);

    }

}


/*==========================
        HEARTS
==========================*/

function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.className="celebrate-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top=Math.random()*100+"vh";

        heart.style.animationDelay=Math.random()+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },3000);

    }

}


/*==========================
        FLASH
==========================*/

function screenFlash(){

    const flash=document.createElement("div");

    flash.className="flash";

    document.body.appendChild(flash);

    setTimeout(()=>{
        flash.remove();
    },600);

}
/*==========================
        SECRET SURPRISE
==========================*/

const trigger=document.querySelector(".heart-trigger");
const secret=document.getElementById("secret");

let clicks=0;

if(trigger && secret){

trigger.addEventListener("click",()=>{

clicks++;

if(clicks>=5){

secret.classList.add("active");

secret.scrollIntoView({

behavior:"smooth"

});

}

});

}

/*==========================
        BIRTHDAY MESSAGE
==========================*/

setTimeout(()=>{

console.log(

"%c🎂 Happy Birthday Vedshree ❤️",

"font-size:28px;color:#5fa9ff;font-weight:bold;"

);

},2000);

/*==========================
        MUSIC ENDED
==========================*/

if(music && musicBtn){

music.addEventListener("ended",()=>{

musicBtn.innerHTML='<i class="fas fa-play"></i>';

});

}

/*==========================
        END PART 5
==========================*/

/*=========================================================
        PART 6
        Performance • Final Polish • Optimizations
=========================================================*/

"use strict";

/*==========================
        PAGE FADE-IN
==========================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

requestAnimationFrame(()=>{

document.body.style.transition="opacity 1.2s ease";

document.body.style.opacity="1";

});

});


/*==========================
        PREVENT IMAGE DRAG
==========================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/*==========================
        LAZY VIDEO
==========================*/

document.querySelectorAll("video").forEach(video=>{

video.setAttribute("preload","metadata");

});


/*==========================
        PERFORMANCE RESIZE
==========================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

if(typeof resizeCanvas==="function"){

resizeCanvas();

}

},150);

});


/*==========================
        PARALLAX OPTIMIZATION
==========================*/

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

window.requestAnimationFrame(()=>{

ticking=false;

});

ticking=true;

}

});


/*==========================
        MUSIC ICON UPDATE
==========================*/

if(music && musicBtn){

music.addEventListener("play",()=>{

musicBtn.innerHTML='<i class="fas fa-pause"></i>';

});

music.addEventListener("pause",()=>{

musicBtn.innerHTML='<i class="fas fa-play"></i>';

});

}


/*==========================
        BUTTON RIPPLE
==========================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

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

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});


/*==========================
        CARD FLOAT
==========================*/

document.querySelectorAll(

".gallery-item,.timeline-item,.wish-card"

).forEach((card,index)=>{

setInterval(()=>{

card.style.transform=

`translateY(${Math.sin(Date.now()/900+index)*2}px)`;

},40);

});


/*==========================
        IMAGE LOADED
==========================*/

document.querySelectorAll("img").forEach(img=>{

if(img.complete){

img.classList.add("loaded");

}else{

img.addEventListener("load",()=>{

img.classList.add("loaded");

});

}

});


/*==========================
        MOBILE TOUCH
==========================*/

if(window.innerWidth<768){

document.querySelectorAll(".gallery-item").forEach(card=>{

card.style.transform="none";

});

}


/*==========================
        SMOOTH SCROLL
==========================*/

// history.scrollRestoration="manual";

// window.scrollTo(0,0);


/*==========================
        DISABLE RIGHT CLICK
        (optional)
==========================*/

// document.addEventListener(
// "contextmenu",
// e=>e.preventDefault()
// );


/*==========================
        FINAL CONSOLE MESSAGE
==========================*/

console.log(
"%cMade with ❤️ for Vedshree",
"font-size:18px;color:#5fa9ff;font-weight:bold;"
);

console.log(
"%cHappy Birthday 🎂✨",
"font-size:26px;color:#ffffff;font-weight:bold;"
);

/*==========================
        END
==========================*/
