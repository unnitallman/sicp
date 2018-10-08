function fib(n){
  if(n==1){
    return 0;
  }

  if(n==2){
    return 1;
  }

  if(n > 1){
    return(fib(n-1) + fib(n-2));
  }
}

function _tail_fib(i, j, n){
  if(n>0){
    return(_tail_fib(j, i+j, n-1));
  }else{
    return i;
  }
}

function tail_fib(n){
  return _tail_fib(0,1, n);
}

//-------------------------------------------
function _print_fib(i, j, n){
  if(n>0){
    console.log(i);
    return(_print_fib(j, i+j, n-1));
  }else{
    return '';
  }
}

function print_fib(n){
  return _print_fib(0, 1, n);
}


//console.log(fib(10));
console.log(tail_fib(10));
//console.log(print_fib(10));
