import Router from './src/utils/Router';
import { LoginPage } from './src/pages/Login';
import { SignUpPage } from './src/pages/SignUp';
import { MessengerPage } from './src/pages/Chats';
import { SettingsPage } from './src/pages/Settings';
import { Error404Page } from './src/pages/404';

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
        .use(Routes.Settings, SettingsPage)
        .use(Routes.Messenger, MessengerPage)
        .use(Routes.Error, Error404Page);

    Router.go(Routes.Index);
});
