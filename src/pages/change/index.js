import form from '../../modules/chats/user/user.hbs';
import '../../styles/user.css';

const fields = [
  {
    title: 'Почта',
    name: 'email',
    content: 'pochta@yandex.ru',
  },
  {
    title: 'Логин',
    name: 'login',
    content: 'ivanivanov',
  },
  {
    title: 'Имя',
    name: 'first_name',
    content: 'Иван',
  },
  {
    title: 'Фамилия',
    name: 'second_name',
    content: 'Иванов',
  },
  {
    title: 'Имя в чате',
    name: 'display_name',
    content: 'Иван',
  },
  {
    title: 'Телефон',
    name: 'phone',
    content: '+7 (909) 967 30 30',
  }
];

function render() {
    const html = form({ title: 'Иван', fields, change: true });

    const app = document.querySelector('#change');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
