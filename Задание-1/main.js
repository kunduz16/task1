 /* **Описание задания**

    1. Простое сообщение: сохраните текстовое сообщение в переменной и выведите его в браузере
    2. Простые сообщения: сохраните сообщение в переменной и выведите это сообщение. Затем замените значение переменной другим сообщением и выведите новое сообщение
    3. Напишите несколько строк кода, выводящих на экран ваше имя и почтовый адрес.
    4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.
    5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
        
        - сумма a и b; 
        
        - разница между a и b;
        
        - произведение a и b; 
        
        - частное от деления a на b; 
        
        - остаток от деления a на b;  
        
        - результат возведения числа a в степень b */

// № 1
let message;
message = 'Hello!';
alert(message);

// № 2
let secondMsg = "Hey, do you hear me? ";
document.write(secondMsg);

secondMsg = "I'm a super browser <br>";
document.write(secondMsg)

// № 3
let userName = prompt("Ваше Имя ?", "Kunduz");
let emailName = prompt("Ваш email ?", "kunduz.isakova.kk@gmail.com");
document.write("<br>ФИО: </br> "+userName+ " <br> " + " <br>email: </br> " +emailName+ "<br>");

// № 4
document.write("<strong>Надо найти общий вес посылки </strong><br>");
let souvenir = prompt("Введите количество сувенира");
let bauble = prompt("Введите количество безделушек",);
const WEIGHT_SUV = 75;
const WEIGHT_BAUBLE = 112;
let generalWeight = souvenir * WEIGHT_SUV + bauble * WEIGHT_BAUBLE;
document.write(`общий вес равен ${generalWeight} гр <br>`);

// №5
let numA = prompt("Введите число А ");
let numB = prompt("Введите число B ");
let a = Number(numA);
let b = Number(numB);

let sum = a + b;
let minus = a - b;
let multi = a * b;
let divide = a / b;
let remainder = a % b;
let raising = a ** b;

document.write(`Введенные цифры А равен ${a} <br> B 
равен ${b} <br>`);

document.write(`${sum}  сумма a и b; <br>`);
document.write(`${minus}  разница между a и b; <br>`);
document.write(`${multi}  произведение a и b; <br>`);
document.write(`${divide.toFixed(2)}  частное от 
деления a на b; <br>`);
document.write(`${remainder}  остаток от деления a на 
b; <br>`);
document.write(`${raising}  результат возведения числа 
a в степень b.<br>`);
