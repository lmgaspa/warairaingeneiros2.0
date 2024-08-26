import Head from 'next/head';
import NosotrosPage from "./nosotros"
import ServiciosPage from "./servicios"
import PortafolioPage from "./portafolio"
import EquipoPage from "./equipo"
import ContactoPage from "./contacto"

const App: React.FC = () => {
    return (
        <main>
            <Head>
                <title>Waraira Ingenieros</title>
                <meta name="description" content="Waraira Ingenieros, empresa de ingeniería y constucción em Matucana, Huarochiri, Peru" />
            </Head>
            <NosotrosPage />
            <ServiciosPage />
            <PortafolioPage />
            <EquipoPage />
            <ContactoPage />
        </main>
    )
}

export default App