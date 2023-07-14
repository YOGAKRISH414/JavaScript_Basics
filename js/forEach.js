// let nams =['YOGA','GOKUL','RAJA','PRINCE', 'GOWTHAM','vijay','jeeva','dhinesh'];
// nams.forEach(function (nam,index,hi){
//     console.log(`${index+1}.${nam} `);
// });

// let days=['Mon',"Tue",'Wed','Thr','Fri','Sat','Sun'];
// days.forEach(function(day,Snum){
//     console.log(`${1+Snum}.${day}`);
// })

// for (i=0; i<nams.length; i=i+1){
    
//     console.log(nams[i]);
// }

// for (i=0; i<nams.length; i++){
//     console.log(`${[i+1]}.${nams[i]}`);
// }

// let frds=[];
// frds.push('Go to Job');
// frds.push('Get pay');
// frds.push('rent House');
// frds.push('save money');
// frds.push('Get rich');
// frds.unshift('Seek job');

// frds.forEach(function(work,nos){
//   console.log(`${nos+1}.${work}`);
// })

// for(i=0; i<frds.length;i++){
//     console.log(`${i+1}.${frds[i]}`);
//  }
const X=[];
const Y=[];
const W=[];
const H=[];

const Location=[
    {x:1, y:5, w:9, h:13},
    {x:2, y:6, w:10, h:14},
    {x:3, y:7, w:11, h:15},
    {x:4, y:8, w:12, h:20}
];

Location.forEach((state)=>{
    let cord={    
     loc:[],
    }
    // for(i=0; i<state.length; i++){
    //     let posx=state[i].x;
    //    let posy=state[i].y;
    //    let posw=state[i].w;
    //    let posh=state[i].h;
    //    cord.loc.push({X:posx,Y:posy})
    // }
    X[state.x]=cord;
    Y[state.y]=cord;
    W[state.w]=cord;
    H[state.h]=cord;
    // console.log(cord)
})

console.log(H)


let nmf=[];
for(i=0;i<10;i++){
    var nm=i;
    nmf.push(nm)
}
console.log(nmf)