function isSenior(age){
    let output = age<=0? "Invali Age":
                        age>=60? "Eligible for Senior Discount":"Not Eligible for Senior Discount";
   console.log(output); 
}
 isSenior(65);
 isSenior(-1);