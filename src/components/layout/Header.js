import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../../reducers/userSlice'

import { ReactComponent as Logo } from './Logo.svg'

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

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
