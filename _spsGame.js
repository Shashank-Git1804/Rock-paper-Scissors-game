let a=document.querySelectorAll("a");
let h3=document.querySelector("h3");
let userscore=document.querySelector(".userscore");
let systemscore=document.querySelector(".systemscore");
let imgsrc=document.querySelector(".imgsrc");
let sysimgsrc=document.querySelector(".sysimgsrc");
let display=document.querySelector(".display");

let youScore=0;
let systemScore=0;
let id;

let playGame=(id)=>{
    // console.log(id);
    let genSystemChoice=sysChoices();
    // console.log(genSystemChoice);
    compare(id,genSystemChoice);
}

let youWin=(id,genSystemChoice)=>{
    h3.innerText=`You Won!! You Chose "${id}" and System Chose "${genSystemChoice}"`;
    youScore++;
    userscore.innerText=`${youScore}`;
    display.style.backgroundColor="green";
}

let youLose=(id,genSystemChoice)=>{
    h3.innerText=`You Lost You Chose "${id}" and System Chose "${genSystemChoice}"`;
    systemScore++;
    systemscore.innerText=`${systemScore}`;
    display.style.backgroundColor="red";
}

let displayimg=(id,genSystemChoice)=>{
    imgsrc.innerHTML=`<img src='/${id}.jpg' alt=''>`;
    sysimgsrc.innerHTML=`<img src='/${genSystemChoice}.jpg' alt=''>`;
}

let compare=(id,genSystemChoice)=>{
    if(id===genSystemChoice){
        // console.log("Game was draw!!");
        h3.innerText=`Game was draw, Both Chose ${id}. Try Again!!`;
        display.style.backgroundColor="rgb(41, 41, 99)";
        displayimg(id,genSystemChoice);
    }else if(id==='rock'&& genSystemChoice==='scissors'){
        // console.log("You Win!!");
        youWin(id,genSystemChoice);
        displayimg(id,genSystemChoice);
    }else if(id==='rock'&& genSystemChoice==='paper'){
        // console.log("You Lose:(");
        youLose(id,genSystemChoice);
        displayimg(id,genSystemChoice);
    }else if(id==='paper'&& genSystemChoice==='scissors'){
        // console.log("You Lose:(");
        youLose(id,genSystemChoice);
        displayimg(id,genSystemChoice);
    }else if(id==='paper'&& genSystemChoice==='rock'){
        // console.log("You Win!!");
        youWin(id,genSystemChoice);
        displayimg(id,genSystemChoice);
    }else if(id==='scissors'&& genSystemChoice==='rock'){
        // console.log("You Lose:(");
        youLose(id,genSystemChoice);
        displayimg(id,genSystemChoice);
    }else if(id==='scissors'&& genSystemChoice==='paper'){
        // console.log("You Win!!");
        youWin(id,genSystemChoice);
        displayimg(id,genSystemChoice);
    }
}

let sysChoices=()=>{
    let arr=['rock','paper','scissors']
    let sysChoice=Math.floor(Math.random()*3);
    return arr[sysChoice];
};


a.forEach((i)=>{
    i.addEventListener("click",(e)=>{
        id=i.getAttribute("id");
        playGame(id);
    });
});
