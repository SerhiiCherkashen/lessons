
// let leto = document.getElementById("leto")
//
//
//
// let button = document.getElementById("button")
// console.dir(button)
// let add = document.getElementById("add")
// let remove = document.getElementById("remove")
//
// button.onclick = function () {
//     console.log("Buttun.onClick === " + true)
// }
//
// button.addEventListener("click", function () { console.log("button.addEventListener === " + true) })
// button.textContent = "hello"
//
// let but = () => {
//     console.log("ADD / REMOVE  ===  ")
// }
// let buttonClick = (msg) => {
//     console.log("ADD / REMOVE  ===  " + msg)
// }
//
// button.addEventListener("click", buttonClick)
//
//
// function argument() {
//     buttonClick("rabotaet")
// }
// -----------------Abo------------------------
//
// const newArgument = buttonClick.bind(null, "pracue")
//
//
//
// add.addEventListener("click", function () {
//     button.addEventListener("click", newArgument)
// })
// remove.addEventListener("click", function () {
//     button.removeEventListener("click", newArgument)
// })
//
// document.getElementById("add").addEventListener("click", function () {
//     button.addEventListener("click", buttonClick)
// })
// document.getElementById("remove").addEventListener("click", function () {
//     button.removeEventListener("click", buttonClick)
// })
//
//
// -----------------------------ONCE-----------------------------------
//
//
//
// document.getElementById("click-once").addEventListener("click", function (event) {
//     this.textContent = "OFF"
//     console.log("1", event.target === this)
//     console.log("Once click")
// }, { once: true })

// document.querySelector(".container")
//     .addEventListener("click", function (event) {
//         console.log("2", event.target === this)
//         console.log("container click")
//     })




// let test = document.getElementById("test-once")
// let fnTest = () => {
//     console.log("Once test")
// }
//
// ----------------------ONCE with out ONCE-----------------
//
//

// test.addEventListener("click", function () {
//     fnTest()
//     test.textContent = "No once"
//     fnTest = function () {
//         return " "
//     }
//     test.removeEventListener("click", fnTest)

// })



// let button = document.createElement("button")
// document.body.after(button)
// button.textContent = "ONCE"












// let a


// button.addEventListener("click", function () {
//     console.log("button pracye")
// }, { once: true })


// let button3 = document.createElement("button")
// document.body.after(button3)
// button3.textContent = "BUTTON"
// let on = document.createElement("button")
// document.body.after(on)
// on.textContent = "ON"
// let off = document.createElement("button")
// document.body.after(off)
// off.textContent = "OFF"
//
// function xFn() {
//     console.log("pytin - HYILO ")
// }
//
// on.addEventListener("click", function () {
//     button3.addEventListener("click", xFn)
// })
// off.addEventListener("click", function () {
//     button3.removeEventListener("click", xFn)
// })

// let once = document.getElementById("button")
// once.textContent = "ONCE"
// off.before(once)

// once.addEventListener("click", function () {
//     xFn()
//     once.removeEventListener("click", xFn)
// })


// let squares = document.getElementsByClassName('square')

// console.log("jyi2 ", typeof squares)
// function fn() {
//     [...squares].forEach(element => {
//         element.addEventListener("click", function () {
//             this.style.background = "red"
//         })
//     })
// }
// fn()

// document.querySelector(".container")
//     .addEventListener("click", function (event) {
//         event.target.style.background = "red"
//         console.log("event :",)
//     })


//// [...squares].forEach(element => {
////   console.log("elem", element)
//// });
//
//
//
//
// document.getElementById("input").addEventListener("focus", function () {
//     console.log("focus")
// })
//
//
//
// document.getElementById("input").addEventListener("change", function () {
//     if (this.value === "ivan") {
//         console.log("password true")
//     }
//     console.log("change")
// })
//
//
//
// document.addEventListener("mousemove", function () {
//     console.log("hyi")
// })
//
//
// document.addEventListener("keypress", function (event) {
//     console.log("press")
// })
// document.addEventListener("keydown", function (event) {
//     console.log("keydown")
// })
// document.addEventListener("keyup", function (event) {
//     console.log("keyup")
// })
//
//
//
// let number = document.getElementById("number")
// number.textContent = 0
// document.getElementById("minus")
//     .addEventListener("click", function () {
//         number.textContent = +(number.textContent) - 1
//     })

