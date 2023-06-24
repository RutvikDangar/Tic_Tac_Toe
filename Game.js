//Theam Logic
let valueTheam = false;
const theamModual = document.body;

let theam1 = "rgba(0, 0, 0, 0.46)"
let theam2 = "wheat"
function themechange(){
    if(!valueTheam){
        theamModual.style.backgroundColor = theam1;
        valueTheam=true
    }
    else{
        theamModual.style.backgroundColor = theam2;
        valueTheam=false
    }
}



//Geting Name Form local storage
    let player1 = localStorage.getItem('Player1');
    let player2 = localStorage.getItem('Player2');
    if ( player1 === null){
        // player1 = 'First Player';
        player1 = "Player1";
    }
    if ( player2 === null){
        player2 = "Player2";
    }
    localStorage.clear();
    console.log(player1,player2);

//Variables

let turn = true;
let player = player1;
let gameOver = false;
let winner = player2;
document.getElementById('NameOfPlayer').innerText=`${player}`;
//result Cheak:

function CheckResult(){
    //can get error here;;;;
    let boxtexts = document.getElementsByClassName('txtBox');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e  =>{
        if(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText && boxtexts[e[2]].innerText===boxtexts[e[1]].innerText && boxtexts[e[0]].innerText !==''){
            gameOver = true;
            for(i = 0 ; i<3 ; i++){
                boxtexts[e[i]].style.color= valueTheam ? theam1 : theam2
            }
        }
    })
}

// Game: 
let boxes = document.getElementsByClassName('item');
Array.from(boxes).forEach( element => {
    let boxtext = element.querySelector('.txtBox');
    element.addEventListener('click', () =>{
        if(boxtext.innerText === '' && !gameOver){
            if(turn){
                boxtext.innerText = 'X';
                player = player2;
                turn = false;
            }
            else{
                if(!gameOver){
                    boxtext.innerText = 'O'
                    player = player1;
                    turn = true; 
                }
                
            }
        }
        CheckResult();
        if(!gameOver){
            document.getElementById('NameOfPlayer').innerText=`${player}`;
        }
        else{
            winner = turn ? player2 : player1;
            document.getElementById('winnerName').innerText = `Winner Of the game is ${winner}`;
            
        }
    })
    
})

//Game reset
let resetbutton = document.getElementById("dashbord_gameReset")

let boxses = document.getElementsByClassName('item');
Array.from(boxes).forEach( element => {
    let boxtext = element.querySelector('.txtBox');
    resetbutton.addEventListener('click', () =>{
        boxtext.style.color= "black"
        gameOver = false
        turn = true
        boxtext.innerText = ''
            document.getElementById('winnerName').innerText = '';
    })
    
})


