

function json_converter(value) {
    let is_valid = false;
    let result = 0;
   
    try {
        data = JSON.parse(value);
        is_valid = true;
    }
    catch (err) {
        console.log(err)
       
    }
    return {
        result: data,
        is_valid: is_valid
    }
}


module.exports = { json_converter }