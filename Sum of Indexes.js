N = 3
M = 2
arr = [[1, 2],
       [3, 4], 
       [5, 6]]
for(let i = 0; i<N; i++){
  let res = "";
  for(let j = 0; j<M;j++){
   res += i+j+" ";
  }
  console.log(res);
}
