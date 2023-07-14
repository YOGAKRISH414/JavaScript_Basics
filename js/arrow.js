let a=function(b){
    console.log(`Hello ${b}`)
}
a('yoga')

let a1=(b1)=> `Hello ${b1}`
console.log(a1('Gokul'))

let Todo=[{
    title: 'Yoga Job',
    isDone:true
},{
    title: 'Yoga bank',
    isDone:false 
},{
    title: 'Yoga fear',
    isDone: true
}]

// console.logfalse1].title

let Filter=Todo.filter((todo1)=>todo1.isDone === true)
console.log(Filter);