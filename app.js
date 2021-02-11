const input = document.querySelector('#letter')
const label = document.querySelector('#label-letter')
input.addEventListener("input", () => label.innerHTML = `${input.value.length}`)
