`use strict`

function randomValue(min, max) {   // this random func. credits to MDN web docs
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let hour = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let div = document.getElementById('new')
let cookieTable = document.getElementById('table1');

div.appendChild(cookieTable);


// let thEl = document.createElement('th')
// thEl.textContent = hour;
// headerRaw.appendChild(thEl);

function headRow() {
    let headerRaw = document.createElement('tr')
    cookieTable.appendChild(headerRaw);
    let td0 = document.createElement('th')
    td0.textContent = '';
    headerRaw.appendChild(td0);

    let tdEl = null;
    for (var i = 0; i < hour.length; i++) {

        tdEl = document.createElement('th');

        tdEl.textContent = hour[i];

        headerRaw.appendChild(tdEl);
    }

    tdEn = document.createElement('td');
    tdEn.textContent = 'total';
    headerRaw.appendChild(tdEn);

}

headRow();


// here

let newArry = [];

function cookiesShob(location, minCust, maxCust, avgCookie) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.randCust = [];
    this.cal = [];
    this.totalcookies = 0;
    newArry.push(this);

}

let Seattle = new cookiesShob('Seattle', 23, 65, 6.3)
let Tokyo = new cookiesShob('Tokyo', 3, 24, 1.2)
let Dubai = new cookiesShob('Dubai', 11, 38, 3.7)
let Paris = new cookiesShob('Paris', 20, 38, 3.7)
let Lima = new cookiesShob('Lima', 2, 16, 4.6)

// console.log(newArry);
cookiesShob.prototype.randomNum = function () {
    for (let i = 0; i < hour.length; i++) {
        this.randCust.push(randomValue(this.minCust, this.maxCust))
    }

};

cookiesShob.prototype.calc = function () {
    for (let i = 0; i < this.randCust.length; i++) {
        this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))
    }
};

cookiesShob.prototype.show = function () {
    let branchName = document.createElement('h2')
    div.appendChild(branchName)
    branchName.textContent = (this.location)
    let unorderedlist = document.createElement('ul')
    div.appendChild(unorderedlist)
    for (let i = 0; i < this.cal.length; i++) {
        let li = document.createElement('li');
        unorderedlist.appendChild(li);
        li.textContent = `${hour[i]}: ${this.cal[i]} cookies `;
        // this is to count the total of cookies 
        this.totalcookies = this.totalcookies + this.cal[i]
    };
    li = document.createElement('li')
    unorderedlist.appendChild(li);
    li.textContent = `Total: ${this.totalcookies} cookies`

    /////// TABLE /////////////


    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hour.length; i++) {   // this (for-loop) from stackoverflow

        tdEl = document.createElement('td');

        tdEl.textContent = this.cal[i];

        trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalcookies;
    trEl.appendChild(tdEl);
    cookieTable.appendChild(trEl);

}

for (let i = 0; i < newArry.length; i++) {
    newArry[i].randomNum();
    newArry[i].calc();
    newArry[i].show();
}

// footer functio
console.log(newArry)
function footerRow() {
    let grandTotal = 0
    let lastRow = document.createElement('tr');
    cookieTable.appendChild(lastRow);

    let firstOne = document.createElement('th');
    lastRow.appendChild(firstOne);
    firstOne.textContent = 'Total'
    let sum1 = 0
    let td12 = null
    for (let j = 0; j < hour.length; j++) {
        sum1 = 0
        for (let i = 0; i < newArry.length; i++) {
            sum1 += newArry[i].cal[j];
            
            // console.log(totaltotal);
        }  
        grandTotal += sum1;
        td12 = document.createElement('td')
        lastRow.appendChild(td12);

        td12.textContent = sum1;     
    }

    console.log(grandTotal);

   let td13 = document.createElement('td')
    lastRow.appendChild(td13)
    td13.textContent = grandTotal;
    //     for (let i = 0 ; i< hour.length ; i++){
    //        sum1+= newArry[i].cal[i];
    //         td12= document.createElement('td')
    //         lastRow.appendChild(td12);
    //         td12.textContent = sum1;
    //         totaltotal += sum1; 
    //     }
    //     td13 = document.createElement('td')
    // lastRow.appendChild(td13)
    // td13.textContent = totaltotal;

};

footerRow();
// form 

let form = document.getElementById('newCity');
// console.log(form);

form.addEventListener('submit', submiting)

function submiting(event) {
    event.preventDefault();
    // console.log(event);

    let newBranch = event.target.locInput.value;
    let min = event.target.minInput.value;
    min = parseInt(min);
    let max = event.target.maxInput.value;
    max = parseInt(max);
    let avg = event.target.avgInput.value;
    avg = parseFloat(avg);
    let newCity = new cookiesShob(newBranch, min, max, avg);

    newCity.randomNum();
    newCity.calc();
    newCity.show();


    // console.log(max);
}

function RemoveRow(obj){         // credits to rootbear/github
    obj=document.getElementById(obj);
    rws=obj.getElementsByTagName('tr');
    obj.removeChild(rws[rws.length-1]);
}

RemoveRow();









// 2here


// const Seattle = {
//     location: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     randCust: [],
//     cal: [],
//     totalcookies: 0,

//     calc: function () {
//         for (let i = 1; i < this.randCust.length; i++) {

//             this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))
//         }
//     },
//     randomNum: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.randCust.push(randomValue(1, 14))
//         }
//     },
//     show: function () {
//         let div = document.getElementById('Seattle')

