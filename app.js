window.onload = function() {
    let firstNameInput = document.getElementById('first-name-input');
    let lastNameInput = document.getElementById('last-name-input');
    let firstOverlay = document.getElementById('first-overlay');
    let secondOverlay = document.getElementById('second-overlay');
    let completeName = document.getElementById('complete-name');
    let submitBtn = document.getElementById('submit-btn');
    let themeButtonsDiv = document.getElementById('theme-buttons');
    let positionInput = document.getElementById('position-input');
    let phoneInput = document.getElementById('contact-phone-input');
    let emailInput = document.getElementById('contact-email-input');
    let position = document.getElementById('position');
    let phone = document.getElementById('contact-phone');
    let email = document.getElementById('contact-email');
    let inputs = Array.from(document.getElementsByClassName('required'));
    let redThemeBtn = document.getElementById('red-theme-btn');
    let blueThemeBtn = document.getElementById('blue-theme-btn');
    let greenThemeBtn = document.getElementById('green-theme-btn');
    let yellowThemeBtn = document.getElementById('yellow-theme-btn');
    let orangeThemeBtn = document.getElementById('orange-theme-btn');
    let backBtn = document.getElementById('back-button');
    let backBtnDiv = document.getElementById('back-button-div');

    inputs.forEach(input =>
        input.addEventListener('keyup', () => {
            if (inputs.every(element =>
                element.value.length > 0)) {
                    submitBtn.classList.remove('hide');
                } else {
                    submitBtn.classList.add('hide');
                }
        }));

        submitBtn.addEventListener('click', () => {
            secondOverlay.classList.remove('hide');
            firstOverlay.classList.add('hide');
            themeButtonsDiv.classList.remove('hide')
            completeName.innerText = `${firstNameInput.value} ${lastNameInput.value}`;
            position.innerText = `${positionInput.value}`;
            phone.innerText = `${phoneInput.value}`;
            email.innerText = `${emailInput.value}`;
            backBtnDiv.classList.remove('hide');
        });

        backBtn.addEventListener('click', () => {
            secondOverlay.classList.add('hide');
            firstOverlay.classList.remove('hide');
            themeButtonsDiv.classList.add('hide');
            backBtnDiv.classList.add('hide');
            submitBtn.classList.add('hide');
            secondOverlay.classList.remove('redTheme');
            secondOverlay.classList.remove('blueTheme');
            secondOverlay.classList.remove('greenTheme');
            secondOverlay.classList.remove('yellowTheme');
            secondOverlay.classList.remove('orangeTheme');
            inputs.forEach(input =>
                input.value = '');
        });

        redThemeBtn.addEventListener('click', () => {
            secondOverlay.classList.add('redTheme');
            secondOverlay.classList.remove('blueTheme');
            secondOverlay.classList.remove('greenTheme');
            secondOverlay.classList.remove('yellowTheme');
            secondOverlay.classList.remove('orangeTheme');
        });

        blueThemeBtn.addEventListener('click', () => {
            secondOverlay.classList.add('blueTheme');
            secondOverlay.classList.remove('redTheme');
            secondOverlay.classList.remove('greenTheme');
            secondOverlay.classList.remove('yellowTheme');
            secondOverlay.classList.remove('orangeTheme');
        });

        greenThemeBtn.addEventListener('click', () => {
            secondOverlay.classList.add('greenTheme');
            secondOverlay.classList.remove('blueTheme');
            secondOverlay.classList.remove('redTheme');
            secondOverlay.classList.remove('yellowTheme');
            secondOverlay.classList.remove('orangeTheme');
        });

        yellowThemeBtn.addEventListener('click', () => {
            secondOverlay.classList.add('yellowTheme');
            secondOverlay.classList.remove('blueTheme');
            secondOverlay.classList.remove('greenTheme');
            secondOverlay.classList.remove('redTheme');
            secondOverlay.classList.remove('orangeTheme');
        });

        orangeThemeBtn.addEventListener('click', () => {
            secondOverlay.classList.add('orangeTheme');
            secondOverlay.classList.remove('blueTheme');
            secondOverlay.classList.remove('greenTheme');
            secondOverlay.classList.remove('yellowTheme');
            secondOverlay.classList.remove('redTheme');
        });
    }