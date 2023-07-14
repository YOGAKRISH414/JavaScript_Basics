let convertRs=(Dollar)=>{
    if(typeof Dollar=== 'number'){
        return Dollar*80
    }else{
        throw Error('Amount Need to be in Numbers')
    }
}
try {
    console.log(convertRs('four'));    
} catch (e) {
    console.error(e);
}

console.log ('It must be show');