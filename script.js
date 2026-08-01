const button=document.getElementById("open");
const letter=document.getElementById("letter");
const timer=document.getElementById("timer");

button.addEventListener("click",()=>{

letter.style.display="block";

button.innerHTML="❤️ Forever ❤️";

letter.scrollIntoView({
behavior:"smooth"
});

});

const start=new Date("2024-12-27T00:00:00");

function updateTimer(){

const now=new Date();

const diff=now-start;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

timer.innerHTML=
days+" Days ❤️ "+hours+" Hours ❤️ "+minutes+" Minutes";

}

updateTimer();

setInterval(updateTimer,60000);
const hearts = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,500);
