function is_numeric(o) {
    if(isNaN(o)){
       
        return false
    }
    return (o - Math.floor(o)) === 0;
}


module.exports = { is_numeric }