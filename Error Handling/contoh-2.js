console.log('Error Handling: Async Await')

/* Dalam penanganan error Async Await kita menggunakan try dan catch */

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

async function cobaAsync() {
    // Untuk menangkap resolve, kita akan menggunakan try()
    try {
        const coba = await cobaPromise();
        console.log(coba);
    // Untuk menangkap reject, kita akan menggunakan reject
    } catch (err) {
        console.log(err);
    }
}

cobaAsync()