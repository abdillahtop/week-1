let arrayobj = [
    {
        name : 'abdillah Dzulfikar',
        tempat : 'malang'
    },
    {
        name : ' mustanir',
        tempat : 'pakisaji'
    }
]
//melihat semua data array object
console.log('1. melihat semua data array object :');
console.log(arrayobj);

//--------------------------------------------//
arrayobj[1].name = 'Gantilah Mustanir';
arrayobj[1].tempat = 'Jangan Pakisaji';
//mengganti value object di dalam array
console.log('2. mengganti value object di dalam array :');
console.log(arrayobj);

//--------------------------------------------//
arrayobj.push({nama : 'Azum',tempat :'jogja'})
//menambah object dalam array//
console.log('3. menambah object dalam array :');
console.log(arrayobj);

//--------------------------------------------//

let removeobject = arrayobj.map(function(item){ return item.tempat;}).indexOf('malang');

arrayobj.splice(removeobject, 1);
console.log('4. Menghapus Object :');
console.log(arrayobj);


