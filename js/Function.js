function hi(){
    console.log('Hello');
}
hi();

function peru(name){
    console.log(name);
}
peru('Yoga');

function fullname(stname,ndname){
    console.log(`${stname} ${ndname}`);
}
fullname('Yoga', 'krishnan');

function add2num(num1,num2){
    console.log(num1+num2);
}
add2num(2,98);

function add3num(newnum1,newnum2,newnum3){
    let addthreenum=(newnum1+newnum2+newnum3);
    return addthreenum;
}
console.log(add3num(2,2,2));

let saybye=function(name){
    console.log(`Bye ${name}`);
}
saybye("yoga");

hi()
peru('Gokul')
fullname('Y',"K")
add2num(45,45)
console.log(add3num(100,100,100));
saybye('Gokul')
