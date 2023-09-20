function menorNt(arr){
    var nt = 10

    for(let key in Object.keys(arr)){
        if(arr[key] < nt)
            nt = arr[key]
    }

    return `A menor nota é ${nt}!`
}

function maiorNt(arr){
    var nt = 0

    for(let key in Object.keys(arr)){
        if(arr[key] > nt)
            nt = arr[key]
    }

    return `A maior nota é ${nt}!`
}

function mediaNt(arr){
    var nt = 0

    for(let key in Object.keys(arr)){
        nt += arr[key]
    }

    return `A menor nota é ${(nt/arr.length).toFixed(2)}!`
}

export{ menorNt, maiorNt, mediaNt }