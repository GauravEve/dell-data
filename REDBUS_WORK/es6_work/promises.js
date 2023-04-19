let is_shop_open=true;

let stocks={
    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

// let order=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){

//             setTimeout(()=>{
//                 resolve(work());
//             },time)
           
//         }else{
//             reject(console.log("Our shop is closed"));
//         }
//     })
// }

// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order(0000,()=>console.log("production has started"))
// })
// .then(()=>{
//     return order(2000,()=>console.log("cut the fruits"))
// })
// .catch(()=>{
//     console.log("customer shop is closed");
// })
// .finally(()=>{
//     console.log("finally is called/");
// })

// function toppings_choice(){
//     return new Promise((resolve,reject)=>{
//             setTimeout(()=>{resolve(console.log("which toppings do u want"))
//     },3000)
// })
// }

function time(ms){

    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("Shop is closed"));
        }
    })
}
// async function kitchen(){
//     console.log("A");
//     console.log("B");
//     console.log("C");
//     await toppings_choice();// it waits  for it otherwise below lines will come first as it is async
//     console.log("doing the dishes");
//     console.log("cleaning the tables");
//     console.log("taking orderes");
//     console.log("D");
//     console.log("E");
// }

async function kitchen(){
    try{
	await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")
    }

    catch(error){
	 console.log("customer left")
    }
}

kitchen();



