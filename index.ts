let menu = document.querySelector('.menu');
let tabs;
if (menu) {
    tabs = menu.querySelectorAll('.tab');
}
let pages = document.querySelectorAll('.page');

if (tabs) {
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            let target = tab.getAttribute('data-target');
    
            pages.forEach((page) => {
                page.classList.remove('active');
            })
    
            let element = document.querySelector('#' + target);
            if (element) {
                element.classList.add('active');
            }
        })
    })
}

import { HomePage } from './src/pages/home';
import { Form } from './src/modules/chats/form/form';
import { User } from './src/modules/chats/user/user';
import { registrationData, authorizationData, profileData } from './static/data/data';

window.addEventListener('DOMContentLoaded', () => {
//   const root = document.querySelector('#app')!;
//   const homePage = new HomePage({ title: 'Home page' });
//   root.append(homePage.getContent()!);
//   homePage.dispatchComponentDidMount();

  const root = document.querySelector('#registration')!;
  const registrationPage = new Form({ title: 'Регистрация', fields: registrationData, btn: 'Зарегистрироваться', link: 'Войти' });
  root.append(registrationPage.getContent()!);
  registrationPage.dispatchComponentDidMount();

  const auth = document.querySelector('#authorization')!;
  const authorizationPage = new Form({ title: 'Вход', fields: authorizationData, btn: 'Авторизоваться', link: 'Нет аккаунта?' });
  auth.append(authorizationPage.getContent()!);
  authorizationPage.dispatchComponentDidMount();

  const profile = document.querySelector('#profile')!;
  const profilePage = new User({ name: 'Иван', fields: profileData, btns: true });
  profile.append(profilePage.getContent()!);
  profilePage.dispatchComponentDidMount();
});
