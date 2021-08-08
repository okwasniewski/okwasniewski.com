import Link from 'next/link'

interface ButtonProps {
    href: string,
    children: React.ReactNode,
    secondary?: Boolean
}

const Button = ( { href, children, secondary = false } : ButtonProps ) => { 
    return(
        <Link href={href}>
        <a className={`rounded-full px-6 py-3 mr-2 font-medium transition border-blue-500 transform ${secondary ? 'text-blue-500  border-2 hover:text-white hover:bg-blue-500' : 'text-white bg-blue-500'} `}>{children}</a>
        </Link>
    )
}

export default Button