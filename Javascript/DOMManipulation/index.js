// //grt elementByID
// const sampleID=document.getElementById('sample')
// console.log(sampleID);

// let sampleDiv=document.querySelector('.sample')
// let myValue=0;
// const btn=document.createElement('button');
// btn.innerText="incrementCount";
// sampleDiv.addEventListener('click',function () {
//     // alert("heyy")
//     // sampleDiv.style.color ="red";
//     // sampleDiv.innerText="Vaibhav Kamble";
//     sampleDiv.style.height="200px";
//     sampleDiv.style.width="200px";
//     sampleDiv.innerHTML=`<div id="redbox" style='background-color: red;height: 50px;width: 50px;'>${myValue}</div>
//     <button id="plus">++</button>
//     `
//     const increment=document.getElementById('plus');
//     increment.addEventListener('click',function () {
//         myValue++;
//     });

//     //newbtn created

//     document.body.appendChild(btn);
//     btn.addEventListener('click',function(){
//         let redbox=document.getElementById('redbox');
//         // console.log(redbox);
//         redbox.innerText= parseInt(redbox.innerText) + 1;
    // })

// })

//hover events
// mouseover
// mouseenter and mouseout
// const hoverme=document.querySelector('.hoverme')
// hoverme.addEventListener('mouseenter',function(){
//     hoverme.classList.add('hoverEffect')
    
// })
// hoverme.addEventListener('mouseout',function(){
//     hoverme.classList.remove('hoverEffect')

// })

// let scoller=document.querySelector('.scroller');;
// scoller.addEventListener('scroll',function(){
//     console.log("i am scrolling");
// })


//change event
// let subjects=document.getElementById('subjects')
// subjects.addEventListener("change",function(events){
//     console.log(events.target.name,":",events.target.value);

// })

// input
// let input= document.querySelectorAll('input');
// input.addEventListener("change",function (params) {
//     console.log(params.target.name," : ",params.target.value);
// })

// let java=document.getElementById('java')
// java.addEventListener("change",function(event){
//     console.log(event.target.name," : ",event.target.value);
// })

// let keys=document.getElementById('keys');
// keys.addEventListener("keypress",function(event){
//     // console.log(event.key);
//     if (event.key == "a"){
//         console.log("go to left");
//     }
// })



//form events
// const form=document.querySelector('form')
// form.addEventListener('submit',function(event){
//     event.preventDefault();
// })
let ul=document.querySelector('ul')
// let redbox=document.querySelector('.red');
// let greenbox=document.querySelector('.green');
let addbtn=document.querySelector('button');
addbtn.addEventListener('click',function(){
    let input=document.querySelector('input');
    let li=document.createElement('li');
    li.innerText= input.value;
    ul.appendChild(li)
})