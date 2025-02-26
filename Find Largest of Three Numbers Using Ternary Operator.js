function largest(num1, num2, num3){
    let output = num1>num2 && num1>num3 ? num1 :
                num2>num1 && num2>num3 ? num2 : num3;
    console.log(output);            
}
largest(45,78,33);