
// Домашнє завдання по темі "Об'єкти"

// У цьому домашньому завданні, ви будете працювати з масивом об'єктів.
// Для початку необхідно створити наступний масив (ви можете його просто скопіювати):

// const students = [{
// name: "Tanya",
// course: 3,
// subjects: {
// math: [4, 4, 3, 4],
// algorithms: [3, 3, 3, 4, 4, 4],
// data_science: [5, 5, 3, 4]
// }
// }, {
// name: "Victor",
// course: 4,
// subjects: {
// physics: [5, 5, 5, 3],
// economics: [2, 3, 3, 3, 3, 5],
// geometry: [5, 5, 2, 3, 5]
// }
// }, {
// name: "Anton",
// course: 2,
// subjects: {
// statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
// english: [5, 3],
// cosmology: [5, 5, 5, 5]
// }
// }];

// // Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] -
// // яка повертає список предметів для конкретного студента.
// // Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл.
// ‌
// ‌
// // Створіть функцію getAverageMark(students[0]) --> 3.79 –
// // яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// // Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
// ‌
// ‌
// //Створіть функцію getStudentInfo(students[0]) --> {"course": 3, "name": "Tanya", "averageMark": 3.79} –
// // яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього
// // завдання). Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.
// ‌
// ‌
// // Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] –
// // яка повертає імена студентів у алфавітному порядку.
// ‌
// // Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по
// // показнику середньої оцінки.
// ‌
// // Створіть функцію calculateWordLetters("тест") --> {"т": 2, "е": 1, "с": 1 } – яка повертає обє'кт,
// // вякому ключі це букви у слові, а значення – кількість їх повторень.



const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

let getSubjects = (student) => {
    let newKeys = []

    students.forEach(i => {
        if (i.name == student) {
            keys = Object.keys(i.subjects)
        }
    })

    keys.map(el => {
        el = el[0].toUpperCase() + el.slice(1)
        split = el.split("_")
        join = split.join(" ")
        newKeys.push(join)
    })

    return newKeys
}

let getAverageMark = (student) => {
    let sum = 0

    students.forEach(i => {
        if (i.name == student) {
            values = Object.values(i.subjects)
            valuesFlat = values.flat()
            valuesFlat.forEach(i => {
                sum = sum + i
            })
            result = (sum / valuesFlat.length).toFixed(2)

            return result
        }
    })

    return result
}

let getStudentInfo = (student) => {
    let obj = {}
    let averageMark = getAverageMark(student)

    students.forEach(i => {
        if (i.name == student) {
            obj.course = i.course
            obj.name = i.name
            obj.averageMark = averageMark
        }
    })

    return obj
}

let getStudentsNames = (array) => {
    let asd = []

    array.map(i => {
        asd.push(i.name)
    })

    return asd.sort()
}

let getStudentsNames2 = (array) => {
    let ttt = array.map(i => i.name)

    return ttt.sort()
}

let getBestStudent = (students) => {
    let well = {
        name: "notName",
        ball: 0
    }

    students.forEach(i => {
        if (getAverageMark(i.name) > well.ball) {
            well.name = i.name
            well.ball = getAverageMark(i.name)
        }
    })

    return well
}

let calculateWordLetters = (word) => {
    let split = (String(word)).split("")
    let obj = {}

    split.forEach(i => {
        let num = 0
        split.forEach(y => {
            if (i == y) {
                num++
            }
        })
        obj[i] = num
    })

    return obj
}


console.log("Lesson 6")

console.log("  getSubjects : ", getSubjects("Tanya"))
console.log("  getSubjects : ", getSubjects("Victor"))
console.log("  getSubjects : ", getSubjects("Anton"))

console.log("getAverageMark : ", getAverageMark("Tanya"))
console.log("getAverageMark : ", getAverageMark("Victor"))
console.log("getAverageMark : ", getAverageMark("Anton"))

console.log("  getStudentInfo : ", getStudentInfo("Tanya"))
console.log("  getStudentInfo : ", getStudentInfo("Victor"))
console.log("  getStudentInfo : ", getStudentInfo("Anton"))

console.log("  getStudentsNames : ", getStudentsNames(students))
console.log("  getStudentsNames2 : ", getStudentsNames2(students))

console.log("  getBestStudent : ", getBestStudent(students))

console.log("  calculateWordLetters : ", calculateWordLetters("hello"))
console.log("  calculateWordLetters : ", calculateWordLetters("lol"))
console.log("  calculateWordLetters : ", calculateWordLetters("marafan"))
console.log("  calculateWordLetters : ", calculateWordLetters("blablabla"))

















