var n=Math.random();
var no1= (Math.floor(n*6)+1);
if (no1==1){
    document.querySelector("img.img1").setAttribute("src","images/dice1.png")
} else if (no1==2){
    document.querySelector("img.img1").setAttribute("src","images/dice2.png")
} else if (no1==3){
    document.querySelector("img.img1").setAttribute("src","images/dice3.png")
} else if (no1==4){
    document.querySelector("img.img1").setAttribute("src","images/dice4.png")
} else if (no1==5){
    document.querySelector("img.img1").setAttribute("src","images/dice5.png")
} else {
    document.querySelector("img.img1").setAttribute("src","images/dice6.png")
}

var n=Math.random();
var no2= (Math.floor(n*6)+1);
if (no2==1){
    document.querySelector("img.img2").setAttribute("src","images/dice1.png")
} else if (no2==2){
    document.querySelector("img.img2").setAttribute("src","images/dice2.png")
} else if (no2==3){
    document.querySelector("img.img2").setAttribute("src","images/dice3.png")
} else if (no2==4){
    document.querySelector("img.img2").setAttribute("src","images/dice4.png")
} else if (no2==5){
    document.querySelector("img.img2").setAttribute("src","images/dice5.png")
} else {
    document.querySelector("img.img2").setAttribute("src","images/dice6.png")
}

if (no1>no2){
    document.querySelector("h1").innerHTML="Player 1 Won"
} else if (no1<no2) {
    document.querySelector("h1").innerHTML="Player 2 Won"
} else {
    document.querySelector("h1").innerHTML="Tie"
}