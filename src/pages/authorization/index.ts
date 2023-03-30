import { Form } from "../../modules/chats/form/form";

const auth = document.querySelector('#authorization')!;
const authorizationPage = new Form({ 
    title: 'Вход', 
    fields: 'authorization',
    btn: 'Авторизоваться', 
    link: 'Нет аккаунта?',
});
auth.append(authorizationPage.getContent()!);
authorizationPage.dispatchComponentDidMount();
