var randomhero1 = Math.floor((Math.random()*6)+1);
var randomhero2 = Math.floor((Math.random()*6)+1);
var randomnumber1 = Math.floor((Math.random()*6)+1);
var randomnumber2 = Math.floor((Math.random()*6)+1);

document.querySelector(".hero1 .hero-image").setAttribute("src","images/hero"+randomhero1+".png");
document.querySelector(".hero2 .hero-image").setAttribute("src","images/hero"+randomhero2+".png");
document.querySelector(".hero1 .dice-image").setAttribute("src","images/dice"+randomnumber1+".png");
document.querySelector(".hero2 .dice-image").setAttribute("src","images/dice"+randomnumber2+".png");

if(randomnumber1>randomnumber2){
  document.querySelector("h2").textContent="Hero 1 Wins";
}
else if (randomnumber1<randomnumber2) {
  document.querySelector("h2").textContent="Hero 2 Wins";
}
else if (randomnumber1===randomnumber2) {
  document.querySelector("h2").textContent="Battle is Draw";
}
else{
  document.querySelector("h2").textContent="Battle Begin";
}
