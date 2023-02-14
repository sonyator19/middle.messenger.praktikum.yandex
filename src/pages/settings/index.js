import form from '../../modules/chats/user/user.hbs';
import '../../styles/user.css';

const fields = [
  {
    title: 'Почта',
    content: 'pochta@yandex.ru',
  },
  {
    title: 'Логин',
    content: 'ivanivanov',
  },
  {
    title: 'Имя',
    content: 'Иван',
  },
  {
    title: 'Фамилия',
    content: 'Иванов',
  },
  {
    title: 'Имя в чате',
    content: 'Иван',
  },
  {
    title: 'Телефон',
    content: '+7 (909) 967 30 30',
  }
];

function render() {
    const html = form({ name: 'Иван', fields, btns: true });

    const app = document.querySelector('#profile');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
