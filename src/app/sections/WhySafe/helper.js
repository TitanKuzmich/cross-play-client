import codeWindow from "../../assets/lottie/codeWindow.json";
import browser from "../../assets/lottie/browser.json";
import lock from "../../assets/lottie/lock.json";
import toServer from "../../assets/lottie/toServer.json";

export const slides = [
    {
        title: "Не используем пароли",
        content: "Мы не получаем Ваши пароли. На наших серверах хранится только уникальный токен, полученный при авторизации, а не логин и пароль.",
        lottieOption: {
            loop: true,
            autoplay: true,
            animationData: toServer,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    },
    {
        title: "Безопасное соединение",
        content: "Все данные отправляются в зашифрованном виде на сервера музыкальных платформ.",
        lottieOption: {
            loop: true,
            autoplay: true,
            animationData: lock,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    },
    {
        title: "Выполнение в браузере",
        content: "Авторизация выполняется в Вашем браузере без возможности вмешательства третьей стороны.",
        lottieOption: {
            loop: true,
            autoplay: true,
            animationData: browser,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    },
    {
        title: "Открытый исходный код",
        content: "Исходный код сайта авторизации опубликован на GitHub и доступен для проверок.",
        lottieOption: {
            loop: true,
            autoplay: true,
            animationData: codeWindow,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        }
    }
]