import { Provider } from "react-redux";
import { useStore } from "../store";
import "../utils/globals.scss";
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Nprogress from 'nprogress'

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter()
    
    useEffect(() => {
        const load = (url) => {
            Nprogress.start()
        }
        const unload = () => {
            setTimeout(() => Nprogress.done(), 500)
        }
        
        router.events.on('routeChangeStart', load)
        router.events.on('routeChangeComplete', unload)
        router.events.on('routeChangeError', unload)

        return () => {
            router.events.off('routeChangeStart', load)
            router.events.off('routeChangeComplete', unload)
            router.events.off('routeChangeError', unload)
        }
    }, [router])
    
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
