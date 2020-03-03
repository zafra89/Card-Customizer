    let firstNameInput = document.getElementById('first-name-input');
    let lastNameInput = document.getElementById('last-name-input');
    let firstOverlay = document.getElementById('first-overlay');
    let secondOverlay = document.getElementById('second-overlay');
    let completeName = document.getElementById('complete-name');
    let submitBtn = document.getElementById('submit-btn');
    let positionInput = document.getElementById('position-input');
    let phoneInput = document.getElementById('contact-phone-input');
    let emailInput = document.getElementById('contact-email-input');
    let position = document.getElementById('position');
    let phone = document.getElementById('contact-phone');
    let email = document.getElementById('contact-email');
    let inputs = Array.from(document.getElementsByClassName('required'));
    let themeButtons = Array.from(document.querySelectorAll('button'));
    let themeButtonsDiv = document.getElementById('theme-buttons');
    let backBtn = document.getElementById('back-button');
    let backBtnDiv = document.getElementById('back-button-div');

    inputs.forEach(input =>
        input.addEventListener('keyup', () => {
            if (inputs.every(element =>
                element.value.length > 0)) {
                    submitBtn.classList.remove('hide');
                    submitBtn.addEventListener('click', () => {
                        submitInputs()
                    });
                } else {
                    submitBtn.classList.add('hide');
                }
        }));
        
        function submitInputs() {
            secondOverlay.classList.remove('hide');
            firstOverlay.classList.add('hide');
            completeName.innerHTML = `<img id='person-icon' src='./Assets/person-icon.png' /> ${firstNameInput.value} ${lastNameInput.value}`;
            position.innerHTML = `<img id='position-icon' src='./Assets/position-icon.png' /> ${positionInput.value}`;
            phone.innerHTML = `<img id='phone-icon' src='./Assets/phone-icon.png' /> ${phoneInput.value}`;
            email.innerHTML = `<img id='email-icon' src='./Assets/email-icon.png' /> ${emailInput.value}`;
            backBtnDiv.classList.remove('hide');
            backBtn.addEventListener('click', () => {
                resetCard();
            });
            themeButtonsDiv.classList.remove('hide');
            themeButtons.forEach(button => 
                button.addEventListener('click', buttonChanged)
            );
            function buttonChanged(e) {
                secondOverlay.style.setProperty(`background-color`, e.target.value)
            }
        };

        function resetCard() {
            secondOverlay.classList.add('hide');
            firstOverlay.classList.remove('hide');
            themeButtonsDiv.classList.add('hide');
            backBtnDiv.classList.add('hide');
            submitBtn.classList.add('hide');
            inputs.forEach(input =>
                input.value = ''
            );
        };
