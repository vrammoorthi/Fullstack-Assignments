function anagram(str1, str2)
{
    console.log("The string1 is "+str1);
    console.log("The string2 is "+str2);
    arr1 = str1.toLowerCase().split("").sort().join("");
    arr2 = str2.toLowerCase().split("").sort().join("");
    if(arr1 == arr2)
        return true;
    else
        return false;
}
let val = anagram("icecream","cinema");

if( val)
    console.log("Anagram");

else
    console.log("Not an anagram");