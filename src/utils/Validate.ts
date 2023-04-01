export enum validateField {
    text = 'text',
    email = 'email',
    tel = 'tel'
}
  
export type Validation = {
    type: string;
    value: string;
};
  
export const Validate = (rules: Validation[]) => {
    const errorMessage: Record<string, string> = {};

    for (let i = 0; i < rules.length; i += 1) {
        const { value, type } = rules[i];

        switch (type) {
            case validateField.text:
                if (value.length === 0) {
                    errorMessage[type] = 'Заполние поле';
                }
                break;

            case validateField.tel:
                const phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

                if (value.length === 0) {
                    errorMessage[type] = 'Заполние поле';
                } else if (!phoneRegexp.test(value)) {
                    errorMessage[type] = 'Некорректный номер телефона';
                }

                break;
            
            case validateField.email:
                const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

                if (value.length === 0) {
                    errorMessage[type] = 'Заполние поле';
                } else if (!emailRegexp.test(value)) {
                    errorMessage[type] = 'Некорректный email';
                }

                break;
        }
    }

    return errorMessage;
};
