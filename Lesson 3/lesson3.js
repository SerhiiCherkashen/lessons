
// Домашнє завдання по темі "Функції"

// В цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір).

// (!) У функціях не потрібно виводити ніяких даних, вони мають бути чистими, по можливості.
// Після чого в кінці ДЗ потрібно обернути виклик ваших функцій в console.log або document.writeln.
// Приклад: Ваша функція об'явлена десь const myFunc = () => { ...},
// в кінці вашого ДЗ ви виводите результат виклику document.writeln(Функція №1: ${myFunc("аргументи, якщо є")}).

// / Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// / Приклади: 1236 -> 6, 987 -> 9, 385 -> 8.
// / Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл.
// / Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
// / Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
// / (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805.
// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5.
// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4.
// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// /  Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$.
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124.
// / Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl".
// Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true.
// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим".



let getMaxDigit = (number) => {
    let string = String(number)
    let array = string.split('')
    let max = array[0]

    for (let y = 1; y < array.length; y++) {
        if (max < array[y]) {
            max = array[y]
        }
    }
    let maxDigit = (` ${number} max : ${max}`)

    return maxDigit
}


let maxSpredd = (numder) => {
    num = String(numder)
    let arr = []
    arr = num.split("")
    console.log(arr)
    return Math.max(...arr)
}


let degreeNumber = (number, degree) => {
    let num = number
    if (degree - Math.floor(degree) !== 0) {
        return " Vvedit cile chislo !!!"
    }
    if (degree == 0) {
        return `${number} in ${degree} degree = ${1} `
    }
    if (degree == 1) {
        return `${number} in ${degree} degree = ${number} `
    }
    if (degree < 0) {
        for (let w = 1; w < (-degree); w++) {
            num = num * number
        }
        let result = 1 / num
        return `${number} in ${degree} degree = ${result} `
    } else {
        for (let w = 1; w < degree; w++) {
            num = num * number
        }
        return `${number} in ${degree} degree = ${num} `
    }
}

let firstleter = (word) => {
    let arrWord = word.split("")
    let arrFirst = []
    arrFirst.push(arrWord[0])
    arrWord.splice(0, 1)
    let joinFirst = arrFirst.join("")
    let joinSecond = arrWord.join("")
    let f = joinFirst.toUpperCase()
    let s = joinSecond.toLowerCase()
    return ` ${word} => ${f + s} `
}

let tax = (cash, tax) => {
    tax = tax / 100
    let remainder = cash - (cash * tax)
    return `With ${cash} remainder ${remainder} Tax : ${tax * 100}% `
}

let valuta = (cash) => {
    let splCash = cash.split("")
    let val = []
    val = splCash[splCash.length - 1]
    let groshi = []
    splCash.splice((splCash.length - 1), 1)
    groshi = splCash
    let joinGroshi = groshi.join('')

    if (val == "$") {
        joinGroshi = joinGroshi * 40 + "u"
    }
    if (val === "u") {
        joinGroshi = joinGroshi / 40 + "$"
    }
    return `${cash} => ${joinGroshi} `
}

let deleteLetters = (word, fff) => {
    let www = word.split(fff)
    let eee = www.join('')
    return eee
}

let maxSpred = (numder) => {
    return Math.max(numder)
}




console.log("Lesson 3")

console.log(" max : ", maxSpred(1234))

console.log(" max : ", maxSpredd(1234))

console.log("getMaxDigit : ", getMaxDigit(130233))
console.log("getMaxDigit : ", getMaxDigit(7654334))
console.log("getMaxDigit : ", getMaxDigit(1923))

console.log("degreeNumber : ", degreeNumber(2, 3))
console.log("degreeNumber : ", degreeNumber(2, 1))
console.log("degreeNumber : ", degreeNumber(2, 0))
console.log("degreeNumber : ", degreeNumber(2, -3))
console.log("degreeNumber : ", degreeNumber(2, 2.2))

console.log("firstleter : ", firstleter("iVaN"))
console.log("firstleter : ", firstleter("oleG"))
console.log("firstleter : ", firstleter("IGOR"))
console.log("firstleter : ", firstleter("lesha"))

console.log("tax : ", tax(100, 0))
console.log("tax : ", tax(123456, 23))
console.log("tax : ", tax(100, 0.1))
console.log("tax : ", tax(100, 100))

console.log("valuta : ", valuta("10000$"))
console.log("valuta : ", valuta("350$"))
console.log("valuta : ", valuta("100u"))
console.log("valuta : ", valuta("10000u"))

console.log("deleteLetters :", deleteLetters("blablabla", "a"))
console.log("deleteLetters :", deleteLetters("avangard", "a"))
console.log("deleteLetters :", deleteLetters("madam", "m"))
