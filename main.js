var brig = "";
function go(value)
{
    if(value == 1)
    {
    brig = "";
    }
    if(value == 2)
    {
    brig = "set";
    }
}
var x = 0;
var y = 0;
var colldown = 40000;
var xx = 0;
var j = "set";
var yy = 0;
if(localStorage.getItem("backimg") == "blank.png")
{
localStorage.setItem("backimg","blank.png")
}
if(localStorage.getItem("bought") == "")
{
localStorage.setItem("bought","");
}
var number = Math.floor(Math.random()*9+1);
var number2 = Math.floor(Math.random()*9+1);
var alchemy = [];
var xxx = 0;
var fock;
var upfreeze = "";
var yyy = 0;
var xxxx = 0;
var yyyy = 0;
var bk = "";
var distance;
var loxine = 0;
var distance2;
var gems = 100;

var popedd = false; 
var check4;
var check3;
var check2;
var check1;
var r = 0;
var g = 0;
var b = 0;
var keybombcheck = "";
var realkeybombcheck = "";

var popedd2 = false;
var popedd3 = false;
var popedd4 = false;

var goldprize = 15;

var life = 3;

var distance3;
var number3 = Math.floor(Math.random()*9+1);

var distance4;
var number4 = 1;

var cash = 0;

var cashtime = 10;
cashtime = cashtime*1000
var seconds = 10;
var canvas;
var level = 0;

var dam = 1;
var gold = 10000000;

var speed = 2;
var pooop = 0;
var goldplus= 0;
var mivno = 0;
var times = 1;
var keypressed;
var keybomb = "";
var realkeybomb = "";
document.addEventListener("keypress",key)
var leadcheck = "";
function key(f)
{
    keypressed = f.code;
}

function lead()
{
    if(gold >= 30)
    {
        leadcheck = "set";
      gold = gold-30
        document.getElementById("leadup").innerHTML = "(sold)";
    }
}
var ho = "set";
function blows()
{
    fock = "freeze";
    if(level !== 4)
    {
        level = 4
    }
    if(j == "set")
    {
    if(gold >= 40)
    {
    keybomb = "set";
    gold = gold - 40;
    document.getElementById("blowsbomb").innerHTML = "(sold)";
    j = "";
    }
}
    if(gems >= 15)
        {
    if(upfreeze == "set")
    {
        colldown = 20000;
        gems = gems-15;
        document.getElementById("blowsbomb").innerHTML = "(sold)";
        upfreeze = "";
    }
}

}

var realfock
function realblows()
{
    realfock = "bomb";
    if(ho == "set")
    {
    if(gold >= 100)
    {
    realkeybomb = "set";
    gold = gold - 100;
    document.getElementById("realblowsbomb").innerHTML = "(sold)";
    ho = "";
    }
}
}


function lifeup()
{
    if(gems >= 9)
    {
    life = life+1;
    gems = gems-10;
    }
}

function prise25()
{
    if(level !== 3)
    {
        level = 3;
    }
    var prize25 = 25;
    if(gold >= prize25)
    {
        times = times+1;
    goldplus = goldplus+1;
    gold = gold-prize25;
    document.getElementById("price25").innerHTML = "increases the money made X"+times+"<br>price-"+prize25+" gold";
    prize25 = prize25+15;
    }
}


function speedlow()
{
    if(level !== 2)
    {
        level = 2;
    }
    if(pooop<5)
    {
    if(dam-1 > pooop)
    {
    if(gold >= pooop*20)
    {
        gold = gold-pooop*20;
    savespeed = savespeed-1;
    pooop = pooop+1
    document.getElementById("low").innerHTML = "low speed of the orbs<br>price-"+pooop*20+" gold"
    }
}
}

if(pooop == 5)
{
    document.getElementById("low").innerHTML = "low speed of the orbs (Max)"
}

}


function earning()
{
    if(gold >= goldprize)
    {
    if(loxine <= 6)
    {
        gold = gold-goldprize;
         seconds = seconds - 1;
        goldprize = goldprize + 15;
        document.getElementById("automaticearning").innerHTML = "starts poping bubbles randomly (popes bloons every "+seconds+"sec)<br>price-"+goldprize+" gold"
    var earnings = Math.floor(Math.random()*2+1);
    if(earnings == 1)
    {
        number = 0;
        cash = 1;
        cashtime = cashtime-1000;
        loxine = loxine+1;
    }
    if(earnings == 2)
    {
        number2 = 0;
        cash = 2
        cashtime = cashtime-1000;
        loxine = loxine+1;
    }
    if(earnings == 3)
    {
        number3 = 0;
        cash = 3
        cashtime = cashtime-1000;
        loxine = loxine+1;
    }
}
    if(cash == 1)
    {
        setInterval(() => {
            number = 0;
        }, cashtime);
    }
    if(cash == 2)
    {
        setInterval(() => {
            number2 = 0;
        }, cashtime);
    }
    if(cash == 3)
    {
        setInterval(() => {
            number3 = 0;
        }, cashtime);
    }
    }
}


