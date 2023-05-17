
// создать переменные товаров с ценами 15.678, 123.965, 90.2345   //
// посчитать минимум, максимум                                    //
// посчитать сумму товаров                                        //
// округлить сумму товаров                                        //
// проверить является сумма товаров четным или нечетным числом    //
// вычислить сдачу если у тебя есть 500 грн                       //
// посчитать среднюю стоимость товаров
// сгенерировать случайную скидку от 0 - 100 %
// посчитать сумму к оплате со скидкой
// 10. посчитать сколько ты сэкономила

// вывести все результаты по пунктам в консоль или в дом дерево
// console.log() / document.writeln


const car = 15.678
const banana = 123.965
const cup = 90.2345

const max = Math.max(car, banana, cup)
const min = Math.min(car, banana, cup)

const sum = car + banana + cup

const sumFloor = Math.ceil(sum)

const fn = () => {
    if (sumFloor % 2) {
        console.log("5 sumFloor --- nechetnii ")
    } else {
        console.log("5 sumFloor --- chetnii ")
    }
}

const myCash = 500
const result = myCash - car - banana - cup

const middleCosts = sum / 3

const discount = Math.random().toFixed(2) * 100

const discountPrice = (sum - sum * (discount / 100)).toFixed(2)

const saved = (sum * (discount / 100)).toFixed(2)


console.log(" Lesson 1 ")

console.log(" 1 car : ", car, " banana : ", banana, " cup : ", cup)
document.write(" 1 car : ", car, " banana : ", banana, " cup : ", cup)

console.log(" 2 max : ", max, "  min : ", min)
console.log(" 1 min : ", min)

console.log(" 3 sum : ", sum)

console.log(" 4 sumFloor : ", sumFloor)

console.log(" 5 fn : ", fn())

console.log(" 6 result : ", result.toFixed(2))

console.log(" 7 middleCosts : ", middleCosts.toFixed(2))

console.log(" 8 discount : ", discount, "%")

console.log(" 9 discountPrice : ", discountPrice)

console.log(" 10 saved : ", saved)










