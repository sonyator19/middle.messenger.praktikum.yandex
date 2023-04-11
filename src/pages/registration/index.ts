import { Form } from "../../modules/chats/form/form";

const root = document.querySelector('#registration')!;
const registrationPage = new Form({ 
    title: 'Регистрация', 
    fields: 'registration',
    btn: 'Зарегистрироваться', 
    link: 'Войти' 
});
root.append(registrationPage.getContent()!);
registrationPage.dispatchComponentDidMount();
