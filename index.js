

//Geting Name From User And Saving in local storage:

function SettingName(){ 

    p1 = document.getElementById('Player_1').value ;
    p2 = document.getElementById('Player_2').value ;

    if((p1 !== '') && (p2 !== '') ){
        localStorage.setItem("Player1",p1);
        localStorage.setItem("Player2",p2);
        window.location.assign("game.html");
        startGame();
    }
    else{
        alert("Please Enter Name ");
    }
}

