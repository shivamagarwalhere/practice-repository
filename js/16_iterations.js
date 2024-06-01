//for loop
for (let i = 0; i < 10; i++) {
    console.log(`i is: ${i}`)    
}

let myArray = ["shivam", "agarwal", "xaviers", "srm", "warren"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//break and continue

for (let index = 0; index < 20; index++) {
    if (index%2==0){
        console.log("even");
        continue;
    }
    console.log(index);
}

//while loop
let index= 0
while (index<=10) {
    console.log(`value of index is ${index}`)
    index+=1;
}