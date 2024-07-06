/*
48. Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

*/

/*

Ваша задача - повернуть изображение, представленное в виде 2D матрицы, на 90 градусов по часовой стрелке. Вы должны повернуть изображение на месте, что означает, что вы должны изменить входную 2D матрицу напрямую. НЕ выделяйте другую 2D матрицу и не делайте поворот.

Вот шаги, которые мы будем следовать:

1. Транспонируйте матрицу (поменяйте местами строки и столбцы).
2. Переверните каждую строку матрицы (поменяйте местами элементы в начале и конце строки).

Your task is to rotate an image represented as a 2D matrix by 90 degrees clockwise. You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Here are the steps we will follow:

1. Transpose the matrix (swap the row and column indices of each element).
2. Reverse each row of the matrix (swap the start and end elements in each row).

*/


function rotate(matrix) {
    let n = matrix.length;

    // Транспонируем матрицу
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    // Переворачиваем каждую строку
    // Reverse each row
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = temp;
        }
    }
}

