function print(s){
    
    document.write(s);
    
}

function length(s){
    
    return s.length;
    
}

function println(s){
    
    document.write(s);
    document.write("<br>");

}

function convertToInteger(n){
    
    return parseInt(n, 10);
    
}


function readNumber(t){
    
    var n = prompt(t);
    return Number(n);
    
}

function readString(t){
    
    var t = prompt(t);
    return t;
}

