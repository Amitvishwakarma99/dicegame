let rndmnum=(Math.floor(Math.random()*6))+1;
let rndimg="./images/dice"+rndmnum+".png";
document.querySelectorAll("img")[0].setAttribute("src",rndimg);
let rndmnum2=(Math.floor(Math.random()*6))+1;
let rndimg2="./images/dice"+rndmnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",rndimg2);
if(rndmnum>rndmnum2)
{
    document.querySelector("h1").innerHTML="player 1 wins";

}
else if(rndmnum2>rndmnum){
    document.querySelector("h1").innerHTML="player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="draw";
}