import error from '../../modules/chats/error/error.hbs';
import '../../modules/chats/error/error.css';

function render() {
    const html = error({ number: '404', text: 'Не туда попали', btn: 'Назад к чатам' });

    const app = document.querySelector('#error');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
