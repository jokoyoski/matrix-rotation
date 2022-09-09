

function param_parser(args) {
    const default_text = "file.csv"
    if (!args[3]) {
        args[3] = default_text;
    }
    return {
        input: args[2],
        output: args[3]
    }
}


module.exports = { param_parser }