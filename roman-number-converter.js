const romanNumberDictionary = {
    '1': "I",
    '5': "V",
    '10': "X",
    "50": "L",
    "100": "C",
    '500': "D",
    '1000': "M",
    "5000": "E",
    "10000": "H",
    '50000': "P",
    "100000": "A",
    '500000': "B",
    '1000000': "R",
    "5000000": "J",
    "10000000": "Q",
    
};

// console.log(obj['name']);
// // const b = 124126;
// console.log(
//     romanNumberDictionary['100000'] +
//     romanNumberDictionary['10000'] +
//     romanNumberDictionary['10000'] +
//     romanNumberDictionary['1000'] +
//     romanNumberDictionary['5000'] +
//     romanNumberDictionary['100'] +
//     romanNumberDictionary['10'] +
//     romanNumberDictionary['10'] +
//     romanNumberDictionary['5'] +
//     romanNumberDictionary['1']
// )

// //16
// console.log(
//     romanNumberDictionary["10"] +
//     romanNumberDictionary["5"] +
//     romanNumberDictionary["1"]
// );

// // 114500;

// console.log(
//     romanNumberDictionary["100000"] +
//     romanNumberDictionary["10000"] +
//     romanNumberDictionary["1000"] +
//     romanNumberDictionary["5000"] +
//     romanNumberDictionary["500"]
// );
// // 555

// console.log(
//     romanNumberDictionary["500"] +
//     romanNumberDictionary["50"] +
//     romanNumberDictionary["5"]
// );
// // 1808
// console.log(
//     romanNumberDictionary["1000"] +
//     romanNumberDictionary["500"] +
//     romanNumberDictionary["100"] +
//     romanNumberDictionary["100"] +
//     romanNumberDictionary["100"] +
//     romanNumberDictionary["5"] +
//     romanNumberDictionary["1"] +
//     romanNumberDictionary["1"] +
//     romanNumberDictionary["1"]
// );

// // 4602

// // 999

// const arr = [1, 2, 3, 4, 7, [1, 23, 54, 9, 59, [200, 903, [, [, [, [, [3]]]]]]], 8, 9, 10, '132423423432432411', "d,s,a,s,f,t,y,u,,d,,e,e,,e,e,e"];
// console.log(obj[1]);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr[10]);

const romanOrders = [10_000_000,1_000_000, 10_000, 10_000, 1000, 100, 10, 1]

function convertNumberToRoman(num) {
    let number = num;
    return romanOrders.reduce((acc, value, index) => {        
        const ostatok = Math.floor(number/value);
        if(ostatok === 9) {
            acc += romanNumberDictionary[value]+romanNumberDictionary[10*value]
            number -= 9*value
        }
        if(ostatok === 8) {
            acc += romanNumberDictionary[5*value]+romanNumberDictionary[value]+romanNumberDictionary[value]+romanNumberDictionary[value]
            number -= 8*value
        }
        if(ostatok === 7) {
            acc += romanNumberDictionary[5*value]+romanNumberDictionary[value]+romanNumberDictionary[value];
            number -= 7*value
        }
        if(ostatok === 6) {
            acc += romanNumberDictionary[5*value]+romanNumberDictionary[value]
            number -= 6*value
        }
        if(ostatok === 5) {
            acc += romanNumberDictionary[5*value];
            number -= 5*value
        }
        
        if(ostatok === 4) {
            acc += romanNumberDictionary[value] +romanNumberDictionary[5*value];
            number -= 4*value
        }
        if(ostatok === 3) {
            acc += romanNumberDictionary[value]+romanNumberDictionary[value]+romanNumberDictionary[value];
            number -= 3*value;
        }
        if(ostatok === 2) {
            acc += romanNumberDictionary[value]+romanNumberDictionary[value];
            number -= 2*value
        }
        if(ostatok === 1){
            acc += romanNumberDictionary[value];
            number -= value
        };
        return acc
    
    }, "")
}


console.log(convertNumberToRoman(20))


console.log(process.args);

// console.log(convertNumberToRoman(10))
// console.log(convertNumber656ToRoma
// n(100))
// console.log(convertNumberToRoman(1000))
// console.log(convertNumberToRoman(10000))
// console.log(convertNumberToRoman(100000))
