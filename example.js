var user=prompt("剪刀 石頭 布");
alert("你出"+user);
var computer=Math.random();

    if(computer<=0.33){
    computer="剪刀";
    }
    else if(computer<=0.66){
    computer="石頭";
    }
    else{
    computer="布";
    }

alert("電腦出"+computer);

    if(computer==user){
    alert("平手");
    }
    else if(user=="剪刀"){
        if(computer=="布"){
            alert("你勝");
        }
        else{alert("電腦贏")}
    }
        
    else if(user=="石頭"){
        if(computer=="剪刀"){
            alert("你勝");
        }
        else{alert("電腦贏")}
    }
        
    else {
        if(computer=="石頭"){
            alert("你勝");
        }
        else{
            alert("電腦贏");
        }
    }
        
        
        
   