

// Домашнє завдання по темі "Перебираючі методи масивів"

// // ----Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// //  У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
// // max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –>
// // [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
// // ----Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// // НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
// // ‌
// // ----Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// // НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
// ‌
// Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3
// // ----Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
// // Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]
// // ----Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// // Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3
// // ----Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
// // які діляться на ціло на 5. Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
// // -> [55, 55]
// // ----Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на
// // зірочки (). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
// // після чого масив необхідно буде склеїти .join(" ")
// // Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// // Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ing kidding?"
// // Приклад: replaceBadWords("Holy shit!") -> "Holy !"
// // Приклад: replaceBadWords("It's bullshit!") -> "It's bull\***!"
// // ----Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// // Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// // Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]
// Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні,
// без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв.
// Краще взагалі обмежити работу функції 10 буквами.
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
// Приклад: generateCombinations("ol") -> ["ol", "lo"]



const generateRandomNumber = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArray = (length, n, m) => {
    let a = 0
    let b = []

    for (let y = 0; y < Infinity; y++) {
        a = +(Math.random().toFixed(2) * 100).toFixed(0)

        if (a > n && a < m) {
            b.push(a)
        }

        if (b.length > length - 1) {
            break
        }
    }

    return b
}

const getModa = (...numbers) => {
    let array = ["bykva", 1]

    for (let f = 0; f < numbers.length; f++) {
        let www = 0

        for (let s = 0; s < numbers.length; s++) {
            if (numbers[f] === numbers[s]) {
                www++
            }
        }

        if (www > array[1]) {
            array.splice(0, 2, numbers[f], www)
        }
    }

    return `${array[0]} => ${array[1]} raza `
}

const getMedian = (...numbers) => {
    let sum = 0
    numbers.map(i => {
        sum = sum + i
    })

    return sum / numbers.length
}

const filterEvenNumbers = (...numbers) => {
    const evenNumbers = []
    numbers.forEach(num => {
        if (num % 2 !== 0) {
            evenNumbers.push(num)
        }
    })

    return evenNumbers
}

const countPositiveNumbers = (...numbers) => {
    let quantity = 0
    numbers.forEach(k => {
        if (k > 0) {
            quantity++
        }
    })

    return `quantity > 0  = ${quantity} `
}

const getDividedByFive = (...numbers) => {
    let array = []
    numbers.forEach(p => {
        if (p % 5 == 0) {
            array.push(p)
        }
    })

    return array
}

const replaceBadWords = (string, ...word) => {
    let deleteStr = string.split(" ")

    for (let j = 0; j < deleteStr.length; j++) {
        for (let w = 0; w < word.length; w++) {
            if (deleteStr[j] == word[w]) {
                deleteStr.splice(j, 1, "***")
            }
        }
    }
    let newStr = deleteStr.join(" ")

    return newStr
}

const divideByThree = (word) => {
    let lower = word.toLowerCase()
    let array = lower.split("")

    if (array.length <= 3) {
        return array
    } else {
        let miniArray = []
        let lastArray = []

        for (let i = 0; i < array.length; i++) {
            miniArray.push(array[i])

            if (i % 3 === 0) {
                lastArray.push(miniArray)
                miniArray = []
            }

            if (i == array.length - 1) {
                lastArray.push(miniArray)
                break
            }
        }

        return lastArray
    }
}

let divideByThree2 = (word) => {
    let lower = word.toLowerCase()
    let array = lower.split("")
    let iter = 0
    let miniArray = []
    let lastArray = []

    if (array.length <= 3) {
        return array
    } else {
        array.forEach((el, index) => {
            if (iter < 3) {
                miniArray.push(el)
                iter++
            }

            if (iter == 3) {
                lastArray.push(miniArray)
                iter = 0
                miniArray = []
            }
        })

        lastArray.push(miniArray)

        return lastArray
    }
}





console.log("Lesson 5")

console.log("getRandomArray : ", getRandomArray(20, 1, 5))

console.log("getModa :  ", getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log("getMedian : ", getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

console.log("ilterEvenNumbers : ", filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 5, 3, 2, 3, 4, 4, 7, 9))

console.log("countPositiveNumbers :  ", countPositiveNumbers(1, 3, -5, -7, -2, 1, -5))
console.log("countPositiveNumbers :  ", countPositiveNumbers(1, 2, 3, -4))
console.log("countPositiveNumbers :  ", countPositiveNumbers(-1, -2, 1, -3, -9))

console.log("getDividedByFive :  ", getDividedByFive(1, 2, 3, 4, 5, 6, 10, 55, 100, 4))

console.log('replaceBadWords :  ', replaceBadWords("Are you fucking kidding?", "you"))
console.log('replaceBadWords :  ', replaceBadWords("Holy shit! ", "shit!"))
console.log('replaceBadWords :  ', replaceBadWords("It's bullshit!", "bullshit!"))

console.log("divideByThree : ", divideByThree("hEllecKMNihijkOokopo"))
console.log("divideByThree : ", divideByThree("ok"))
console.log("divideByThree : ", divideByThree("lol"))

console.log(" divideByThree2 : ", divideByThree2("abrakadabra"))
console.log(" divideByThree2 : ", divideByThree2("po"))
console.log(" divideByThree2 : ", divideByThree2("lol"))
console.log(" divideByThree2 : ", divideByThree2("qwer"))

