let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(e => {
    ResultShowingFlag = 0
    e.addEventListener('click', (b) => {
        
        key = b.target.innerText

        if (key == '=') {
            string = String(Math.round(eval(string) * 1000) / 1000) // Round to 3 decimal places
            ResultShowingFlag = 1
            inputBox.value = string;
        }
        else if (key == 'AC') {
            string = ''
            inputBox.value = string
        }
        else if (key == 'DEL') {
            string = string.substring(0, string.length - 1)
            inputBox.value = string
        }
        else {
            if (ResultShowingFlag == 0) {
                string += key
                inputBox.value = string
            }
            else {
                string = ''
                string += key
                inputBox.value = string
                ResultShowingFlag = 0
            }
        }
    })
})