const fetchApi=require('./fetch');

const cryptoApi=async(amount)=>{
    try{
        const result=await fetchApi("https://api2.binance.com/api/v3/ticker/24hr");
        return result.slice(0,amount);
    }catch(err)
    {
        console.log(err);
        throw err;
    }
}

module.exports=cryptoApi;