//if else
// 6 am to 12 pm --Good Morning
// 12 pm to 6pm  --Good AfterNoon
//else --Good Evening
let hour= 10;
hour =23    // new value assigned
if(hour>=6 && hour<12){
    console.log('Good Morning');
}
else if(hour>=12 && hour<18){
    console.log('Good AfterNoon');
}
else{
    console.log('Good Evening');
}
