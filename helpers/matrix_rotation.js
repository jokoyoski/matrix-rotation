function matrix_rotation(row_index, column_index, mat) {
    if (row_index !== column_index) {
        return [[]]
    }
    let row = 0, col = 0;
    let prev, curr;
    while (row < row_index && col < column_index) {

        if (row + 1 == row_index || col + 1 == column_index)

            break;


        prev = mat[row + 1][col];

        for (let i = col; i < column_index; i++) {

            curr = mat[row][i];

            mat[row][i] = prev;

            prev = curr;

        }

        row++;

        for (let i = row; i < row_index; i++) {

            curr = mat[i][column_index - 1];

            mat[i][column_index - 1] = prev;

            prev = curr;

        }

        column_index--;


        if (row < row_index) {

            for (let i = column_index - 1; i >= col; i--) {

                curr = mat[row_index - 1][i];

                mat[row_index - 1][i] = prev;

                prev = curr;

            }

        }

        row_index--;

        if (col < column_index) {

            for (let i = row_index - 1; i >= row; i--) {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;

    }
    return mat;

}


module.exports = { matrix_rotation }
