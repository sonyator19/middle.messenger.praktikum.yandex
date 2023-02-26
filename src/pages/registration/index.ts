// import Block from '../../utils/Block';
// import '../../modules/chats/form/form.css';
// import { Form } from '../../modules/chats/form/form';
// import { registrationData } from '../../../static/data/data';
// import form from '../../modules/chats/form/form.hbs';

// interface RegistrationPageProps {
//   title: string;
//   fields: Array<{name: string, label: string, type: string}>;
//   btn: string;
//   link: string;
// }

// export class RegistrationPage extends Block {
//   constructor(props: RegistrationPageProps) {
//     super('div', props);
//   }

//   init() {
//     this.children.form = new Form({
//       title: 'Регистрация',
//       fields: registrationData,
//       btn: 'Зарегистрироваться',
//       link: 'Войти',
//     });
//   }

//   render() {
//     return this.compile(form, this.props);
//   }
// }
