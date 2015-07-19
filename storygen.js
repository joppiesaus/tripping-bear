var NAMES = ["James", "Harry", "Peter", "Henry", "Kate"];

var THING_NAMES = ["stone", "rainbow", "chair", "bear", "child", "cat", "laptop", "milk"];

var THING_EXTENSIONS = ["magic", "angry", "enthusiastic"];

var ACTIONS = ["picks up", "kills", "rubs", "comforts", "yells at", "ignores", "eats", "jumps on"];


// returns a random number between min and max - 1
function rnd(min,max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

// random return array: returns a random element from array arr
function rret(arr)
{
    return arr[rnd(0, arr.length)];
}
function randomName()
{
    return rret(NAMES);
}
function randomThing()
{
    return rret(THING_NAMES);
}
function randomExtension()
{
    if (rnd(0,2) === 0)
    {
        return rret(THING_EXTENSIONS);
    }
    else
    {
        return "";
    }
}

// converts string t to "the " + t
function the(t)
{
    return "the " + t;
}

function randomAction()
{
    return rret(ACTIONS);
}

function action(executer, victim, action)
{
    cs(executer + " " + action + " " + victim);
}

// create sentence
function cs(n)
{
    story += n[0].toUpperCase() + n.substring(1) + ".<br>";
}

var story = "";

function gen()
{
    var mc = randomName();
    var subject = randomThing();
    var tsub = the(subject);
    
    cs("one day, " + mc + " saw a " + randomExtension() + " " + subject);
    
    for (var i = 0; i < 3; i++)
    {
        if (rnd(0, 2) === 0)
        {
            action(tsub, mc, randomAction());
        }
        else
        {
            action(mc, tsub, randomAction());
        }
    }
    
    cs("the end");
    
    var par = document.createElement("code");
    par.innerHTML = story;
    document.body.appendChild(par);
}


(function(){gen()})();