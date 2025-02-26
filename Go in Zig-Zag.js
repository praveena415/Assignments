let N = 4;
let M = 5;
let a = [[1,2,3,4,5],
         [6,7,8,9,1],
         [3,2,5,4,6],
         [7,8,9,1,2]
         ]
let p="";
for(let i = N; i>=0; i--){
 p=p+a[0][i]+" "; 
}
for(let i = 0; i<=N; i++ ){
  p=p+a[1][i]+" ";
}
for(let i = N; i>=0; i--){
  p=p+a[2][i]+" ";
}
for(let i = 0; i<=N; i++ ){
  p=p+a[N-1][i]+" ";
}
console.log(p);