import { selectStep } from '../../reducers/stepperSlice'
import { useAppSelector } from '../../app/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Stepper.css'

const Stepper = () => {
    const step = useAppSelector(selectStep)

    return (
        <div className="relative mx-auto mt-12 flex w-full max-w-2xl justify-center px-4">
            <div className="step step-one">
                <div className="icon inline-block">
                    <div className={`roundel ${step === 0 || step > 0 ? 'active' : ''}`}>
                        {(() => {
                            if (step > 0) {
                                return (
                                    <FontAwesomeIcon
                                        icon={solid('check')}
                                        className="rounded-full text-xl text-white"
                                    />
                                )
                            } else {
                                return (
                                    <span className="h-4 w-4 rounded-full bg-white shadow-md"></span>
                                )
                            }
                        })()}
                    </div>
                    <span>Your Details</span>
                </div>
            </div>
            <div className="step step-two">
                <div className="icon inline-block">
                    <div className={`roundel ${step === 1 || step > 1 ? 'active' : ''}`}>
                        {(() => {
                            if (step > 1) {
                                return (
                                    <FontAwesomeIcon
                                        icon={solid('check')}
                                        className="rounded-full text-xl text-white"
                                    />
                                )
                            } else if (step === 1) {
                                return (
                                    <span className="h-4 w-4 rounded-full bg-white shadow-md"></span>
                                )
                            } else {
                                return <span className="h-4 w-4 rounded-full bg-gray-600"></span>
                            }
                        })()}
                    </div>
                    <span>Select Delivery</span>
                </div>
            </div>
            <div className="step step-three">
                <div className="icon inline-block">
                    <div className={`roundel ${step >= 2 && 'active'}`}>
                        {(() => {
                            if (step > 2) {
                                return (
                                    <FontAwesomeIcon
                                        icon={solid('check')}
                                        className="rounded-full text-xl text-white"
                                    />
                                )
                            } else if (step === 2) {
                                return (
                                    <span className="h-4 w-4 rounded-full bg-white shadow-md"></span>
                                )
                            } else {
                                return <span className="h-4 w-4 rounded-full bg-gray-600"></span>
                            }
                        })()}
                    </div>
                    <span>Payment</span>
                </div>
            </div>
        </div>
    )
}

export default Stepper
