import Block from '../../../utils/Block';
import form from '../../chats/form/form.hbs';
import '../../chats/form/form.css';
import { validate, validation } from '../../../utils/Validate';

interface FormProps {
    title: string;
    fields: Array<{name: string, label: string, type: string}>;
    btn: string;
    link: string;
    events?: any;
  }
  
export class Form extends Block {
    constructor(props: FormProps) {
        super('div', {
            ...props,
            events: {
              submit: (e: Event) => {
                e.preventDefault();
      
                const submittedData = {} as any;
                const fieldValues: validation[] = [];
                const formData = new FormData(e.target as HTMLFormElement);
      
                formData.forEach((value, key) => {
                  fieldValues.push({ name: key, value: value.toString() });
                  submittedData[key] = value;
                });
      
                const errorsObj = validate(fieldValues);
      
                if (Object.keys(errorsObj).length > 0) {
                  Object.keys(errorsObj).forEach((key) => {
                    if (this.children[key]) {
                      this.children[key].children.error.setProps({
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
          }
      );
    }

    render() {
        return this.compile(form, this.props);
    }
}
