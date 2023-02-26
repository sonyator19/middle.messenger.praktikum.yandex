export enum validateField {
    text = 'text',
    phone = 'phone',
    email = 'email'
}
  
export type validation = {
    name: string;
    value: string;
};
  
export const validate = (rules: validation[]) => {
    const errorMessage: Record<string, string> = {};

    for (let i = 0; i < rules.length; i += 1) {
        const { value, name } = rules[i];

        switch (name) {
            case validateField.text:
                if (value.length === 0) {
                    errorMessage[name] = 'Заполние поле';
                }
                break;

            case validateField.phone:
                const phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

                if (value.length === 0) {
                    errorMessage[name] = 'Заполние поле';
                } else if (!phoneRegexp.test(value)) {
                    errorMessage[name] = 'Некорректный номер телефона';
                }
                break;
            
            case validateField.email:
                const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

                if (value.length === 0) {
                    errorMessage[name] = 'Заполние поле';
                } else if (!emailRegexp.test(value)) {
                    errorMessage[name] = 'Некорректный email';
                }
                break;
        }
    }

    return errorMessage;
};
