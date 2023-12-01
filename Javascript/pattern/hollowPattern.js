function printSingleFullRow(n){
    let str="";
    for (let i = 0; i < n ;i++){
        str+="*";
    }
    console.log(str);
}

function printPartialRow(n) {
    str="*";
    for(let i=0;i<n-2;i++){
        str+=" ";
    }
    
    str+="*";
    console.log(str);
}


function  hollowPattern(n) {
   
      printSingleFullRow(n);
      for(let j=0;j<n-2;j++){
        printPartialRow(n);
      }
      printSingleFullRow(n);
    
}

// printSingleFullRow(5);
// printPartialRow(5);

hollowPattern(5);