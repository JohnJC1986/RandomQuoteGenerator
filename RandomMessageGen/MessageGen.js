let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes= 
    [ 
    
    '“When you have a dream, youve got to grab it and never let go"',
    '“Nothing is impossible"',
    '“There is nothing impossible to they who will try"',
    '“The bad news is time flies"',
    '“Life has got all those twists and turns"',
    '“Keep your face always toward the sunshine, and shadows will fall behind you"',

];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
