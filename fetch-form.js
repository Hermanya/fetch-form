function fetchForm (form) {
    fetch(form.action)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        Object.keys(json).forEach(function (key) {
            var field = form.querySelector(`[name=${key}]`)
            if (field) {
                field.value = json[key]
            }
        })
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    });
}

Array.from(document.querySelectorAll('form[fetch]')).forEach(fetchForm)
