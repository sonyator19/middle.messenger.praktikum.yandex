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
    });
  };

  onFocus(name: string) {
    const fieldIndex = this.props.fields.findIndex((field:any) => field.name === name);
    if (fieldIndex >= 0) {
      const fieldValue = this.props.fields[fieldIndex].value || '';
      const errorsObj = validate([{ name, value: fieldValue }]);

      if (errorsObj[name]) {
        this.props.fields[fieldIndex].error = errorsObj[name];
        this.children[fieldIndex].setProps({ error: errorsObj[name] });
      }
    }
  }

  onBlur(name: string) {
    if (this.children[name]) {
      const fieldValue = this.props.fields.find((field:any) => field.name === name)?.value || '';
      const errorsObj = validate([{ name, value: fieldValue }]);

      if (Object.keys(errorsObj).length > 0) {
        this.children[name].children.error.setProps({ text: errorsObj[name] });
      } else {
        this.children[name].children.error.setProps({ text: '' });
      }
    }
  }

  render() {
    const { onFocus, onBlur, ...props } = this.props;

    const fields = props.fields.map((field: any) => {
      const fieldProps = {
        ...field,
        onFocus: onFocus ? () => onFocus(field.name) : null,
        onBlur: onBlur ? () => onBlur(field.name) : null,
      };
      delete fieldProps.error;
      return fieldProps;
    });

    return this.compile(form, {
      ...props,
      fields,
    });
  }
}
