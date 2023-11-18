// getElementbyId :element directly.
// getElementbyClassName
// const getdivs =document.getElementsByClassName('sample');
// console.log(getdivs);  htmlCollections []

//getElementsbyTagName;
// const getdivs =document.getElementsByTagName('div');
// console.log(getdivs);  HTMLCollections []


//querySelectors and querSelectorALL.

// let divwithId =document.querySelector('#sample');
// console.log(divwithId)
// let divwithClass =document.querySelector('.sample');
// console.log(divwithClass);

// let Alldivs =document.querySelectorAll('div');
// console.log(Alldivs);  NodeLists[]

// differnce btw NodeLists and HTMLCollections ? ********

// Events : onclick, onChange, onLoad, scroll, keypress, submit ;

//addEventListener('eventtype',function)

// Click event
let mydiv = document.querySelector(".sample");
let innerDivValue = 0;
let btn1=document.querySelector('button')
mydiv.addEventListener('click', function () {
    // alert("your div has been clicked")
    // mydiv.style.color="red"
    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    // on click sample1 text should be replaced with herovired
    //    mydiv.innerText ="Herovired"
    mydiv.innerHTML = `<div style='background-color: red;height: 50px;width: 50px;'>
  ${innerDivValue}
  </div>
  
  
  <button id="btn">Increment</button>
  `
  const btn =document.getElementById('btn');
  console.log(btn);
  btn.addEventListener('click',function(){
    // alert("btn is clicked")
    //update the counter logic
    innerDivValue+=1
  })

 
}) 


  let hover=document.querySelector(".hoverme")
  hover.addEventListener('mouseenter',function(){
    hover.style.backgroundColor="pink"
    hover.innerHTML="heloo"
  })

  hover.addEventListener('mouseout',function(){
    hover.style.backgroundColor="green"
  })


//   let Vehicle=document.querySelector('.vehicle')
//   Vehicle.addEventListener('change',function(event){
//     console.log(event.target.name,":",event.target.value);
    
//   })

//   let subjects=document.querySelectorAll("input")
//   subjects.addEventListener("change",function(event){
//     console.log(event.target.name);
//   })

let btnA=document.querySelector("#btnA")
btnA.addEventListener("keypress",function(event){
    // console.log(event.key);
    if (event.key =="a"){
        console.log("person should go left");
    }
    if (event.key=="b") {
        console.log("person should go right");
    }
})

let form=document.querySelector("form")
form.addEventListener('submit',function(event) {
    event.preventDefault();
})