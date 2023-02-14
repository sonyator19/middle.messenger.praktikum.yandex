import form from '../../modules/chats/form/form.hbs';
import '../../styles/form.css';

const fields = [
{
    name: 'email',
    label: 'Почта',
    type: 'email',
    },
  {
    name: 'login',
    label: 'Логин',
    type: 'text',
  },
  {
    name: 'first_name',
    label: 'Имя',
    type: 'text',
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    type: 'text',
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'phone',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Пароль (ещё раз)',
    type: 'text',
  }
];

function render() {
    const html = form({ title: 'Регистрация', fields, btn: 'Зарегистрироваться', link: 'Войти' });

    const app = document.querySelector('#registration');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
