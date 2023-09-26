let a;
let time;
let date;
let hour;
let minutes;
let seconds;

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

setInterval(()=>{
    a = new Date();
    date = a.toLocaleDateString(undefined,options);
    hour = String(a.getHours()).padStart(2,'0');
    minutes = String(a.getMinutes()).padStart(2,'0');
    seconds = String(a.getSeconds()).padStart(2,'0');
    time = hour+":"+minutes+":"+seconds;
    document.getElementById('time').innerHTML = time +"<br>"+ date;
},1000)



