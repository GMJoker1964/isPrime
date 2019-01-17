function isPrime(num) {

    if (num < 2) return false;
    for(var n = 2; n < Math.sqrt(num); n++){
        if(num%n == 0){
            return false;
        }

    } return true;

}
var num = parseInt(prompt("Input the amount of prime number: "));
var count = 0;
var n = 2;
while (count < num){
    if (isPrime(n)){
        document.write(n + ' ');
        count++;
    } n++;
}