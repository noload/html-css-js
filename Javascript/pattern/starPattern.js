function starPattern(n) {
    var ans="";
    for(var i=0;i<n;i++){
        ans+="**";
    }
    console.log(ans);
    // return ans;
}

// let ans=starPattern(3);
// console.log(ans);

function priramid(n){
    for(let i=0;i<n;i++){
        starPattern(i);
    }
}


priramid(5);