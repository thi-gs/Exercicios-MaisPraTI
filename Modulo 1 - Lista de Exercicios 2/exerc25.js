/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente.
*/

let M = [
    [1.1, -2.2, 3.3, -4.4, 5.5, -6.6, 7.7, -8.8, 9.9, -10.1, 11.2, -12.3, 13.4, -14.5, 15.6, -16.7, 17.8, -18.9, 19.0, -20.1],
    [-1.1, 2.2, -3.3, 4.4, -5.5, 6.6, -7.7, 8.8, -9.9, 10.1, -11.2, 12.3, -13.4, 14.5, -15.6, 16.7, -17.8, 18.9, -19.0, 20.1],
    [1.11, -2.22, 3.33, -4.44, 5.55, -6.66, 7.77, -8.88, 9.99, -10.11, 11.22, -12.33, 13.44, -14.55, 15.66, -16.77, 17.88, -18.99, 19.01, -20.12],
    [-1.11, 2.22, -3.33, 4.44, -5.55, 6.66, -7.77, 8.88, -9.99, 10.11, -11.22, 12.33, -13.44, 14.55, -15.66, 16.77, -17.88, 18.99, -19.01, 20.12],
    [1.12, -2.23, 3.34, -4.45, 5.56, -6.67, 7.78, -8.89, 9.90, -10.13, 11.24, -12.35, 13.46, -14.57, 15.68, -16.79, 17.80, -18.91, 19.02, -20.13],
    [-1.12, 2.23, -3.34, 4.45, -5.56, 6.67, -7.78, 8.89, -9.90, 10.13, -11.24, 12.35, -13.46, 14.57, -15.68, 16.79, -17.80, 18.91, -19.02, 20.13],
    [1.13, -2.24, 3.35, -4.46, 5.57, -6.68, 7.79, -8.90, 9.91, -10.14, 11.25, -12.36, 13.47, -14.58, 15.69, -16.80, 17.81, -18.92, 19.03, -20.14],
    [-1.13, 2.24, -3.35, 4.46, -5.57, 6.68, -7.79, 8.90, -9.91, 10.14, -11.25, 12.36, -13.47, 14.58, -15.69, 16.80, -17.81, 18.92, -19.03, 20.14],
    [1.14, -2.25, 3.36, -4.47, 5.58, -6.69, 7.80, -8.91, 9.92, -10.15, 11.26, -12.37, 13.48, -14.59, 15.70, -16.81, 17.82, -18.93, 19.04, -20.15],
    [-1.14, 2.25, -3.36, 4.47, -5.58, 6.69, -7.80, 8.91, -9.92, 10.15, -11.26, 12.37, -13.48, 14.59, -15.70, 16.81, -17.82, 18.93, -19.04, 20.15],
    [1.15, -2.26, 3.37, -4.48, 5.59, -6.70, 7.81, -8.92, 9.93, -10.16, 11.27, -12.38, 13.49, -14.60, 15.71, -16.82, 17.83, -18.94, 19.05, -20.16],
    [-1.15, 2.26, -3.37, 4.48, -5.59, 6.70, -7.81, 8.92, -9.93, 10.16, -11.27, 12.38, -13.49, 14.60, -15.71, 16.82, -17.83, 18.94, -19.05, 20.16],
    [1.16, -2.27, 3.38, -4.49, 5.60, -6.71, 7.82, -8.93, 9.94, -10.17, 11.28, -12.39, 13.50, -14.61, 15.72, -16.83, 17.84, -18.95, 19.06, -20.17],
    [-1.16, 2.27, -3.38, 4.49, -5.60, 6.71, -7.82, 8.93, -9.94, 10.17, -11.28, 12.39, -13.50, 14.61, -15.72, 16.83, -17.84, 18.95, -19.06, 20.17],
    [1.17, -2.28, 3.39, -4.50, 5.61, -6.72, 7.83, -8.94, 9.95, -10.18, 11.29, -12.40, 13.51, -14.62, 15.73, -16.84, 17.85, -18.96, 19.07, -20.18]
];

let resultado = new Array(20).fill(0);

for(let i=0; i < 15; i++){
    for(let j=0; j < 20; j++){
        resultado[j] += M[i][j];
    }
}

console.log(resultado);

