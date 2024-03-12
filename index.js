const q1 = () => {
    // Variables
    const indice = 13;
    let k = 0, soma = 0;

    while (k < indice) {
        // Increment `k` and add its value to `soma` variable
        k++;
        soma += k;
    }

    // Print the result
    console.log(soma)
}

const q2 = (number = 0) => {
    // Build fibonacci sequence
    let n = 0;
    const fib_numbers = [];

    // Populate `fib_numbers`with numbers of the fibonacci sequence until the last value is greater than or equal to `number`
    while (true) {
        if (fib_numbers.length < 2) {
            fib_numbers[n] = n;
        } else {
            fib_numbers[n] = fib_numbers[n - 1] + fib_numbers[n - 2];
    
            if (fib_numbers[n] == number) {
                console.log(`${number} existe na sequência fibonacci`)
                break;
            } else if (fib_numbers[n] > number) {
                console.log(`${number} não existe na sequência fibonacci`);
                break;
            }
        }
        
        n++;
    }
}

const q5 = (text) => {
    // Inverted text
    let s = [];

    // Pass through `text` and add (starting from the end of text)letters to `s` array
    for (let i = text.length - 1, j = 0; i >= 0; i--, j++) {
        s[j] = text[i];
    }

    console.log(`${text} => ${s.join("")}`)
}

// 91 will be printed
q1()

// Numbers for test: 5 and 34 (exist), 23 and 50 (do not exist)
q2(50)

// Texts for test: osso, ovo, carro
q5("carro")