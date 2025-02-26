let array=[[1,2,3],
           [4,5,6],
           [7,8,9]
          ]
let s = array.length
let t=""
for(let i=s-1;i>=0;i--){
  t=t+array[i][0]+" "
}
for(let i=1;i<s;i++){
  t=t+array[0][i]+" "
}
for(let i=1;i<s;i++){
  t=t+array[i][s-1]+" "
}
for(let i=s-2;i>0;i--){
  t=t+array[s-1][i]
}
console.log(t)