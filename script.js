let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");
let one = document.querySelector(".answer-one");
let two = document.querySelector(".answer-two");
let caption = document.querySelector(".caption");
let captiontwo = document.querySelector(".captiontwo");
let image = document.querySelector(".hero-img");
let header = document.querySelector(".topup");


let autobot="Gorilla";
let decepticon="Shark";
let autotwo="Axe"
let deceptwo="Flail"


buttonOne.addEventListener("click", function () {
  buttonOne.style.display = "none";
  buttonTwo.style.display = "flex";
  one.style.display = "flex";
  two.style.display = "flex";
  captiontwo.style.display = "flex";
  caption.innerHTML = "Would you rather be a Shark or a Gorilla?";
  captiontwo.innerHTML = "Would you rather use an Axe or a Flail?";


});

buttonTwo.addEventListener("click", function () {
  let one = document.querySelector(".answer-one").value;
  let two = document.querySelector(".answer-two").value;
  let message = document.querySelector(".message");
  let description = document.querySelector(".description");
  
  if (one === autobot && two === autotwo){
    let one = document.querySelector(".answer-one");
    let two = document.querySelector(".answer-two");
    image.src ="images/autobots.jpg";
    image.style.borderColor = "#2872d4ff"
    message.innerHTML = "Autobot";
    
    description.innerHTML = "Autobots are a generally heroic, honorable group, they tend to be dedicated to peace, and feel a need to protect other races from the Decepticons. As a result, they are usually Transformers who change into non-combat oriented alternate modes such as domestic vehicles, cars, trucks, or rescue vehicles. Overall, they usually find themselves defending both their own race and other species against the Decepticons and upholding justice and freedom throughout the galaxy.";
    
    document.body.style.background = "#b30000ff";
    buttonTwo.style.display = "none";
    one.style.display = "none";
    two.style.display = "none";
    caption.style.display = "none";
    captiontwo.style.display = "none";
  console.log(message);
  } else if (one === decepticon && two === deceptwo){
    let one = document.querySelector(".answer-one");
    let two = document.querySelector(".answer-two");
    image.src ="images/decepticons.jpg";
    image.style.borderColor = "#580babff"
     message.innerHTML = "Decepticon";
    
    description.innerHTML = "Decepticons are concerned with such things as conquering Cybertron, defeating the Autobots, amassing large quantities of energon, developing powerful weaponry, and beating people up. Not necessarily in that order. Unlike the Autobots, whose leader is a Prime bearing a Matrix, the Decepticons are led by the most powerful of their ranks. This tends to cause some conflict, given how generally every Decepticon thinks that they're the most powerful.";
    
    document.body.style.background = "#580babff";
    buttonTwo.style.display = "none";
    one.style.display = "none";
    two.style.display = "none";
    caption.style.display = "none";
    captiontwo.style.display = "none";
  } else if (one === decepticon && two === autotwo || one === autobot && two === deceptwo){
     image.src ="images/neutral.jpg";
    let one = document.querySelector(".answer-one");
    let two = document.querySelector(".answer-two");
     message.innerHTML = "Neutral";
    description.innerHTML = "Neutrals are Transformers who have renounced the idea of factions or refused to take part in the Civil War. While some Neutrals resist joining a faction by choice, some defining themselves not by faction but by world, as the war drags on, the majority are those who are unsuited to combat. While 'Neutral' is the Autobots' term for them, the Decepticons prefer to call them 'target practice'.";
    document.body.style.background = "#C19A6B";
    buttonTwo.style.display = "none";
    one.style.display = "none";
    two.style.display = "none";
    caption.style.display = "none";
    captiontwo.style.display = "none";
  } else if (one === "" && two === deceptwo || one === decepticon && two === "" || one === autobot && two === "" || one === "" && two === autotwo){
     message.innerHTML = "You Missed One";
  } else if (one === "" && two === ""){
     message.innerHTML = "Fill Out The Form";
  }
  
});