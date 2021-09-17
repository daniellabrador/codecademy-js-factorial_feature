const Calculate = {
  factorial(num){
    let result = 1;

    if (typeof num !== 'number'){
      throw new TypeError;
    }

    if (num%1 !== 0){
      throw new Error("MathError: Can't compute factorial of floating numbers");
    }

    let integerSign = num/Math.abs(num);
    num = Math.abs(num); 

    for (let i=1; i<num+1; ++i)
      result *= i;
    
    return result*integerSign;
  }
}

module.exports = Calculate;


