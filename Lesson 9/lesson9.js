// // Домашнє завдання по темі "DOM"

// // Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір.
// // Квадрати мають розташовуватись по 5 в ряд.
// // Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

// // Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
// // Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати
// // функцію generateBlocksInterval().



let text = document.createTextNode("hello world!!!")

document.body.before(text)

let div1 = document.createElement("div")
div1.classList.add("div", "backgroundDiv",)

let colorRandom = () => {
    let a = 0
    let b = 0
    let c = 0
    for (let i = 1; i <= 3; i++) {
        let q = ((Math.random() * (255 - 1) - 0) + 0).toFixed(0)
        if (i === 1) {
            a = q
        }
        if (i === 2) {
            b = q
        } else { c = q }
    }

    return `rgb(${a}, ${b}, ${c})`
}

let generateBlocks = () => {
    for (let i = 1; i <= 25; i++) {
        let square = document.createElement("div")
        let sqr = square
        sqr.classList.add("square")

        setInterval(() => {
            let color = colorRandom()
            sqr.style.background = color
        }, 1000);

        div1.append(sqr)
    }
    document.body.append(div1)
}

generateBlocks()




let generateBlocks1 = () => {
    for (let i = 1; i <= 25; i++) {
        let square = document.createElement("div")
        let sqr = square
        sqr.classList.add("square")
        let color = colorRandom()
        sqr.style.background = color
        div1.append(sqr)
    }
    document.body.append(div1)
}

generateBlocks1()








//
//--------------------------------CHERNETKA-------------------------------------------
//
// function createVariables() {
//     for (i = 0; i <= 20; i++) {
//         let account = i;
//         return account + i;
//     }
// }
// console.log("fn :", createVariables())
//
// for (let t = 0; t < array.length; t++) {
// }

// let generateBlocks = () => {
//     setInterval(() => {
//         for (let i = 1; i <= 5; i++) {
//             square.forEach(element => {
//                 let color = colorRandom()
//                 element.classList.add("square")
//                 element.style.background = color
//                 div1.append(element)
//             });
//             document.body.append(div1)
//         }

//     }, 1000);
// }

// generateBlocks()

// generateBlocksInterval()

// square3.style.display = "flex"
// square3.style.height = "300px"
// square3.style.backgroundColor = "green"

// console.log(getComputedStyle(square1)["height"])


// let qwe = document.getElementById('qwe')
// let koka = document.getElementById('koka')
//
//
// console.log("ebala jaba goduky")
// console.log("qwe :", qwe)
// console.log("koka : ", koka)
//
// // document.write("asdfghjk")
//
// qwe.textContent = " hyi / 2"
// koka.textContent = "pisyn"
// console.log("qwe :", qwe)
// console.log("koka : ", koka)

// let title = document.querySelector("span#title")
// let index = document.querySelector("#index")

// // console.log("title : ", title)
// // console.log("index : ", index)

// // let car = document.querySelector("span#car")
// // let banana = document.querySelector("#banana")

// // console.log("car : ", car)
// // console.log("banana : ", banana)

// // let titles = document.querySelectorAll('.title')

// // console.log("All title : ", titles)

// // titles.forEach(element => {
// //     console.log("forEach :", element)
// // });



// title.innerHTML = "pizda"
// console.log(" pizda  : ", title)
// title.textContent = "1"
// console.log(" number  : ", title)
// let colorList = ["red", "green", "yellow", "blue"]
// let sec = 0
// let interval = setInterval(() => {
//     let color = sec % colorList.length
//     title.textContent = sec++
//     title.className = (colorList[color])
//     index.innerHTML = (color + " " + colorList[color])
// }, 1000);
// // title.classList.add("red")



// let counter = document.querySelector(".counter")
// counter.classList.add("red")



// // let interval = setInterval(() => {
// //     title.textContent = +number.textContent + 1
// // }, 100);
// //
// // console.log(" number  : ", title)
// //
// // setTimeout(() => {
// //     clearInterval(interval)
// // }, 2000);
// //
// // setTimeout(() => {
// //     title.textContent = "POSOSI"
// // }, 2000);



// let himars = document.querySelector(".himars")

// console.log("himars :", himars)
// let secc = 10
// let int = setInterval(() => {
//     secc = secc--
// }, 1000)

// himars.innerHTML = ` ${himars.innerHTML} <input value="ON kursk "/> `
// setTimeout(() => {
//     clearInterval(int)
// }, 10000);
// let hyi = document.querySelector('.hyi')
// hyi.innerHTML = "<input />"
// hyi.firstChild.value = "hyi"
// // setTimeout(() => {
// //     console.log(hyi.firstChild.value)
// // }, 3000);
// let outer = document.getElementById("outer")
// console.log("outer :", outer)
// console.log("outer.html :", outer.outerHTML)
// console.log
// console.log("outer :", typeof (outer))
// console.log("outer.html :", typeof (outer.outerHTML))
// console.log("AllStyle :", getComputedStyle(title)) +
//     console.log("AllStyle :", getComputedStyle(title)["font-size"])
// console.log


// let button = document.createElement("button")

// himars.append(button)
// // himars.after(button)/








// let palittra = ["red", "green", "yellow", "blue",
//     "pink", "darkcyan", "darkmagenta", "sandybrown", "peru",
//     "white", "yellowgreen", "darkorange"]
// let random = (min, array) => {
//     let r = Math.random() * ((array.length - 1) - min) + min
//     return +r.toFixed(0)
// }
// console.log("qwerty:", qwerty)





















