const btn = document.getElementById('btn');

function addnotebox() {
    noteparent.append(textbox);
}

btn.addEventListener('click', () => {

    //const textarea = document.createElement('textarea');
    //const delbtn = document.createElement('button');
    const div = document.getElementById('note');

    //textarea.rows = 5;
    //textarea.cols = 100;
    //delbtn.classList.add('del')
    //textarea.placeholder = "Enter your text here...";

    // Optional: Add some spacing

    //div.appendChild(textarea);
    //div.appendChild(delbtn);
    //noteparent.appendChild(document.createElement("br"));
    //noteparent.appendChild(div);

    const noteparent = document.getElementById('notes');

    const not = document.createElement('div');
    const textarea = document.createElement('textarea');
    const delbtn = document.createElement('button')


    textarea.rows = 4;
    textarea.cols = 60;
    textarea.placeholder = "Enter your text here...";

    delbtn.innerHTML = "␡"
    delbtn.classList.add('del')

    not.appendChild(textarea);
    not.appendChild(delbtn);

    //noteparent.appendChild(document.createElement("br"))
    noteparent.appendChild(not);

    delbtn.addEventListener('click', () => {
        noteparent.removeChild(not);
        //noteparent.removeChild("br");
    })


})