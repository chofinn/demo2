function selectionSort(cards,index) {    
    let n = cards.length;
    let i = index;
    let max = i;
    let tc = cards;
    for(let j = i + 1; j < n; j++){
        if(tc[j] > tc[max]) {
            max=j;
        }
    }
    if (max != i) {
        let tmp = tc[i]; 
        tc[i] = tc[max];
        tc[max] = tmp;
    }
    console.log(tc)
    return tc;
}

export {selectionSort};