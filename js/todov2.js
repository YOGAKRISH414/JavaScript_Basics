let Veglist=[]
Veglist.push('Tomato');
Veglist.push('Carrot');
Veglist.push('Radish');
Veglist.push('Beetroot');
Veglist.push('Potato');
Veglist.push('Beens');
Veglist.push('Cucumbar');
Veglist.push('Onion');

// console.log(Veglist);
let a001=function(veg1){
    veg1.forEach(function(Vegl,intg){
     console.log(`${intg+1}.${Vegl}`)
      ;
    })
}
a001(Veglist)

function fullname(stname,ndname){
    let newName=(`${stname} ${ndname}`);
    return newName;
}
console.log(fullname('Yoga', 'krishnan'));


console.log(Veglist.indexOf('Potato'));

let a002=Veglist.findIndex(function(findveg){
    return findveg=='Tomato'  
})
console.log(a002);

let a003= function(vegitables,search){
    let res = vegitables.findIndex(function(a00y3){
        return a00y3.toLowerCase() == search.toLowerCase()
Z     })
    return res;
}

console.log(a003(Veglist,'poTatO'));

console.log(Veglist.find(function(vegit){
    return vegit.toLowerCase() =='potato'
}))

let a004= function(list,search1){
    let res1 = list.find(function(vegitabl){
    
        return vegitabl.toLowerCase() == search1.toLowerCase()
    })
        return res1;
} 
console.log(a004(Veglist,'CaRrot'))

let a005=Veglist.find(function(findvegta){
    return findvegta =='Carrot'  
})
console.log(a005);

// console.log(Veglist.find(function(todo){
//     console.log(todo.toLowerCase() =='carrot');
// }))




// prime number Founding code

function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
      return false;
    }
     for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
      if (element % factor === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
   console.log([4, 6,9,11,10, 12].findIndex(isPrime)); // 2 (array[3] is 11)
  
