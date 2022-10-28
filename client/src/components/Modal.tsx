import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

interface ModalProps {
  title: string,
  handleClose: () => void,
  children: React.ReactNode,
}

const Modal = ({title, handleClose, children}: ModalProps):JSX.Element => {
  return (
    <>
      <div className='modal'>
        <div className="modal-background" onClick={handleClose}></div>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">{title}</h1>
            <FontAwesomeIcon className='modal-close-x' icon={faTimes} size='2x' onClick={handleClose}/>
          </div>
          <div className="modal-main">
            {children}
          </div>
          <div className='modal-footer'>
            <button className="modal-close" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal