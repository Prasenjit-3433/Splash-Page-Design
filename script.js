const { body } = document;

let currentBackground = 'default';

function changeBackground(newBackground) {
    // Reset CSS Class for body
    body.className = '';

    if (currentBackground === newBackground) {
        currentBackground = 'default';
        return;
    }

    switch (newBackground) {
        case '1':
            body.classList.add('background-1');
            currentBackground = '1';
            break;
            
        case '2':
            body.classList.add('background-2');
            currentBackground = '2';
            break;

        case '3':
            body.classList.add('background-3');
            currentBackground = '3';
            break;
    }
}