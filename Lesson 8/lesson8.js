
// Домашнє завдання по темі "Прототипи. ES6 класи"

// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

// У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при
// створенні студента(в конструктор).

// Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса,
// Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// ‌
// Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5].
// Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена,
// геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5].
// ‌
// Створіть метод отримання середнього балу this.getAverageMark() -> 4.6.
// Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу –
// ставити студенту оцінки та отримувати їх більше не можна.
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок).
// Створіть метод this.recover, який дозволить поновити студента
// ‌


class Student {
    constructor(university, course, fullName, marks) {
        this.university = university
        this.course = course
        this.fullName = fullName
        this.marks = marks
        this.rezerv = this.marks
    }
    getInfo = () => {
        console.log(`Student ${this.course} course ${this.university}, ${this.fullName}`)
    }
    getMarks = () => {
        console.log(this.marks)
    }
    get markss() {
        if (this.marks === null) {
            console.log("Nihya")
        } else {
            console.log(this.marks)
        }
    }
    set markss(mark) {
        if (this.marks !== null) {
            this.marks.push(mark)
            this.markss
        }
    }
    getAverageMark = () => {
        let sum = 0
        let iter
        this.marks.forEach((el, index) => {
            sum = sum + el
            iter = index
        });
        let middleSum = sum / iter
        console.log(middleSum)
    }
    dismiss = () => {
        this.marks = null
    }
    recover = () => {
        this.marks = this.rezerv
        console.log("Lets Go")
    }

}

let ivan = new Student("Hight School Psichiatrii citi Odessa ", 1,
    "Ostap Rodomanskii Bender", [5, 2, 5, 1, 4])



console.log("Lesson 8")

ivan.getInfo()
ivan.getMarks()
ivan.markss
ivan.markss = 7
ivan.getAverageMark()
ivan.markss
ivan.dismiss()
ivan.markss
ivan.markss = 10
ivan.recover()
ivan.markss = 12











