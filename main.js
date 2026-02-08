
class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'lotto-generator');

        const style = document.createElement('style');
        style.textContent = `
            .lotto-generator {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
                background-color: #ffffff;
                border-radius: 16px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.04);
            }

            button {
                padding: 1rem 2rem;
                font-size: 1.2rem;
                font-weight: 600;
                color: #fff;
                background-color: #6a11cb;
                background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(37, 117, 252, 0.5);
            }

            button:hover {
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(37, 117, 252, 0.7);
            }
            
            .numbers-display {
                display: flex;
                justify-content: center;
                margin-top: 2rem;
                flex-wrap: wrap;
            }

            .number-ball {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                margin: 0.5rem;
                border-radius: 50%;
                font-size: 1.5rem;
                font-weight: bold;
                color: #fff;
                background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
        `;

        const button = document.createElement('button');
        button.textContent = 'Generate Numbers';
        button.addEventListener('click', () => this.generateNumbers());

        const numbersDisplay = document.createElement('div');
        numbersDisplay.setAttribute('class', 'numbers-display');

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(button);
        wrapper.appendChild(numbersDisplay);
    }

    generateNumbers() {
        const numbersDisplay = this.shadowRoot.querySelector('.numbers-display');
        numbersDisplay.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 5) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        for (const number of [...numbers].sort((a, b) => a - b)) {
            const numberBall = document.createElement('div');
            numberBall.setAttribute('class', 'number-ball');
            numberBall.textContent = number;
            numbersDisplay.appendChild(numberBall);
        }
    }
}

customElements.define('lotto-generator', LottoGenerator);


