// console.log("hello world");

let obj = {
    name: "sajib",
    age: 20,
    address: "gazipur"
}


for(const key in obj){
    let element = obj[key];
    console.log("-",key ,":", element);
}


let myArray = ["one","two","three","four","five"];

for(const arrKye in myArray){
    console.log("--",myArray[arrKye]);
}


for(const c of myArray){
    console.log("---",c);
}

let myStr = "hello world";

for(let c of myStr){
    console.log("----",c);
}

let i = 0;
while(i < 6){
    console.log(i);
    i++;
}
console.log(" ");
do{
    console.log(i);
    i++;
}while(i<10)










// console.log(obj.name);