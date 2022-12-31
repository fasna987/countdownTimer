/*
    1.How to find current date time year in javascript?
    console.log(new Date());
    Output => Sun Nov 13 2022 21:51:47 GMT+0530 (India Standard Time)

    2.How to find current year using javascript?
    const currentYear = new Date().getFullYear();
    console.log(currentYear);
    Output =>2022

//3.How to find next current year using javascript?
// const currentYear = new Date().getFullYear();
// console.log(currentYear+1);
// Output =>2023

//4.How to find next new year using javaScript?
// const currentYear = new Date().getFullYear();
// const newYEar = new Date(`January 1 ${currentYear+1} 00:00:00`);
// console.log(newYEar); 
//Output =>Sun Jan 01 2023 00:00:00 GMT+0530 (India Standard Time)

//5.How to find current date using javascript?
// const currentDate = new Date();
// console.log(currentDate);
//Output =>Sun Nov 13 2022 22:38:42 GMT+0530 (India Standard Time)

//6.How to find difference between current date and next newyear?
// const currentYear = new Date().getFullYear();
// const newYEar = new Date(`January 1 ${currentYear+1} 00:00:00`);
// console.log(newYEar); 

// const currentDate = new Date();
// console.log(currentDate);

     const differ = newYEar-currentDate;
     console.log(dif);
     Output =>Sun Jan 01 2023 00:00:00 GMT+0530 (India Standard Time)
             Sun Nov 13 2022 22:38:42 GMT+0530 (India Standard Time)
             4151790402

    1000ms = 1s
    60s = 1m
    60m =1h
    24hrs = 1day
    milisecond to day 
    1 milisecond = 1.157 x 10`8 day

    7.How to find number of days ?


    const currentYear = new Date().getFullYear();
    const newYEar = new Date(`January 1 ${currentYear+1} 00:00:00`);
    console.log(newYEar); 

    const currentDate = new Date();
    console.log(currentDate);

    const dif = newYEar-currentDate;
    console.log(dif);

    const days = Math.floor(dif/1000/60/60/24); 
    //Math.floor is a function in javaScript.It take only whole number and it avoid decimal value and it print whole number only
    console.log(days);
    Output =>48

    const currentYear = new Date().getFullYear();
    const newYEar = new Date(`January 1 ${currentYear+1} 00:00:00`);
    console.log(newYEar); 

    const currentDate = new Date();
    console.log(currentDate);

const dif = newYEar-currentDate;
console.log(dif);

const days = Math.floor(dif/1000/60/60/24); 
//Math.floor is a function in javaScript.It take only whole number and it avoid decimal value and it print whole number only
//console.log(days);

//How to find current balance hours between today to tommrow?
const hr = Math.floor((dif/1000/60/60)%24); 
//console.log(hr);

//How to find current balance minites between today to tommrow?
const min = Math.floor((dif/1000/60)%60); 
// console.log(min);

const s = Math.floor((dif/1000)%60); 
console.log(s);
*/

const days=document.querySelector("#days")
const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")

function UpdateTime(){

const currentYear=new Date().getFullYear();

const newYEar=new Date(`January 1 ${currentYear+1} 00:00:00`);

const currentDate= new Date();

const dif=newYEar-currentDate;

const d=Math.floor(dif/1000/60/60/24); 

const h=Math.floor((dif/1000/60/60)%24); 

const m=Math.floor((dif/1000/60)%60); 

const s=Math.floor((dif/1000)%60); 

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

//console.log(days+" "+hr+" "+min+" "+s);
}

UpdateTime();

//setInterval- its a method its auto refesh or update the time
//method name(first parameter,how much time you want to refresh or update your program);
setInterval(UpdateTime,1000);
