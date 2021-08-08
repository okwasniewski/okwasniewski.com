import Link from 'next/link'
const Header = () => {
    return (
        <header className="w-full px-2 py-8 bg-white shadow-sm">
            <div className="container flex justify-between mx-auto">
                <Link href="/"><p className="text-xl font-bold cursor-pointer">okwasniewski</p></Link>
                <nav>Menu</nav>
            </div>
        </header>
    );
}

export default Header;