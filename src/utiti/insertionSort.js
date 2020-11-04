function insertionSort(cards,index) {
    let i = index
    let tmp = cards[i];
    let j = i - 1; 
    let tc = cards;
    while ((j > -1) && (tmp > cards[j])) {
        tc[j+1] = tc[j];
        j--;
    }
    tc[j+1] = tmp;
    return tc;
}

export {insertionSort};