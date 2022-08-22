function test() {
    let a;
    console.log(a);
    console.log(foo());
     
    a = 1;
    function foo() {
       return 2;
    }
  }
  
  test();

  //Answer undefind 2
  /**
   * the first CL,  (a) has not been assinged a value until the inner scope which is returned in line 8
   */
console.log('---------------------------');

let a = 1; 
  
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);

console.log(result);

console.log('-------------------------------');
let fullname = 'John Doe';
const obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

const test2 = obj.prop.getFullname;

console.log(test2());
// it chrashed, I rename it test2

console.log('----------------------');

let x = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(x);  

/**
 * I changed a to x 
 * than it gave me 1 
 */