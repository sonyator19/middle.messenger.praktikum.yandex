import Block from '../../../utils/Block';
import form from '../../chats/form/form.hbs';
import { Input, InputProps } from '../../../components/input/index';
import '../../chats/form/form.css';
import { Validate, Validation } from '../../../utils/Validate';
import { InputChecked } from '../../../components/inputChecked';

interface FormProps {
  title: string;
  fields: string;
  btn: string;
  link: string;
  events?: Record<string, (e?: Event) => unknown>;
}

export class Form extends Block {
  private inputs: Record<string, Input>;

  constructor(props: FormProps) {
    super('div', {
      ...props,
      events: {
        submit: (e: Event) => {
          e.preventDefault();

          const submittedData = {} as any;
          const fieldValues: Validation[] = [];
          const formData = new FormData(e.target as HTMLFormElement);

          formData.forEach((value, key) => {
            fieldValues.push({ name: key, value: value.toString() });
            submittedData[key] = value;
          });

          const errorsObj = Validate(fieldValues);

          if (Object.keys(errorsObj).length > 0) {
            Object.keys(errorsObj).forEach((key) => {
              if (this.inputs[key]) {
                this.inputs[key].children.error.setProps({
                  text: errorsObj[key],
                });
              }
            });
            console.log('Ошибка в форме');
            return;
          }

          console.log('Данные из формы: ', submittedData);
        },
      },
    });
  }

  init() {
    if (this.props.fields === 'authorization') {
      this.children.login = new InputChecked({
        name: 'login',
        label: 'Логин',
        type: 'text',
      });
  
      this.children.password = new InputChecked({
        name: 'password',
        label: 'Пароль',
        type: 'text',
      });
    } else if (this.props.fields === 'registration') {
      this.children.email = new InputChecked({
        name: 'email',
        label: 'Почта',
        type: 'email',
      });
  
      this.children.login = new InputChecked({
        name: 'login',
        label: 'Логин',
        type: 'text',
      });
  
      this.children.first_name = new InputChecked({
        name: 'first_name',
        label: 'Имя',
        type: 'text',
      });
  
      this.children.second_name = new InputChecked({
        name: 'second_name',
        label: 'Фамилия',
        type: 'text',
      });
  
      this.children.phone = new InputChecked({
        name: 'phone',
        label: 'Телефон',
        type: 'phone',
      });
  
      this.children.password = new InputChecked({
        name: 'password',
        label: 'Пароль',
        type: 'text',
      });
  
      this.children.password_add = new InputChecked({
        name: 'password',
        label: 'Пароль (ещё раз)',
        type: 'text',
      });
    }
  }

  render() {
    return this.compile(form, this.props);
  }
}
