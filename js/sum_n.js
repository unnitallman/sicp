function sum_n(n){
  if(n == 0){
    return 0;
  }else{
    return(n + sum_n(n-1));
  }
}

function _sum_n_tail(n, sum){
  if(n==0){
    return sum;
  }else{
    return(_sum_n_tail(n-1, n + sum));
  }
}

function sum_n_tail(n){
  return _sum_n_tail(n, 0);
}

console.log(sum_n(10));
console.log(sum_n_tail(10, 0));