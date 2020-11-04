const ctoi = (cards) => {
    let num = [];
    for(let c of cards) {
        let sum = 0;

        switch(c[0]) {
            case 'c':
                break;
            case 'd':
                sum += 13;
                break;
            case 'h':
                sum += 26;
                break;
            case 's':
                sum += 39;
                break;
            default:
                console.log("someting went wrong");
        }
        switch(c.substring(1)) {
            case 'A':
                sum += 13
                break;
            case 'K':
                sum += 12;
                break;
            case 'Q':
                sum += 11;
                break;
            case 'J':
                sum += 10;
                break;
            case '10':
                sum += 9;
                break;
            default:
                sum += c[1] - '1'
        }
        num.push(sum);
    }
    return num;
}

export {ctoi};