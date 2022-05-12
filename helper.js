
function mean(n){
    let total = 0
    for (let a of n){
        total += a
    }
    return total / (n.length)
}


function median(n){
    let n_sorted = n.sort((a,b) =>  a-b)
    let middle = 0
    let total = 0
    if (n_sorted.length % 2 === 0){
        middle = n_sorted.length/2
        total += (n_sorted[middle-1] + n_sorted[middle])/2
        return total
    } else{
        middle = (n_sorted.length-1)/2
        total = n_sorted[middle]
        return total
    }
}


function mode(lst){
    let obj = new Map();
    for (let a = 0; a < lst.length; a ++){
        if (obj[lst[a]] != null){
            obj[lst[a]] += 1
        } else{
            obj[lst[a]] = 1
        }
    }
    let max = 0
    let key = 0
    for (let val = 0; val < Object.keys(obj).length+1; val++){
        if (obj[val] > max){
            max = obj[val]
            key = val
        }
    }
    return key
}


console.log(median([1,2,3,4,5]))
module.exports = {mean, median, mode}



