var countGoodtriplets = function (arr , a ,b,c){
    let count = 0
    for(let i=0; i<arr.length-2;i++ ){
        for(let j=i+1; j<arr.length-1; j++){
            for(let k=j+1; k<arr.length; k++){
                 if(Math.abs(arr[i]-arr[j]) <=a && 
                 Math.abs(arr[j]-arr[k]) <=b && 
                 Math.abs(arr[i]-arr[k]) <=c ){
                    count++
                 }

            }
        }
    }
    return count
}
console.log(countGoodtriplets([3,0,1,1,9,7] , 7 ,2 ,3));