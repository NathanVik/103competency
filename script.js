
var character1={
    id:"character1",
    name:"Sigmar",
    points:100,
    attack:20
}
var character2={
    id:"character2",
    name:"Nagash",
    points:100,
    attack:20
}
function displaychar(character){
    var charid=character.id + "-info";
    console.log(charid);
    document.getElementById(charid).innerHTML=` <p><b>Name</b> ${character.name}</p>
    <p><b>Points:</b> ${character.points}</p>`
}
displaychar(character1);
displaychar(character2);

function attack(aggressor,target){
    document.getElementById("console").innerHTML=`<p>Attacking...</p>`;
    // discount points from character
    
    var newPoints=target.points-aggressor.attack;  
    //update variable
  
    target.points=newPoints;
    //update display
  
    displaychar(target);

    if (target.points<=0){
            document.getElementById("console").innerHTML=`<p><b>Congratulations!</b> ${aggressor.name} Wins!`
            document.getElementById("characterOneAttack-btn").style.visibility="hidden";
            document.getElementById("characterTwoAttack-btn").style.visibility="hidden";
    }
}

function restart(){
    character1.points=100;
    character2.points=100;
    document.getElementById("characterOneAttack-btn").style.visibility="visible";
    document.getElementById("characterTwoAttack-btn").style.visibility="visible";
    displaychar(character1);
    displaychar(character2);
}