let A = [ 3, 4, 1, 2];
let B = [ 7, 5, 6, 4];

function total (A,B) {
    let nilai1 = A[0]*B[0]+A[1]*B[2];
    let nilai2 = A[0]*B[1]+A[1]*B[3];
    let nilai3 = A[2]*B[0]+A[3]*B[2];
    let nilai4 = A[2]*B[1]+A[3]*B[3];
    console.log(nilai1,nilai2)
    console.log(nilai3,nilai4)
}
let akhir = [total(A,B)];

