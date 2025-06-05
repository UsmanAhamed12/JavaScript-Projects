let toastBox = document.getElementById("toastBox")

let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submited`
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error`
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> invalid input, check again`



function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    
    toastBox.appendChild(toast);

    if (msg.includes('error')){
        toast.classList.add('error')
    }else if (msg.includes('invalid')){
        toast.classList.add('invalid')
    }

    setTimeout(() => {
        toast.remove();
  
    }, 6000);
    
}