// document.getElementById("plus")
//     .addEventListener("click", function () {
//         number.textContent = +(number.textContent) + 1
//     })
//
//
//
//
//
// ---------------------MY FIRST CALCULATOR-------------------------------
//
//
//
//
//
let okno = document.getElementById("window")
okno.value = 1
index = 0
let arr = []
document.getElementById("minuss")
    .addEventListener("click", function () {
        arr.push(okno.value, "-")
        okno.value = okno.value + "-"
        index = okno.value.length
    })
document.getElementById("pluss")
    .addEventListener("click", function () {
        arr.push(okno.value, "+")
        okno.value = okno.value + "+"
        index = okno.value.length
    })
document.getElementById("multiple")
    .addEventListener("click", function () {
        arr.push(okno.value, "*")
        okno.value = okno.value + "*"
        index = okno.value.length
    })
document.getElementById("del")
    .addEventListener("click", function () {
        arr.push(okno.value, "/")
        okno.value = okno.value + "/"
        index = okno.value.length
    })
document.getElementById("result")
    .addEventListener("click", function () {
        let qqq = 0
        for (let i = (index); i < okno.value.length; i++) {
            if (okno.value[i] !== undefined) {
                qqq = qqq + okno.value[i]
            }
        }
        arr.push(+qqq)
        let r = 0

        if (arr[1] === "-") {
            r = +(arr[0]) - +(arr[2])
        }
        if (arr[1] === "+") {
            r = +(arr[0]) + +(arr[2])
        }
        if (arr[1] === "*") {
            r = +(arr[0]) * +(arr[2])
        }
        if (arr[1] === "/") {
            r = +(arr[0]) / +(arr[2])
        }
        okno.value = r
        arr = []
    })

document.getElementById("drop")
    .addEventListener("click", function () {
        okno.value = 0
    })


//
// ---------------------SQUARE---MOVE----------------------
//


// let www = document.createElement("button")
// document.body.before(www)

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("loaded")
//     new Square()
// })


// class Square {
//     constructor() {
//         this.square = document.getElementById('square')
//         this.square.addEventListener("click", () => { this._start() }, { once: true })
//     }
//     _start() {
//         this.square.style.height = "100px"
//         console.log("square :", square)
//         console.log("square this:", this)

//         let moveCallback = (event) => {
//             this._move(event)
//         }
//         this.square.addEventListener("mousedown", () => {
//             console.log("mousedown")
//             document.addEventListener("mousemove", moveCallback)
//         })
//         document.addEventListener("mouseup", () => {
//             console.log("mouseup")
//             document.removeEventListener("mousemove", moveCallback)
//         })


//     }
//     _move(event) {
//         console.log("event", event)
//         console.log("event this:", this)
//         if (window.innerHeight > event.y + 100 && event.y > 0) {
//             this.square.style.top = event.y + "px"
//         }
//         if (window.innerWidth > event.x + 100) {
//             this.square.style.left = event.x + "px"
//         }
//         this.square.textContent = " "
//     }

// }
//
//
//
// ----------------------------------MENU------------------------------
//
//
// 
let menu = document.querySelector(".menu")
let closse = document.getElementById("close")
let openn = document.getElementById("open")
let wrapper = document.querySelector(".wrapper-menu")

// menu.addEventListener("click", (event) => { event.stopPropagation() })

// let moveMenu = () => {
//     menu.classList.toggle("menu-move")
// }

// openn.addEventListener("click", () => {
//     moveMenu()
//     wrapper.style.pointerEvents = "auto"
//     wrapper.style.left = "100px"
// })
// closse.addEventListener("click", () => {
//     moveMenu()
//     wrapper.style.pointerEvents = "none"
// })

// wrapper.addEventListener("click", function () {
//     console.log("wrapper click")
//     wrapper.style.pointerEvents = "none"
// })



let moveMenu = () => {
    menu.classList.toggle("menu-move")
}

openn.addEventListener("click", moveMenu)

closse.addEventListener("click", moveMenu)

wrapper.addEventListener("click", moveMenu)






console.log("type of 1 ", typeof "/")
console.log("type of 2 ", typeof +"/")
// console.log("type of", typeof /)
// console.log("type of", typeof /)








