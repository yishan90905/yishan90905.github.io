console.log("hello");
alert("hello");

function compare(a,b){
    if(a>b)
        {return"A>B";}
    else if(a<b)
        {return"A<B";}
    else if(a==b)
        {return"A=B";}
    else
        {return"無解"}
}

var a =Number(prompt("A?"));
alert(a);

var b =Number(prompt("B?"));
alert(b);

alert(compare(a,b));

