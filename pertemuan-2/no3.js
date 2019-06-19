// No.3
let nilaiSiswa = [80, 90, 75, 70, 90, 100, 80, 90];

function cariMean(nilaiSiswa) {
    let total = 0;
    for (let i= 0; i<nilaiSiswa.length; i++){
    total += nilaiSiswa[i] / nilaiSiswa.length;
    }
    console.log("Nilai Mean : "+total);
  } 

  function cariMedian(nilaiSiswa){
    nilaiSiswa.sort(function(a,b){ 
      return a-b; 
    });

    let nilaitengah = nilaiSiswa.length/2 
    let nilaiGanjil = Math.floor (nilaitengah);  
    let nilaiGenap = (nilaiSiswa[nilaitengah-1] + nilaiSiswa[nilaitengah])/2;
    
    let hasil = 0;
    if (nilaiSiswa.length % 2!== 0){ 
      hasil = nilaiSiswa[nilaiGanjil];
    }else{
     hasil = nilaiGenap; 
    }
    console. log ("Data setelah di sort : "+nilaiSiswa)
    console.log("Nilai Median (Nilai Tengah) : " +hasil);
  }


  function mode(numbers) {

    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}

  cariMedian(nilaiSiswa);
  cariMean(nilaiSiswa);
  console.log("Nilai Modus : " + mode(nilaiSiswa))