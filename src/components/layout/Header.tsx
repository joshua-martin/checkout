import { selectUser, logout } from '../../reducers/userSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ReactComponent as Logo } from './Logo.svg'

const Header = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

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
