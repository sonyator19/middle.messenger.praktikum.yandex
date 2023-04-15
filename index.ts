import Router from './src/utils/Router';
import { LoginPage } from './src/pages/Login';
import { SignUpPage } from './src/pages/SignUp';
import { MessengerPage } from './src/pages/main';

enum Routes {
    Index = "/",
    SignUp = "/sign-up",
    Settings = "/settings",
    Messenger = "/messenger",
    Error = "/404",
}

window.addEventListener("DOMContentLoaded", async () => {
    Router.use(Routes.Index, LoginPage)
        .use(Routes.SignUp, SignUpPage)
        // .use(Routes.Settings, SettingsPage)
        .use(Routes.Messenger, MessengerPage)
        // .use(Routes.Error, ErrorPage);

    Router.go(Routes.Index);
});


// import { User } from './src/modules/chats/user/user';
// import { profileData } from './static/data/data';

// window.addEventListener('DOMContentLoaded', () => {
//     const profile = document.querySelector('#profile')!;
//     const profilePage = new User({ 
//         name: 'Иван', 
//         fields: profileData, 
//         btns: true 
//     });
//     profile.append(profilePage.getContent()!);
//     profilePage.dispatchComponentDidMount();
// });
