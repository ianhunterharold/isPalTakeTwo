var isPalindrome = function(s) {
    
  
    let rmWhtSpce = s.replace(/\s+/g, '');
    let removeSymbols = rmWhtSpce.replace(/\W/g, '');

    let toLowerCase = removeSymbols.toLowerCase();
    
    let sToArr = toLowerCase.split('');
    console.log(sToArr);
    
    for (let i =0, j = sToArr.length - 1; j >= sToArr.length/2, i < sToArr.length/2; j--,i++){
        if (sToArr[i] !== sToArr[j]){
            return false;
        }
        
    }
    return true;
};
const pal = "ab@a";
isPalindrome(pal);

