const validate=(str)=>{
    if(str.match("(^[A-Z]\. [A-Z][a-z]+$)|(^[A-Z]\. [A-Z]\. [A-Z][a-z]+)|(^[A-Z][a-z]+ [A-Z]\. [A-Z][a-z]+$)"))
    {
        return " ";
    }
    else
    return "";
    }
    
    var s="h. Wells"
    let r=validate(s);
    if(r.length>0)
    console.log("true");
    else
    console.log("false");