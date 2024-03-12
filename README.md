# Resoluções

## Linguagem usada
JavaScript

## Enunciados
**1. (...código de exemplo). Ao final do processamento, qual será o valor da variável SOMA?**\
R: O valor será 91: a cada iteração do loop (12 no total), `k` terá seu valor aumentado em 1 e será somado à variável `soma`

**2. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.**\
R: A função receberá um valor como argumento (`number`) (caso nenhum seja provido, ele será 0). Com esse valor, o loop adicionará os números de acordo com a sequência _fibonacci_ até que o último número adicioado seja maior ou igual a `number`. Se esse último número for igual a `number`, então ele está na sequência, caso ele seja maior que `number`, então `number` não está na sequência.

**3. Descubra a lógica e complete o próximo elemento:**\
a) 1, 3, 5, 7, **9** => Números ímpares\
b) 2, 4, 8, 16, 32, 64, **128** => O dobro do número anterior\
c) 0, 1, 4, 9, 16, 25, 36, **49** => Soma dos números ímpares\
d) 4, 16, 36, 64, **100** => Quadrado dos números pares\
e) 1, 1, 2, 3, 5, 8, **13** => Sequência de fibonacci\
f) 2, 10, 12, 16, 17, 18, 19, ____

**4. Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?**\
R: 
- ligue o primeiro interruptor
- Aguarde e desligue o primeiro interruptor
- Ligue o segundo interruptor
- Vá à primeira lâmpada
    - Se a lâmpada estiver fria e desligada, então ela é controlada pelo terceiro interruptor, que ainda não foi ligado
    - Se a lâmpada estiver quente e desligada, então ela é controlada pelo primeiro interruptor
    - Se a lâmpada estiver acesa, então ela é controlada pelo segundo interruptor
- Agora é só ir às outras salas das lâmpadas e aplicar as mesmas condições e você descobrirá qual interruptor controla qual lâmpada

**5. Escreva um programa que inverta os caracteres de um string.**
R: A função pega o texto (`text`) fornecido e criar um array de letras vazio (`s`). A cada iteração do loop, as últimas letras do texto são adicionadas no array de letras, invertendo o texto passado no argumento da função.
