import Link from 'next/link';

function Home() {
    return <div>
        <h1>Home Top</h1>

        <Link href="/index">
        <a href="/sobre">Acessar Página Sobre</a>
        </Link>
        </div>        
}

export default Home