


let a = "hello world";
let b = 40;
let c = true;
let d = null;
let e = undefined;
let f = [30,50,"hello"];
let g = {
    name: "sajib hasan",
    "date of birth": 2003
}
let h = {
    i : {
        name: "hello",
        age: 23
    },
    j : () => {
        return "hello arrow object method";

    },
    k : 300
}

console.log(typeof a,typeof b,typeof c, typeof d,typeof e,typeof f);
console.log(f[2]);
console.log(g["date of birth"]);
console.log(h.i.name);
console.log(h);