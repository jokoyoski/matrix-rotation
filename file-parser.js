var fs = require('fs');
var parser = require('csv-parse');
const csvStringify = require('csv-stringify');
const matrix_rotate_helper = require("./helpers/matrix_rotation");
const two_Dimensional_helper = require("./helpers/convert_2d");
const is_numeric_check_helper = require("./helpers/numeric_check");
const convert_2d_to_1d_helper = require("./helpers/convert_2d_to_1d");
const param_parser_helper = require("./helpers/param_parser");
const json_converter_helper = require("./helpers/json_converter");

let args = process.argv;

const param_values = param_parser_helper.param_parser(args)

let containers = [];

parser = parser.parse({ columns: true }, function (err, records) {

    records.forEach((item) => {
        let is_valid = false;
        let result = [];
        const json_value = json_converter_helper.json_converter(item.json);

        let square_root = Math.sqrt(json_value.result.length);

        if (is_numeric_check_helper.is_numeric(square_root) && square_root > 0 && json_value.is_valid) {  //if the square root is a whole number then it is a perfect matrix
            result = convert_2d_to_1d_helper.convert2dtoSingleArray(matrix_rotate_helper.matrix_rotation(square_root, square_root, two_Dimensional_helper.twoDimensional(json_value.result, square_root)))
           is_valid = true;
        } else {
            result = []
        }
        containers.push({
            "id": item.id,
            "json": result,
            "is_valid": is_valid.toString()
        })
    })
    csvStringify.stringify(containers, {
        header: true
    }, function (err, output) {
        fs.writeFile(param_values.output, output, function (err, result) {
            if (err) console.log('error', err);
        });
    })
});
fs.createReadStream(__dirname + param_values.input).pipe(parser);





