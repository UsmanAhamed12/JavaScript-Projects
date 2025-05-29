const api_url = 'https://dummyjson.com/quotes';
const randomNumber = Math.floor(Math.random() * 31);
const quote = document.getElementById('quote')
const author = document.getElementById('author')

async function getQuote(url){
    const response = await fetch(url);
    let data = response.json();

    console.log(data)
}

getQuote(api_url);



