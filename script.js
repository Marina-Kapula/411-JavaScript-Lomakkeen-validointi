document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    const validationRules = {
        userId: {
            rule: value => value.length >= 6,
            message: 'Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä'
        },
        password: {
            rule: value => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@£$€&%#]).{6,}$/.test(value),
            message: 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää vähintään yksi numero, yksi iso kirjain ja erikoismerkki (!@£$€&%#)'
        },
        name: {
            rule: value => value !== '',
            message: 'Nimi on pakollinen kenttä'
        },
        address: {
            rule: value => value !== '',
            message: 'Osoite on pakollinen kenttä'
        },
        country: {
            rule: value => value !== '',
            message: 'Maa on pakollinen kenttä'
        },
        postalCode: {
            rule: value => /^\d{5}$/.test(value),
            message: 'Postinumeron tulee olla 5 numeroa'
        },
        email: {
            rule: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message: 'Syötä kelvollinen sähköpostiosoite'
        },
        gender: {
            rule: () => document.querySelector('input[name="gender"]:checked') !== null,
            message: 'Valitse sukupuoli'
        },
        language: {
            rule: () => document.querySelector('input[name="language"]:checked') !== null,
            message: 'Valitse kieli'
        }
    };

    function validateForm() {
        let isValid = true;

        for (const [fieldId, { rule, message }] of Object.entries(validationRules)) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(`${fieldId}Error`);

            if (!rule(field.value.trim())) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
                isValid = false;
            } else {
                errorElement.style.display = 'none';
            }
        }

        if (isValid) {
            alert('Lomake on täytetty oikein! (Tämä on vain demo, lomaketta ei lähetetä minnekään)');
        }
    }

    // Реаlтайм валидация
    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', validateForm);
    });
});