function damage()
{
    level = 2;
    if(dam < 5)
    {
    savespeed = savespeed+(savedamage-1);
    }
    if(gold >= 10)
    {
        savedamage = savedamage+1;
    gold = gold-10;
    }
    var fko = dam+1;
    document.getElementById("twice").innerHTML = fko+"X the damage <br>price-10 gold";
}

function backpize()
{
    if(localStorage.getItem("backimg") !== "loko.png")
    {
        localStorage.setItem("backimg","loko.png")
        localStorage.setItem("bought","loko");
    }
    if(gems >= 10)
    {
        bk = "set";
        localStorage.setItem("backimg","loko.png")
        localStorage.setItem("bought","loko");
        gems = gems-10
    }
}
function backpizedark()
{
    if(localStorage.getItem("backimg") !== "dark.png")
    {
        localStorage.setItem("backimg","dark.png")
        localStorage.setItem("bought","dark");
    }
    if(gems >= 20)
    {
        localStorage.setItem("backimg","dark.png")
        localStorage.setItem("bought","dark");
        gems = gems-20
    }
}
function backpizebeach()
{
    if(localStorage.getItem("backimg") !== "beach.png")
    {
        localStorage.setItem("backimg","beach.png")
        localStorage.setItem("bought","beach");
    }
    if(gems >= 25)
    {
        localStorage.setItem("backimg","beach.png")
        localStorage.setItem("bought","beach");
        gems = gems-25
    }
}
function backpizemush()
{
    if(localStorage.getItem("backimg") !== "mushroom.png")
    {
        localStorage.setItem("backimg","mushroom.png")
        localStorage.setItem("bought","mush");
    }
    if(gems >= 20 && gold >= 30)
    {
        localStorage.setItem("backimg","mushroom.png")
        localStorage.setItem("bought","mushroom");
        gems = gems-20;
        gold = gold-30;
    }
}

var cheap = "";
var black = "";
var blankimg = "";
var mushroomimg = "";
var beach = "";
function preload()
{
    cheap = loadImage("loko.png");
    blankimg = loadImage("blank.png");
    black = loadImage("dark.png");
    mushroomimg = loadImage("mushroom.png");
    beach = loadImage("beach.png");
}
function setup()
{
    canvas = createCanvas(1365,600);
}
document.addEventListener("click",click);
function click(l)
{
    circle(mouseX,mouseY,10)
    distance = dist(mouseX,mouseY,x,y)
    distance2 = dist(mouseX,mouseY,xx,yy)
    distance3 = dist(mouseX,mouseY,xxx,yyy)
    distance4 = dist(mouseX,mouseY,xxxx,yyyy)
}
function freeze()
{
    if(document.getElementById("right").innerHTML == "")
    {
    if(fock == "freeze")
    {
        document.getElementById("right").innerHTML = "freezebomb"
        document.getElementById("freezebutt").innerHTML = "freezebomb"
    }
}else
{
    if(fock == "freeze")
    {
        document.getElementById("middle").innerHTML = "+ freezebomb"
        document.getElementById("freezebutt").innerHTML = "freezebomb"
    }
}
}
function bombbomb()
{
    if(document.getElementById("right").innerHTML == "")
    {
    if(realfock == "bomb")
    {
        document.getElementById("right").innerHTML = "normalbomb"
        document.getElementById("bombbutt").innerHTML = "normalbomb"
    }
}else
{
    if(realfock == "bomb")
    {
        document.getElementById("middle").innerHTML = "+ normalbomb"
        document.getElementById("bombbutt").innerHTML = "normalbomb"
    }
}
}
var checkcoll = "set";
function make()
{
    if(document.getElementById("right").innerHTML == "freezebomb" && document.getElementById("middle").innerHTML == "+ freezebomb")
    {
        document.getElementById("make").innerHTML = "made";
        checkcoll = "";
        upfreeze = "set"
    }

}
var ko = 1;
var no = 0;
var savespeed = speed;
var savedamage = dam;
function draw()
{
    if(upfreeze == "set")
    {
        document.getElementById("blowsbomb").innerHTML = "<b>frezes</b> every bubble on th screen(Power up : costs 15 gems)<br>Colldown 30seconds";
    }
    if(realfock == "bomb")
    {
        document.getElementById("bombbutt").innerHTML = "normalbomb"
    }
    if(fock == "freeze")
    {
        document.getElementById("freezebutt").innerHTML = "freezebomb"
    }
    if(checkcoll == "set")
    {
    if(document.getElementById("right").innerHTML == "freezebomb" && document.getElementById("middle").innerHTML == "+ freezebomb")
    {
        document.getElementById("mix").innerHTML = "Super freeze bomb";
        document.getElementById("make").innerHTML = "make(decreases duration of use)";
    }
}


   if(brig == "")
    {
        setTimeout(function(){
            speed = 0;
            dam = 0;
        },30)
    }else
    {
        speed = savespeed;
        dam = savedamage
    }

    if(localStorage.getItem("bought") == "loko")
    {
        localStorage.setItem("cheapcheck","set");
    }
    if(localStorage.getItem("cheapcheck") == "set")
    {
        document.getElementById("trix").innerHTML = "(bought) CHOOSE";
    }

    if(localStorage.getItem("bought") == "beach")
    {
        localStorage.setItem("beachcheck","set");
    }
    if(localStorage.getItem("beachcheck") == "set")
    {
        document.getElementById("beachtrix").innerHTML = "(bought) CHOOSE";
    }


    if(localStorage.getItem("bought") == "dark")
    {
        localStorage.setItem("darkcheck","set");
    }

    if(localStorage.getItem("darkcheck") == "set")
    {
        document.getElementById("darktrix").innerHTML = "(bought) CHOOSE";
    }

    if(localStorage.getItem("bought") == "mushroom")
    {
        localStorage.setItem("mushroomcheck","set");
    }

    if(localStorage.getItem("mushroomcheck") == "set")
    {
        document.getElementById("mushtrix").innerHTML = "(bought) CHOOSE";
    }

    document.getElementById("life").innerHTML = "life - "+life;
    document.getElementById("gems").innerHTML = "  Gems - "+gems;
    if(upfreeze == "")
    {
    if(keybomb == "set")
    {
        setTimeout(() => {
            if(upfreeze == "")
            {
            keybombcheck = "set";  
            document.getElementById("Colldown").innerHTML = "powerup is ready";
            }
        },colldown)
        keybomb = ""
    }
    if(keybombcheck == "set")
    {
        if(keypressed == "Space")
        {
            savespeed = speed;
            speed = 0;
            document.getElementById("Colldown").innerHTML = "";  
            keybomb = "set";
            keybombcheck ="";
            setTimeout(function(){
                speed = savespeed;
            },colldown+1000)
            keypressed = "";
        }
    }
}
    //real
    if(realkeybomb == "set")
    {
        setTimeout(() => {
            realkeybombcheck = "set";  
            document.getElementById("realColldown").innerHTML = "powerup is ready";
        },20000)
        realkeybomb = ""
    }
    console.log(keypressed);
    if(realkeybombcheck == "set")
    {
        if(keypressed == "KeyE")
        {
            document.getElementById("realColldown").innerHTML = "";  
            realkeybomb = "set";
            realkeybombcheck ="";
            number = 0;
            number2 = 0;
            number3 = 0;
            number4 = 0;
            keypressed = "";
        }
    }
    if(level == 4)
    {
        check4 = "set";
    }
    if(level == 3)
    {
        check3 = "set"
    }
    if(level == 2)
    {
        check2 = "set"
    }
    if(level == 0)
    {
            check1 = "set";
    }
    if(life <= 0)
    {
        window.location = "youlose.html";
    }
    if(y > 600)
    {
        life = life-1;
        document.getElementById("life").innerHTML = "life - "+life;
       y = 0;
    }
    if(yy > 600)
    {
        life = life-1;
        document.getElementById("life").innerHTML = "life - "+life;
       yy = 0
    }
    if(yyy > 600)
    {
        life = life-1;
        document.getElementById("life").innerHTML = "life - "+life;
        yyy =0;
    }
    if(yyyy > 600)
    {
        life = life-5;
        document.getElementById("life").innerHTML = "life - "+life;
        yyyy = 0
    }
    document.getElementById("gold").innerHTML = "Gold - "+gold
    if(popedd == true)
    {
        gold = gold+1;
        localStorage.setItem("gold",gold);
        number = Math.floor(Math.random()*dam*4+1);
        gold = gold+goldplus;
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        popedd = false;
}
if(popedd3 == true)
{
    gold = gold+1;
    localStorage.setItem("gold",gold);
        number3 = Math.floor(Math.random()*dam*4+1);
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
    popedd3 = false; 
}
if(popedd2 == true)
{
    gold = gold+1;
    localStorage.setItem("gold",gold);
        number2 = Math.floor(Math.random()*dam*4+1);
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
    popedd2 = false; 
}
if(popedd4 == true)
{
    gems = gems+1;
    localStorage.setItem("gems",gems);
        number4 = 1;
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
    popedd4 = false; 
}
    clear()
    
    y = y+speed

    if(check2 == "set")
    {
        yy = yy+speed
    }
    if(check3 == "set")
    {
        yyy = yyy+speed
    }

    if(check4 == "set")
    {
        yyyy = yyyy+speed
    }

    if(number < 1)
    {
        x = Math.floor(Math.random()*1365)
        y = 0
        popedd = true;
    }
    if(check2 == "set")
    {
    if(number2 < 1)
    {
        xx = Math.floor(Math.random()*1365)
        yy = 0
        popedd2 = true;
        gold = gold+goldplus;
    }
}
if(check3 == "set")
    {
    if(number3 < 1)
    {
        xxx = Math.floor(Math.random()*1365)
        yyy = 0
        popedd3 = true;
        gold = gold+goldplus;
    }
}
if(check4 == "set")
{
if(number4 < 1)
{
    xxxx = Math.floor(Math.random()*1365)
    yyyy = 0
    popedd4 = true;
    gold = gold+goldplus;
}
}
    if(distance < 41)
    {
        number = number-dam;
        distance = 1000;
    }
    if(check2 == "set")
    {
    if(distance2 < 41)
    {
        number2 = number2-dam;
        distance2 = 1000;
    }
}
if(check3 == "set")
    {
    if(distance3 < 41)
    {
        number3 = number3-dam;
        distance3 = 1000;
    }
}
if(check4 == "set")
    {
        if(leadcheck == "set")
        {
    if(distance4 < 41)
    {
        number4 = number4-dam;
        distance4 = 1000;
    }
}
}
if(localStorage.getItem("backimg") !== "loko.png" && localStorage.getItem("backimg") !== "mushroom.png"&& localStorage.getItem("backimg") !== "beach.png")
{
    if(localStorage.getItem("backimg") == "dark.png")
    {
        image(black,0,0,1400,600)
    }else
    {
        image(blankimg,0,0,1400,600)
    }
}
if(localStorage.getItem("backimg") !== "dark.png" && localStorage.getItem("backimg") !== "mushroom.png"&& localStorage.getItem("backimg") !== "beach.png")
{
    if(localStorage.getItem("backimg") == "loko.png")
    {
        image(cheap,0,0,1400,600)
    }else
    {
        image(blankimg,0,0,1400,600)
    }
}
if(localStorage.getItem("backimg") !== "dark.png" && localStorage.getItem("backimg") !== "loko.png"&& localStorage.getItem("backimg") !== "beach.png")
{
    if(localStorage.getItem("backimg") == "mushroom.png")
    {
        image(mushroomimg,0,0,1400,600)
    }else
    {
        image(blankimg,0,0,1400,600)
    }
}
if(localStorage.getItem("backimg") !== "mushroom.png" && localStorage.getItem("backimg") !== "dark.png"&& localStorage.getItem("backimg") !== "loko.png")
{
    if(localStorage.getItem("backimg") == "beach.png")
    {
        image(beach,0,0,1400,600)
    }else
    {
        image(blankimg,0,0,1400,600)
    }
}
circle(x,y,60)  
text(number,x,y);
    if(check2 == "set")
    {
    circle(xx,yy,60);
    text(number2,xx,yy)
    }
    if(check3 == "set")
    {
    circle(xxx,yyy,60);
    text(number3,xxx,yyy)
    }

    if(check4 == "set")
    {
       circle(xxxx,yyyy,60);
        text("LEAD",xxxx,yyyy)
    }
    if(speed !== 0)
    {
    savespeed = speed;
    }
    if(dam !== 0)
    {
    savedamage = dam;
    }
} 