// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let obj = {};
if ( currency>=1 && currency<=10000){
    obj.H = Math.floor(currency / 50);    
    obj.Q = Math.floor((currency % 50) / 25);
    obj.D = Math.floor(((currency % 50) % 25) / 10);
    obj.N = Math.floor((((currency % 50) % 25) % 10) / 5);
    obj.P = currency % 5;   
    for ( var key in obj) {
        if (obj[key]==0) {
            delete obj[key];
        }
    }
    return obj;
}
else if (currency<=0) {
    return obj;
}
else {
   obj.error = "You are rich, my friend! We don't have so much coins for exchange";
   return obj;
}   
}
