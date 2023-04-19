const add=[1,3,5];
const  combined=[2,4,5,...add];
console.log(combined);

function f(a,b,...args){
    console.log(args);
}

f(1,2,3,4,5);

