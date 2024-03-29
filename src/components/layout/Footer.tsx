import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
    return (
        <footer className="mt-auto bg-gray-200 p-4">
            <div className="flex justify-between">
                <div className="flex space-x-2 text-3xl">
                    <FontAwesomeIcon icon={brands('cc-visa')} />
                    <FontAwesomeIcon icon={brands('cc-mastercard')} />
                    <FontAwesomeIcon icon={brands('cc-amex')} />
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="transition-colors hover:text-blue-500">
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-colors hover:text-blue-500">
                            Privacy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="transition-colors hover:text-blue-500">
                            Delivery
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
