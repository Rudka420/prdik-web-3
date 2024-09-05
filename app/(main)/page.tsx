import Hero from '@/Components/Hero';
import Header from '@/Components/Header';
import Sluzby from '@/Components/Sluzby';
import ProcMy from '@/Components/ProcMy';
import Postup from '@/Components/Postup';
import Recenze from '@/Components/Recenze';
import Kontakt from '@/Components/Kontakt';
import Footer from '@/Components/Footer';
import "../../styles/globals.css";
import 'boxicons/css/boxicons.min.css'




const MainPage = () => {
    return(
        <>
        <Header />
        <Hero />
        <Sluzby />
        <ProcMy />
        <Postup />
        <Recenze />
        <Kontakt />
        <Footer />
        </>
    )
}

export default MainPage;