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

import { User } from './src/modules/chats/user/user';
import { profileData } from './static/data/data';

window.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('#profile')!;
    const profilePage = new User({ 
        name: 'Иван', 
        fields: profileData, 
        btns: true 
    });
    profile.append(profilePage.getContent()!);
    profilePage.dispatchComponentDidMount();
});
