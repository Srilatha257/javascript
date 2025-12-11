
let i=0;
let btn=document.getElementById('btn');
let data=setInterval(() => {
    console.log(i);
    i++;
}, 1000);
btn.addEventListener('click',()=>{
        clearInterval(data);
});