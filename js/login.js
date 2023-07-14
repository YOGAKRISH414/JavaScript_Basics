let mailid='yogakrish@gmail.com';
let password='8177888';

let gmail=function(user) {
    if ((user.includes('@'))&&(user.includes('.'))){
        return true;
    } else
        return false;
}
console.log(gmail(mailid));

let pass=function(typepass){
    if (typepass.length > 6){
    return true;
    }else{
        return false;
    }
}
console.log(pass(password));