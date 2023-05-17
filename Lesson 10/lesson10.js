
// Домашнє завдання по темі "Події"

// Вам необхідно виконати завдання з популярного циклу челенджів: JS30.
// (Раджу після курсу – пройти його повністю, він безкоштовний)

// Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш
// та відтворювати унікальний звук для кожної клавіши (клавіши можуть бути будь-які,
// звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати).
// В ідеалі повинно вийти щось схоже як на фото
//
//



function playMusic(letter) {
    if (letter === "a") {
        let audio = new Audio("1.mp3")
        audio.play()
    }
    if (letter === "s") {
        let audio = new Audio("2.mp3")
        audio.play()
    }
    if (letter === "d") {
        let audio = new Audio("3.mp3")
        audio.play()
    }
    if (letter === "f") {
        let audio = new Audio("4.mp3")
        audio.play()
    }
    if (letter === "g") {
        let audio = new Audio("5.mp3")
        audio.play()
    }
    if (letter === "h") {
        let audio = new Audio("6.mp3")
        audio.play()
    }
    if (letter === "j") {
        let audio = new Audio("7.mp3")
        audio.play()
    }
    if (letter === "k") {
        let audio = new Audio("dv.mp3")
        audio.play()
    }
    if (letter === "l") {
        let audio = new Audio("12.mp3")
        audio.play()
    }
    if (letter === "u") {
        let audio = new Audio("21.mp3")
        audio.play()
    }
}
document.addEventListener("keydown", function (event) {
    console.log("add keydown :", event.key)
    playMusic(event.key)
})



































