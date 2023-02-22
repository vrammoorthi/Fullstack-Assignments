var arr1 = []
var arr2 = []

function Enqueue(element) {
    arr1.push(element)
}

function Dequeue() {
    if (arr2.length == 0) {
        if (arr1.length == 0) {
            console.log("No element in string")
        }
        while (arr1.length > 0) {
            var e = arr1.pop()
            arr2.push(e)
        }
    }
    return arr2.pop()
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
let s = "";
console.log("After enqueuing")
for (let i = 0; i < arr1.length; i++) {
    s += arr1[i] + " ";
}
console.log(s)

Dequeue();
s = "";
console.log("After dequeuing")

while (arr2.length > 0) {
    var e = arr2.pop()
    arr1.push(e)
}

for (let j = 0; j < arr1.length; j++) {
    s += arr1[j] + " ";
}
console.log(s)