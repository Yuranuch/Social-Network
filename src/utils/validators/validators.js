export const requiredField = (value) => {
    if(value) {
        return undefined
    }else {
        return "Field is required"
    }
}


export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length> maxLength) {
        return `Max Length is ${maxLength} symbol`
    }else {
        return undefined
    }
}