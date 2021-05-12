import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';
import en from '../../public/i18n/en'
import vi from '../../public/i18n/vi'

const keyLang = 'NEXT_LOCALE';
const useTrans = () => {
    let { locale } = useRouter();
    const [ cookie, setCookie ] = useCookies([keyLang]);
    console.log(locale);

    if(cookie[keyLang] !== locale){
        setCookie(keyLang, locale, { path: "/" });
    }
    const trans = cookie[keyLang] === 'en' ? en : vi;

    return trans;
}

export default useTrans