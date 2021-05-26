let a = 6;
let b = 8;
let c = 10;

if(a > b && a > c) {
    console.log(`A letra A é maior que B e C. ${a}, ${b} e ${c}`)
} else if(b > a && b > c) {
    console.log(`A letra B é maior que A e C. ${a}, ${b} e ${c}`)
} else if(c > a && c > b) {
    console.log(`A letra C é maior que A e B. A:${a} B:${b} C:${c}`)
}