const chars = "ABCDEFGHIJK123456789";
const btn = document.querySelector("button");
const codeNumber = 5;
const codeLength = 20;

btn.addEventListener('click', () => {
    for (i = 0; i < codeNumber; i++) {
        let code = "";
        for (j = 0; j < codeLength; j++) {
            let index = Math.floor(Math.random() * chars.length);
            code += chars[index]; 
        }
        const div = document.createElement("div");
        document.body.appendChild(div);
        div.textContent = code;
    }
})