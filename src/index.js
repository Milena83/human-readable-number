module.exports = function toReadable(number) {
    let edinic = number % 10;
    let desyt = Math.floor((number % 100) / 10);
    let sotni = Math.floor((number % 1000) / 100);
    let total = [];

    edinic = fromNumbertoString(edinic);
    desyt = fromNumbertoDesyt(desyt);
    sotni = fromNumbertoString(sotni);

    if (number === 0) {
        return 'zero'
    }

    if (sotni) {
        total.push(sotni);
        total.push('hundred')
    }
    if (desyt === 1) {
        switch (edinic) {
            case 0:
                total.push('ten');
                break;
            case 'one':
                total.push('eleven');
                break;
            case 'two':
                total.push('twelve');
                break;
            case 'three':
                total.push('thirteen');
                break;
            case 'four':
                total.push('fourteen');
                break;
            case 'five':
                total.push('fifteen');
                break;
            case 'six':
                total.push('sixteen');
                break;
            case 'seven':
                total.push('seventeen');
                break;
            case 'eight':
                total.push('eighteen');
                break;
            case 'nine':
                total.push('nineteen');
                break;
        }


    }
    if (desyt !== 1 && desyt !== 0) {
        total.push(desyt);
    }
    if (desyt !== 1 && edinic) {
        total.push(edinic);
    }
    return total.join(' ')
}

function fromNumbertoString(num) {
    switch (num) {
        case 1:
            num = 'one'
            break;
        case 2:
            num = 'two'
            break;
        case 3:
            num = 'three'
            break;
        case 4:
            num = 'four'
            break;
        case 5:
            num = 'five'
            break;
        case 6:
            num = 'six'
            break;
        case 7:
            num = 'seven'
            break;
        case 8:
            num = 'eight'
            break;
        case 9:
            num = 'nine'
            break;
    }
    return num;
}

function fromNumbertoDesyt(num) {
    switch (num) {
        case 2:
            num = 'twenty'
            break;
        case 3:
            num = 'thirty'
            break;
        case 4:
            num = 'forty'
            break;
        case 5:
            num = 'fifty'
            break;
        case 6:
            num = 'sixty'
            break;
        case 7:
            num = 'seventy'
            break;
        case 8:
            num = 'eighty'
            break;
        case 9:
            num = 'ninety'
            break;
    }
    return num;
}