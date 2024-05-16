//Imediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log('DB Connected');
})();
// ; semicolon needed to show that execution has to be stopped
//basically full function in () followed by (), used to mitigate global scope pollution
(function aurcode(name){
    console.log(`DB Connected ${name}`);
})('shivam')