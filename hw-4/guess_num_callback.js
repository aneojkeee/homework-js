const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

let myMin=1;
let myMax=5; 
let randomNumber = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

let counter = 0;

const fs = require('fs');
function log(pathToFile) {
    if(pathToFile) {
        fs.writeFileSync(pathToFile, ""); 
    }

    return function add(line) {
        if(pathToFile) {
            fs.appendFile(pathToFile, line, 'utf8', (err) => {
                if(err) {
                    console.log("Получена ошибка");
                } 
            });
        }
        console.log(line);
    };
}

function play(response) {
    rl.question('Введите число от 1 до 5: ', (input) => {
        let userNumber = +input;

        if(isNaN(userNumber) || userNumber < myMin || userNumber > myMax) {
            response(`Попробуйте другое число! `);
            play(response);
        }

        counter++;
    
        if(userNumber === randomNumber) {
            response(`Вы угадали! Это число: ${randomNumber}. Попыток: ${+counter}\n`);
            rl.close();
            return;
        }
    
        if(userNumber > randomNumber) {
            response(`Немного меньше: ${userNumber}. Попыток #${counter}\n`);
        } else {
            response(`Немного больше: ${userNumber}. Попыток #${counter}\n`);
        }
    
        rl.pause();
        play(response);
    });
}

let response = log("./log.txt");
play(response);