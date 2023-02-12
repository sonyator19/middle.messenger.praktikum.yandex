import form from '../../modules/chats/form/form.hbs';
import '../../modules/chats/form/form.css';

let fields = [
  {
    name: 'login',
    label: 'Логин',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'text',
  }
];

function render() {
    const html = form({ title: 'Вход', fields, btn: 'Авторизоваться', link: 'Нет аккаунта?' });

    const app = document.querySelector('#authorization');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
