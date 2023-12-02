function sort(str){
    let arr=str.split("");
    arr.sort();
    let sortedArr= arr.join();
    return sortedArr;
}

function isAnagram(str1,str2) {
    if (sort(str1) === sort(str2)) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("madam","madma"));