import Link from 'next/link';

function Home() {
    return <div>
        <h1>Home Top</h1>

        <Link href="/sobre">
        <a>Acessar Página Sobre teste</a>
        </Link>
        </div>        
} 

export default Home