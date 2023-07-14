console.log('hi yoga');

let obj={
    Name:'Yoga',
    DoB:function(date,month,year){
        console.log(`${date}-${month}-${year}`);
        console.log(`Your age is ${2022-year}`);
    },
    
    Fathersname:'KVK',
    Mothersname:'Geetha',
    Quali:'bachelore of engineering',
    speciality:'mechanical',

    changename: function(newname){
        this.Name=newname;
    }
}

obj.DoB(1,12,1997);
obj.changename('Gokul');
console.log(obj.Name);
console.log(obj.Quali);