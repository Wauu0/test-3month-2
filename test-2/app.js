//1
function extractNumbers(str) {
    let numbersArray = str.match(/\d+\.\d+|\d+/g);
    return numbersArray ? numbersArray.map(Number) : [];
}
const result = extractNumbers("a1fg5hj6");
console.log(result);

//2
function printFibonacci(n1, n2) {
    if (n1 > 144) {
        return;
    }
    console.log(n1);
    setTimeout(() => printFibonacci(n2, n1 + n2), 1000);
}

printFibonacci(0, 1);
//3
async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Неудалось найти api адрес');
        }
        
        const data = await response.json();
        data.forEach(item => {
            console.log(item.title);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();
//4
const buttonsContainer = document.getElementById('buttonsContainer');

    buttonsContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const color = event.target.textContent;
            document.body.style.backgroundColor = color;
        }
    });

//5
const square = document.getElementById('square');
const button = document.getElementById('toggle-button');
let isVisible = true;

button.addEventListener('click', function() {
    if (isVisible) {
        square.style.display = 'none';
        button.textContent = 'Show';
    } else {
        square.style.display = 'block';
                button.textContent = 'Hide';
            }
            isVisible = !isVisible;
        });
//6
const counterElement = document.getElementById('counter');

        let count = 0;
        function increaseCounter() {
            count++;
            counterElement.innerText = count;
            if (count === 100) {
                clearInterval(intervalId);
            }
        }
        const intervalId = setInterval(increaseCounter, 1);

//7
document.getElementById('getDataBtn').addEventListener('click', getData);

async function getData() {
    try {
        const response = await fetch("https://json.org/example.html");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
