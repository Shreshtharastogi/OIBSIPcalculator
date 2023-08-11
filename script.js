let string = ""; // Initialize an empty string to store the input expression
const buttons = document.querySelectorAll('.button');

// Loop through each button and add a click event listener
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                // Use parseFloat to ensure accurate calculation
                string = parseFloat(eval(string).toFixed(8)).toString();
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = "Error";
            }
        }
        else if (buttonText === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (buttonText === 'Del') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            string += buttonText;
            document.querySelector('input').value = string;
        }
    })
});
