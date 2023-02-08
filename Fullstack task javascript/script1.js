var str="Helloworld";
reversed(str);
function reversed(str){
    var rev=" ";
    var a=str.split(" ");
    for(let i=0;i<Array.length;i++){
        rev = rev+a[i].split("").reverse().join('')+" ";
    }
    console.log(rev);
}