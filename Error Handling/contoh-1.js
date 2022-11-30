console.log('Error Handling: Promise')

/* Promise memiliki 2 method, yaitu resolve dan reject
dimana resolve akan dijalankan ketika promise berhasil, 
dan reject dijalankan ketika sebuah promise gagal */

function cobaPromise() {
    return new Promise((resolve,reject) => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, 2000);
        } else {
            reject('kelamaan!');
        }
    })
}
    // Mendeklarasikan sebuah variabel untuk memanggil promise
const coba = cobaPromise();
    // Memanggil promise
coba
    // Ketika menjalankan promise, kita bisa gunakan then() untuk menjalankan apa yg ada didalam resolve
    .then(() => console.log(coba))
    // Sementara catch() untuk menjalankan apa yg ada didalam reject
    .catch(err => console.log(err))
