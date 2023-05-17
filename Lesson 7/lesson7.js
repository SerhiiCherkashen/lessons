// Домашнє завдання по темі "Замікання, ключове слово this"

// Створіть 3 об'єкти, що описують країни:

// const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
// const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
// const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// // Створіть функцію getMyTaxes.call(country, salary) -> number; –
// // яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// // Функція повинна викликатись через call та працювати з даними через this.
// ‌
// ‌
// Створіть функцію getMiddleTaxes.call(country) -> number; –
// яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
// Функція повинна викликатись через call та працювати з даними через this.
//
// ‌
// // Створіть функцію getTotalTaxes.call(country) -> number; –
// // яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax middleSalary vacancies).
// // Функція повинна викликатись через call та працювати з даними через this.
// ‌
// ‌
// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
// { salary: number, taxes: number, profit: number } кожні 10 секунд.
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
// taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;



const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes(salary) {
    console.log("My Taxes :", (salary * this.tax).toFixed(2))
}

function getMiddleTaxes() {
    console.log("My Taxes :", (this.middleSalary * this.tax).toFixed(2))
}

function getTotalTaxes() {
    console.log("Total Taxes :", (this.middleSalary * this.tax * this.vacancies).toFixed(2))
}

function getMySalary() {
    let inter = setInterval(() => {
        let salary = (Math.random() * (2000 - 1500 + 1) + 1500).toFixed(0)
        let taxes = (salary * this.tax).toFixed(2)
        let total = {
            salary,
            taxes,
            profit: salary - taxes
        }
        console.log(total)
    }, 1000);
    setTimeout(() => {
        clearInterval(inter)
    }, 10000);
}




console.log("Lesson 7")

getMyTaxes.call(ukraine, 2000)
getMyTaxes.call(latvia, 1000)
getMyTaxes.call(litva, 2849)

getMiddleTaxes.call(ukraine)
getMiddleTaxes.call(latvia)
getMiddleTaxes.call(litva)

getTotalTaxes.call(ukraine)
getTotalTaxes.call(latvia)
getTotalTaxes.call(litva)

getMySalary.call(ukraine)

















