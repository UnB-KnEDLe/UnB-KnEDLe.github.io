import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

export default function Modal({children, showSignal, setShowSignal, style}){
    const onCloseModal = () => setShowSignal(false)

    return (
        <div className={showSignal ? "modal" : "hide"}>
            <div className="modal-content container">
                <div className="modal-button">
                    <button onClick={ onCloseModal }><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}