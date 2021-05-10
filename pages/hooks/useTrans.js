import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';
import en from '../../public/i18n/en'
import vi from '../../public/i18n/vi'

const keyLang = 'lang';
const useTrans = () => {
    let { locale } = useRouter();
    const [ cookie, setCookie ] = useCookies([keyLang]);
    console.log(locale);

    if(cookie[keyLang] !== locale){
        // console.log('set cookie');
        setCookie(keyLang, locale);
    }
    // else{
    //     console.log('unset cookie');
    // }
    // const trans = cookie === 'vi' ? vi : en;
    const trans = cookie[keyLang] === 'en' ? en : vi;
    // console.log(trans);

    return trans;
}

export default useTrans