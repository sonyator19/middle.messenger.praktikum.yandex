import form from '../../modules/chats/user/user.hbs';
import '../../styles/user.css';

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
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
