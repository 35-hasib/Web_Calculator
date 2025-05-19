let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''
let ResultShowingFlag = 0

buttons.forEach(e => {
    e.addEventListener('click', (b) => {
        
        let key = b.target.innerText

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
            if (ResultShowingFlag == 1) {
                string = ''
                ResultShowingFlag = 0
            }

            if (key.match(/[0-9]/)) {
                if (/[+\-*/]$/.test(string) && key === '0') {
                    if (!string.endsWith('0')) {
                        string += key
                    }
                }
                else if (string === '0' || string === '00') {
                    string = key
                }
                else {
                    string += key
                }
            }
            else {
                string += key
            }

            inputBox.value = string.replace(/([+\-*/])0+/g, '$10')
        }
    })
})