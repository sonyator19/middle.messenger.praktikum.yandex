import error from '../../modules/chats/error/error.hbs';
import '../../styles/error.css';

function render() {
    const html = error({ number: '500', text: 'Мы уже фиксим', btn: 'Назад к чатам' });

    const app = document.querySelector('#error-page');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
