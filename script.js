/*ДЗ 4.2. Перевірка числа
Дано тризначне число, яке надае користувач, потрибно визначити:

Чи правда, що всі цифри однакові?
Чи є серед цифр цифри однакові?*/

const userNum = prompt('Please enter a three-digit number.');
function auditNum(num){
    if (isNaN(+num)){
        alert('Error: Not a number!');   
    } else if (!Number.isInteger(+num)) {
        alert('Error: Not a whole number!');   
    } else if (!num?.trim()){
        alert('Error: Nothing entered!');
    } else if (Math.sign(+num) === -1) {
        alert('Error: negative number!');
    } 
    else { 
        let numUsers = +num?.trim();
        numUsers = String(numUsers);
        console.log(numUsers, typeof numUsers);
        if ((numUsers.length === 3)){
            const arrNum = numUsers.split('').map(Number);
            arrNum.sort();
            const arrNumFirst = arrNum[0];
            const arrNumSecond = arrNum[1] 
            const arrNumLast = arrNum[arrNum.length - 1];
            switch (true) {
                case (arrNumFirst === arrNumLast):
                    alert(`Всі три введені цифри однакові`);
                    break;
                case ((arrNumFirst === arrNumSecond)|| (arrNumSecond === arrNumLast)):
                    alert(`Дві введені цифри однакові`);
                    break;
                default: alert('Число трьохзначне');
            }
        } else  alert('The number is not three-digit');
    }
}

auditNum(userNum);