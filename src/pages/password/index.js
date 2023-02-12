import form from '../../modules/chats/user/user.hbs';
import '../../modules/chats/user/user.css';

let fields = [
  {
    name: 'Старый пароль',
    content: '•••••••••',
  },
  {
    name: 'Новый пароль',
    content: '•••••••••••',
  },
  {
    name: 'Повторите новый пароль',
    content: '•••••••••••',
  }
];

function render() {
    const html = form({ fields, change: true });

    const app = document.querySelector('#changePass');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
