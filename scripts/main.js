document.addEventListener('DOMContentLoaded', function(){
    const input = document.querySelector("input");
    const numberButtons = document.querySelectorAll('.button-number');

    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            input.value += button.value;
        });
    });

    document.querySelector('.delete').addEventListener('click', function() {
        input.value = '';
    });

    document.querySelector('.comma').addEventListener('click', function(){
        if (!input.value.includes('.')) {
            input.value += '.';
        }
    });

    document.querySelector('.equal').addEventListener('click', function() {
        try {
            input.value = eval(input.value);
        } catch(error) {
            input.value = 'Ошибка';
        }
    });

    document.querySelector('.plus').addEventListener('click', function() {
        input.value += '+';
    });
    
    document.querySelector('.minus').addEventListener('click', function() {
        input.value += '-';
    });
    
    document.querySelector('.decimal').addEventListener('click', function() {
        input.value += '/';
    });
});