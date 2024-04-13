const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
}

const handleInputChange = (event) => {
    const inputtedName = event.currentTarget.value.trim();
    
    if (!inputtedName) {
        refs.nameOutput.textContent = 'Anonymous';
        return;
    }

    refs.nameOutput.textContent = inputtedName;
}

refs.nameInput.addEventListener('input', handleInputChange);