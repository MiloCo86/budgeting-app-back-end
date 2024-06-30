//function that returns true if the object has the correct key names
const checkTransantionKeys = (obj) =>{
    const correctKeyNames = ['amount','date','description','type'].join('')
    const objKeyNames = Object.keys(obj).sort().join('')
    

    return correctKeyNames === objKeyNames
    
}

//function that returns true if the object has the correct values
const checkTransantionValues = (obj) => {
    return checkCorrectAmountValue(obj.amount)
}

//Function that returns true if the date has the correct format
const checkCorrectDateFormat = (stringDate) =>{
    const regDate = new RegExp('(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}')
    return regDate.test(stringDate)
}

//Function that returns true if the amount has the correct format
const checkCorrectAmountValue = (amount) =>{
    return typeof amount == "number"
}



const checkInput = (req,res,next) =>{
    if (checkTransantionKeys(req.body)) {
        if(checkTransantionValues((req.body))){
            next()
        }else{
            res.json({ error: "invalid Values"})
        }

    }else{
        res.json({ error: "invalid key Names"})
    }
}

module.exports = {checkInput}