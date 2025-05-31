// define constant and variable

const input = document.getElementById('input');
const QRcode = document.getElementById('QRcode');
const btn = document.getElementById('btn')
const QRimg = document.getElementById('QRimg')




function GenerateQR(){

    if (input.value){
        QRimg.src = 'https://quickchart.io/qr?text=' +  input.value;
    // QRimg.src = '/Notes App/notes-img/notes.png'
    QRcode.classList.add('show-img');
    } else{
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')
        }, 1000);
    }
    
};




