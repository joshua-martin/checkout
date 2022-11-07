import { ReactComponent as Logo } from './Logo.svg'
import { selectUser, logout } from '../../reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header className="p-4 shadow-lg">
            <div className="flex flex-row items-center justify-between">
                <Logo />
                {user.loggedIn && (
                    <button className="font-bold text-blue-500" onClick={logoutHandler}>
                        Log Out
                    </button>
                )}
            </div>
        </header>
    )
}

export default Header
