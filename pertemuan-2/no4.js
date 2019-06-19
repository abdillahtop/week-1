// No.4
let perpustakaan = 
[{
    judul   : "Man Jadda Wa Jadda",
    tahun   : "1999",
    status  : "Dipinjam"
},
{
    judul   : "Man Sabaro Zafiro",
    tahun   : "1999",
    status  : "Tersedia"
},
{
    judul   : "Negeri 5 menara",
    tahun   : "1999",
    status  : "Tersedia"
}

];

let x = perpustakaan.findIndex(perpustakaan => perpustakaan.judul === "Negeri 5 menara");
console.log(perpustakaan[x].judul + "Status = " +perpustakaan[x].status);


let statusbuku = perpustakaan.filter((judul) => judul.status === "Tersedia");
// let statusbuku = perpustakaan.map(function(item){return item.judul +" Status = "+ item.status ;});


console.log(statusbuku);

// console.log(perpustakaan[0].judul+"Status :" perpustakaan[0].status);