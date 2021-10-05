import formHandler from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'



window.addEventListener('load', () => {

    const form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        formHandler()
    })
});

