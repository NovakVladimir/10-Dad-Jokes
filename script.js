const word = document.getElementById('yourText');
const audio = document.getElementById('aud');
const speak = document.getElementById('speak');



audio.addEventListener('click', voice);


async function voice() {
    const au = document.getElementById('startMusic');
    let adress = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word.value;
    const res = await fetch(adress);
    const data = await res.json();
    au.src = await data[0].phonetics[0].audio;
    au.play();
    speak.innerHTML = data[0].phonetic===undefined? "-" : data[0].phonetic;
}






