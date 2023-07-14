// document.title='Yconfuse'

// let myTag=document.querySelectorAll('.class1');
// console.log(myTag[0]);

// let newPtag=document.createElement('p');
// newPtag.textContent= 'Content Feed'

// document.querySelector('body').appendChild(newPtag)

// let myTag1= document.querySelectorAll('p');
// myTag1.forEach((cha) => {
//     return cha.textContent='Change'
// });

document.querySelector('button').addEventListener('click',(ev)=>{
    let tag1=document.querySelector('button');
    tag1.textContent='*v* Fool *v*'
})

// document.querySelector('#searchid').addEventListener('input',(event)=>{
//     console.log(event.target.value);})


// function search(){
//         document.querySelector('input').addEventListener('click',(e)=>{
//         console.log(e.target.value);        
//     })}

function search(){
    let myvalue=document.getElementById('SearchId').value
    console.log(myvalue)
}

function color(){
    let clr=document.querySelector('body')
    clr.style.background = 'lightblue';
    
}
function chgclr(){
    let clr=document.querySelector('body')
    clr.style.background = 'white';
}

let tagdiv1 = document.createElement('p')
    tagdiv1.textContent = 'Hello World';

document.querySelector('#div1').appendChild(tagdiv1);




