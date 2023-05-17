

// Домашнє завдання по темі "Масиви"

// Кожне завдання виконується у вигляді чистої функції.
// Функція повертає масив або інше значення, але не змінює його!
// У консоль/html виводите результат виклику функції:
// const pairs = getPairs(students);
// console.log(pairs);

// Перед виконанням цього домашнього завдання необхідно створити 3 масиви:
// const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
// const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
// const marks = [4, 5, 5, 3, 4, 5];

// // Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// // У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]].

// // Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// // Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]].

//  // Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]].

// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]


const students = ["Олександр", "Игор", "Олена", "Ира", "Олексий", "Свитлана"];
const themes = ["Диференцийне ривняння", "Теория автоматив", "Алгоритми и структури даних"];
let marks = [4, 5, 5, 3, 4, 5];



const pairFn = (name) => {
    let first = []
    first.push(name[0], name[2])
    let second = []
    second.push(name[1], name[3])
    let third = []
    third.push(name[4], name[5])
    let newarray = []
    newarray.push(first, second, third)

    return newarray
}

const lessonsFn = (name, lesson) => {
    let all = []
    name.forEach(el => {
        let aaa = []
        aaa.push(el[0] + " i " + el[1])
        all.push(aaa)
    });

    for (let i = 0, y = 0; i < all.length, y < lesson.length; i++, y++) {
        all[i].push(lesson[i])
    }

    return all
}

const marksFn = (name, mark) => {
    let bigArray = []

    for (let i = 0; i < name.length; i++) {
        let newarray = []
        newarray.push(name[i])
        newarray.push(mark[i])
        bigArray.push(newarray)
    }

    return bigArray
}

const generateRandomNumber = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const final = (name) => {
    let array = []
    name.forEach(el => {
        let random = generateRandomNumber(1, 5)
        array.push(el.push(random))
    })

    return namesLesson
}

maxSpred = (numder) => {
    num = String(numder)
    let arr = []
    arr = num.split("")

    return Math.max(...arr)
}







console.log("Lesson 4")

const pair = pairFn(students)
console.log("pairFn :", pair)

const namesLesson = lessonsFn(pair, themes)
console.log(" lessonsFn : ", lessonsFn(pair, themes))

const markss = marksFn(students, marks)
console.log(" marksFn 1 :", markss)

console.log("generator : ", generateRandomNumber(1, 5))

console.log("finalName : ", final(namesLesson))

console.log(" max : ", maxSpred(1234542332932))

