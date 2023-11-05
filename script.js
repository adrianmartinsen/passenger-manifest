window.onload = function() {
    document.querySelector('#date').valueAsDate = new Date()
}

const form = document.querySelector('#participant')

form.addEventListener('submit', event => {
    event.preventDefault()
    db.collection('passasjerer').add({
        name: form.name.value,
        phone: form.phone.value,
        date: form.date.value
    })
    form.name.value = ''
    form.phone.value = ''
})