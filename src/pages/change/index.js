import form from '../../modules/chats/user/user.hbs';
import '../../modules/chats/user/user.css';

let fields = [
  {
    name: 'Почта',
    content: 'pochta@yandex.ru',
  },
  {
    name: 'Логин',
    content: 'ivanivanov',
  },
  {
    name: 'Имя',
    content: 'Иван',
  },
  {
    name: 'Фамилия',
    content: 'Иванов',
  },
  {
    name: 'Имя в чате',
    content: 'Иван',
  },
  {
    name: 'Телефон',
    content: '+7 (909) 967 30 30',
  }
];

function render() {
    const html = form({ name: 'Иван', fields, change: true });

    const app = document.querySelector('#change');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