//         let branchName = document.createElement('h2')
//         div.appendChild(branchName)
//         branchName.textContent = ('Seattle')
//         let unorderedlist = document.createElement('ul')
//         div.appendChild(unorderedlist)
//         for (let i = 0; i < this.cal.length; i++) {
//             let li = document.createElement('li');
//             unorderedlist.appendChild(li);
//             li.textContent = `${hour[i]}: ${this.cal[i]} cookies `;

//             // this is to count the total of cookies 
//             this.totalcookies = this.totalcookies + this.cal[i]
//         }
//         li = document.createElement('li')
//         unorderedlist.appendChild(li);
//         li.textContent = `Total: ${this.totalcookies} cookies`
//     }
// };


// const Tokyo = {
//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     randCust: [],
//     cal: [],
//     totalcookies: 0,

//     calc: function () {
//         for (let i = 1; i < this.randCust.length; i++) {

//             this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))
//         }
//     },
//     randomNum: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.randCust.push(randomValue(1, 14))
//         }
//     },
//     show: function () {
//         let div = document.getElementById('Tokyo')

//         let branchName = document.createElement('h2')
//         div.appendChild(branchName)
//         branchName.textContent = ('Tokyo')
//         let unorderedlist = document.createElement('ul')
//         div.appendChild(unorderedlist)
//         for (let i = 0; i < this.cal.length; i++) {
//             let li = document.createElement('li');
//             unorderedlist.appendChild(li);
//             li.textContent = `${hour[i]}: ${this.cal[i]} cookies `;

//             // this is to count the total of cookies 
//             this.totalcookies = this.totalcookies + this.cal[i]
//         }
//         li = document.createElement('li')
//         unorderedlist.appendChild(li);
//         li.textContent = `Total: ${this.totalcookies} cookies`
//     }
// };

// const Dubai = {
//     location: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     randCust: [],
//     cal: [],
//     totalcookies: 0,

//     calc: function () {
//         for (let i = 1; i < this.randCust.length; i++) {

//             this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))
//         }
//     },
//     randomNum: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.randCust.push(randomValue(1, 14))
//         }
//     },
//     show: function () {
//         let div = document.getElementById('Dubai')

//         let branchName = document.createElement('h2')
//         div.appendChild(branchName)
//         branchName.textContent = ('Dubai')
//         let unorderedlist = document.createElement('ul')
//         div.appendChild(unorderedlist)
//         for (let i = 0; i < this.cal.length; i++) {
//             let li = document.createElement('li');
//             unorderedlist.appendChild(li);
//             li.textContent = `${hour[i]}: ${this.cal[i]} cookies `;

//             // this is to count the total of cookies 
//             this.totalcookies = this.totalcookies + this.cal[i]
//         }
//         li = document.createElement('li')
//         unorderedlist.appendChild(li);
//         li.textContent = `Total: ${this.totalcookies} cookies`
//     }
// };

// const Paris = {
//     location: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     randCust: [],
//     cal: [],
//     totalcookies: 0,

//     calc: function () {
//         for (let i = 1; i < this.randCust.length; i++) {

//             this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))
//         }
//     },
//     randomNum: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.randCust.push(randomValue(1, 14))
//         }
//     },
//     show: function () {
//         let div = document.getElementById('Paris')

//         let branchName = document.createElement('h2')
//         div.appendChild(branchName)
//         branchName.textContent = ('Paris')
//         let unorderedlist = document.createElement('ul')
//         div.appendChild(unorderedlist)
//         for (let i = 0; i < this.cal.length; i++) {
//             let li = document.createElement('li');
//             unorderedlist.appendChild(li);
//             li.textContent = `${hour[i]}: ${this.cal[i]} cookies `;

//             // this is to count the total of cookies 
//             this.totalcookies = this.totalcookies + this.cal[i]
//         }
//         li = document.createElement('li')
//         unorderedlist.appendChild(li);
//         li.textContent = `Total: ${this.totalcookies} cookies`
//     }
// };


// const Lima = {
//     location: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     randCust: [],
//     cal: [],
//     totalcookies: 0,

//     calc: function () {
//         for (let i = 1; i < this.randCust.length; i++) {

//             this.cal.push(Math.ceil(this.randCust[i] * this.avgCookie))
//         }
//     },
//     randomNum: function () {
//         for (let i = 0; i < hour.length; i++) {
//             this.randCust.push(randomValue(1, 14))
//         }
//     },
//     show: function () {
//         let div = document.getElementById('Lima')

//         let branchName = document.createElement('h2')
//         div.appendChild(branchName)
//         branchName.textContent = ('Lima')
//         let unorderedlist = document.createElement('ul')
//         div.appendChild(unorderedlist)
//         for (let i = 0; i < this.cal.length; i++) {
//             let li = document.createElement('li');
//             unorderedlist.appendChild(li);
//             li.textContent = `${hour[i]}: ${this.cal[i]} cookies `;

//             // this is to count the total of cookies 
//             this.totalcookies = this.totalcookies + this.cal[i]
//         }
//         li = document.createElement('li')
//         unorderedlist.appendChild(li);
//         li.textContent = `Total: ${this.totalcookies} cookies`
//     }
// };





// Seattle.randomNum();
// Seattle.calc();
// Seattle.show();

// Tokyo.randomNum();
// Tokyo.calc();
// Tokyo.show();

// Dubai.randomNum();
// Dubai.calc();
// Dubai.show();

// Paris.randomNum();
// Paris.calc();
// Paris.show();

// Lima.randomNum();
// Lima.calc();
// Lima.show();

// console.log(Seattle.cal);
// console.log(hour);
// console.log(Seattle.show);






