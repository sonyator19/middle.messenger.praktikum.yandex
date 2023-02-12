import form from '../../modules/chats/form/form.hbs';
import '../../modules/chats/form/form.css';

let fields = [
{
    name: 'mail',
    label: 'Почта',
    type: 'email',
    },
  {
    name: 'login',
    label: 'Логин',
    type: 'text',
  },
  {
    name: 'name',
    label: 'Имя',
    type: 'text',
  },
  {
    name: 'surname',
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
    name: 'password-2',
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
