
let hour=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

const Seattle = {
location: 'Seattle',
minCust : 23,
maxCust : 65,
avgCookie : 6.3,
randCust : [],
cal : [],

calc:function() {
    for (let i= 1; i<this.randCust.length; i++) {

          this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))


    }
   
},

randomNum:function(){
   for (let i = 0; i < hour.length; i++) {
    this.randCust.push(randomValue(1,14))
   
   } 
  
},

};

Seattle.randomNum();
Seattle.calc();
console.log(Seattle.cal);
console.log(hour); 
function randomValue(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
