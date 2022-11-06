import { ReactComponent as Logo } from './Logo.svg';

const Header = () => {
    return (
        <header className='p-4 shadow-lg'>
            <div className='flex flex-row justify-between items-center'>
                <Logo />
            </div>
        </header>
    )
}

export default Header

