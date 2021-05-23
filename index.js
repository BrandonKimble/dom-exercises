const container = document.querySelector('#container');

const content = document.createElement('content');
content.textContent = 'Hey I\'m red!';
content.style.color = 'red';
container.appendChild(content);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
container.appendChild(h3);


const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background-color: pink;';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';

const p = document.createElement('p');
p.textContent = 'ME TOO!';

div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});