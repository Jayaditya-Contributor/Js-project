// Selecting the elements

let img1 = document.getElementById("img1");



let img2 = document.getElementById("img2");



// Selecting the elements

// calling the functions

let ran1 = image1();

let ran2 = image2();



//function to manipulate header
headerManipulator(ran1,ran2);


function headerManipulator(a,b){
    if(a>b){
        document.getElementById("header").innerText="Player 1 Wins!";
    }else if(a<b){
        document.getElementById("header").innerText="Player 2 Wins!";
    }else{
        document.getElementById("header").innerText="Draw !";
    }
}



// function to create an random number generator 

function image1(){

let random=Math.floor(Math.random() * 6) + 1


if(random==1){
    img1.setAttribute("src","images/dice1.png")
}else if(random==2){
    img1.setAttribute("src","images/dice2.png")
}else if(random==3){
    img1.setAttribute("src","images/dice3.png")
}else if(random==4){
    img1.setAttribute("src","images/dice4.png")
}else if(random==5){
    img1.setAttribute("src","images/dice5.png")
}else{
    img1.setAttribute("src","images/dice6.png")
}
return random;

}

function image2(){

let random1=Math.floor(Math.random() * 6) + 1



if(random1==1){
    img2.setAttribute("src","images/dice1.png")
}else if(random1==2){
    img2.setAttribute("src","images/dice2.png")
}else if(random1==3){
    img2.setAttribute("src","images/dice3.png")
}else if(random1==4){
    img2.setAttribute("src","images/dice4.png")
}else if(random1==5){
    img2.setAttribute("src","images/dice5.png")
}else{
    img2.setAttribute("src","images/dice6.png")
}

return random1;
}


