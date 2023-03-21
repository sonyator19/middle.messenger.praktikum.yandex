import Block from '../../../utils/Block';
import form from '../../chats/form/form.hbs';
import { Input, InputProps } from '../../../components/input/index';
import '../../chats/form/form.css';
import { Validate, Validation } from '../../../utils/Validate';

interface FormProps {
    title: string;
    fields: InputProps[];
    btn: string;
    link: string;
    events?: Record<string, (e?: Event) => unknown>;
  }
  
export class Form extends Block {
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
    });
  };

  appendChild(child: Block) {
    //@ts-ignore
    this.getContent().appendChild(child.getContent());
  }

  render() {
    const { ...props } = this.props;

    const inputs = props.fields.map((field: any) => {
      const input = new Input(field);
  
      input.setProps({
        events: {
          focus: () => field.onFocus(field.name),
          blur: () => field.onBlur(field.name),
        },
      });
  
      this.appendChild(input);
  
      return input;
    });

    return this.compile(form, {
      ...props,
      inputs
    });
  }
}
