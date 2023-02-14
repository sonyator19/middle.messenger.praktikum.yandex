import main from './main.hbs';
import '../../styles/main.css';

const dialogs = [
  {
    img: '',
    name: 'Андрей',
    message: 'Изображение',
  },
  {
    img: '',
    name: 'Киноклуб',
    message: 'Вы: стикер',
  },
  {
    img: '',
    name: 'Илья',
    message: 'Друзья, у меня для вас особенный выпуск новостей!...',
  },
  {
    img: '',
    name: 'Вадим',
    message: 'Вы: Круто!',
  },
  {
    img: '',
    name: 'тет-а-теты',
    message: 'И Human Interface Guidelines и Material Design рекомендуют...',
  },
  {
    img: '',
    name: '1, 2, 3',
    message: 'Миллионы россиян ежедневно проводят десятки часов свое...',
  },
  {
    img: '',
    name: 'Design Destroyer',
    message: 'В 2008 году художник Jon Rafman начал собирать...',
  },
  {
    img: '',
    name: 'Day.',
    message: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
  },
  {
    img: '',
    name: 'Стас Рогозин',
    message: 'Можно или сегодня или завтра вечером.',
  },
];

function render() {
    const html = main({ dialogs });

    const app = document.querySelector('#main');
    app.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    render();
})
