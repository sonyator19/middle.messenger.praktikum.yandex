import form from '../../modules/chats/user/user.hbs';
import '../../modules/chats/user/user.css';

const fields = [
  {
    title: 'Старый пароль',
    name: 'password',
    content: '•••••••••',
  },
  {
    title: 'Новый пароль',
    name: 'password',
    content: '•••••••••••',
  },
  {
    title: 'Повторите новый пароль',
    name: 'password',
    content: '•••••••••••',
  }
];

function render() {
    const html = form({ change: true, fields });

    const app = document.querySelector('#changePass');
    if (app) {
      app.innerHTML = html;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
