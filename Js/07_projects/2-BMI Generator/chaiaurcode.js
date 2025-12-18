const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    // console.log(typeof height);
    // console.log(weight);
    if (height === '' || height < 1 || isNaN(height)) {
        results.innerHTML = `Provide a valid height! ${height}`

    } else if (weight === '' || weight < 1 || isNaN(weight)) {
        results.innerHTML = `Provide a valid weight! ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6)
            results.innerHTML = `<span>${bmi} : Under Weight</span>`
        if (bmi >= 18.6 && bmi <= 24.9)
            results.innerHTML = `<span>${bmi} : Normal Range</span>`
        else
            results.innerHTML = `<span>${bmi} : Over Weight</span>`
    }

})

