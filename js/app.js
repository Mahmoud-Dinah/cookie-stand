
let hour=['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

const Seattle = {
location: 'Seattle',
minCust : 23,
maxCust : 65,
avgCookie : 6.3,
randCust : [],

randomNum:function(){
   for (let i = 0; i < hour.length; i++) {
    this.randCust[i] = randomValue(1,14);   
   } 
},

};

Seattle.randomNum();
console.log(Seattle.randCust);


function randomValue(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
