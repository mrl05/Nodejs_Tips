console.log('0');

setTimeout(function () {
    console.log('1');
})

new Promise(function (resolve, reject) {
    console.log('2');
    resolve(3)
}).then(function (val) {
    console.log(val);
}).then(function () {
    console.log('then...1');
})

new Promise(function (resolve, reject) {
    console.log('4');
    resolve(5)
}).then(function (val) {
    console.log(val);
}).then(function () {
    console.log('then...2');
})
console.log('6');

//Output
// 0 2 4 6 3 5 then1 then2 1