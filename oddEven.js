// is even or not

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumber = 123;
const isMyNumberEven = isEven(myNumber);
console.log('Is my number even: ', isMyNumberEven);

const herNumber = 198;
const isHerNumberEven = isEven(herNumber);
console.log('Is her number even: ', isHerNumberEven);

// is odd or not

function isOdd(number){
    if(number % 2 != 0){
        return true;
    }
    return false;
}
const isMyNumberOdd = isOdd(myNumber);
console.log('Is my number Odd: ', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('Is her number Odd: ', isHerNumberOdd);