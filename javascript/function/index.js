const helloFunction = (a)=> {
    console.log(5 + 3 + a)
}

helloFunction(30)
helloFunction(15)



let obj = {
    myfun: (a)=> {
        console.log(a**2)
    },
    mynum: 2
}

obj.myfun(8 + obj.mynum)



let recurtion = (a)=> {
    if(a > 0){
        return recurtion(a - 1) * a
    }else{
        return 1
    }
    
}
console.log(recurtion(10))
