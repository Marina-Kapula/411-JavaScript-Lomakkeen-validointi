document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
    
    function validateForm() {
        let isValid = true;
        
        // Käyttäjä ID validointi (vähintään 6 merkkiä)
        const userId = document.getElementById('userId').value.trim();
        const userIdError = document.getElementById('userIdError');
        if (userId.length < 6) {
            userIdError.textContent = 'Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä';
            userIdError.style.display = 'block';
            isValid = false;
        } else {
            userIdError.style.display = 'none';
        }
        
        // Salasana validointi (vähintään 6 merkkiä, numero, iso kirjain, erikoismerkki)
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('passwordError');
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@£$€&%#]).{6,}$/;
        if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää vähintään yksi numero, yksi iso kirjain ja erikoismerkki (!@£$€&%#)';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
        }
        
        // Nimi validointi (ei tyhjä)
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.textContent = 'Nimi on pakollinen kenttä';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }
        
        // Osoite validointi (ei tyhjä)
        const address = document.getElementById('address').value.trim();
        const addressError = document.getElementById('addressError');
        if (address === '') {
            addressError.textContent = 'Osoite on pakollinen kenttä';
            addressError.style.display = 'block';
            isValid = false;
        } else {
            addressError.style.display = 'none';
        }
        
        // Maa validointi (ei tyhjä)
        const country = document.getElementById('country').value;
        const countryError = document.getElementById('countryError');
        if (country === '') {
            countryError.textContent = 'Maa on pakollinen kenttä';
            countryError.style.display = 'block';
            isValid = false;
        } else {
            countryError.style.display = 'none';
        }
        
        // Postinumero validointi (tasan 5 numeroa)
        const postalCode = document.getElementById('postalCode').value.trim();
        const postalCodeError = document.getElementById('postalCodeError');
        const postalCodeRegex = /^\d{5}$/;
        if (!postalCodeRegex.test(postalCode)) {
            postalCodeError.textContent = 'Postinumeron tulee olla 5 numeroa';
            postalCodeError.style.display = 'block';
            isValid = false;
        } else {
            postalCodeError.style.display = 'none';
        }
        
        // Sähköposti validointi
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Syötä kelvollinen sähköpostiosoite';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }
        
        // Sukupuoli validointi (valittu)
        const genderSelected = document.querySelector('input[name="gender"]:checked');
        const genderError = document.getElementById('genderError');
        if (!genderSelected) {
            genderError.textContent = 'Valitse sukupuoli';
            genderError.style.display = 'block';
            isValid = false;
        } else {
            genderError.style.display = 'none';
        }
        
        // Kieli validointi (valittu)
        const languageSelected = document.querySelector('input[name="language"]:checked');
        const languageError = document.getElementById('languageError');
        if (!languageSelected) {
            languageError.textContent = 'Valitse kieli';
            languageError.style.display = 'block';
            isValid = false;
        } else {
            languageError.style.display = 'none';
        }
        
        // Jos kaikki validinnit menivät läpi
        if (isValid) {
            alert('Lomake on täytetty oikein! (Tämä on vain demo, lomaketta ei lähetetä minnekään)');
        }
    }
    
    // Reaaliaikainen validointi kenttien muuttuessa
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateForm();
        });
    });
});