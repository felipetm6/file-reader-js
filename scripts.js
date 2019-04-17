const fileInput = document.querySelector('input[type=file]');
const outputDiv = document.querySelector('.output');

const fillOutput = (data) => {
    let i = 0;

    for (const key in data) {
        i++;
        
        outputDiv.innerHTML += 
        `
            <label>Key ${i}</label>
            <input type="text" value="${data[key]}">
        `;
    }
}

fileInput.onchange = (e) => {
    const files = e.target.files;
    const file = files[0];

    const reader = new FileReader();

    reader.onload = (data) => {
        const object = JSON.parse(data.target.result);
        
        fillOutput(object);
    }

    reader.readAsText(file);
}