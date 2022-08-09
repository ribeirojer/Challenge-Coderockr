import { useState } from "react"
import { Link } from "react-router-dom"
import { Wrapper, Logo, Navbar, Posts, Contact, Imagem } from "../styles/HeaderStyle"
import { Svg } from "../styles/ModalStyle"
import Modal from "react-modal"
import ModalContent from "./ModalContent"

type Props = {}

const Header = (props: Props) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {//estilos do modal
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      width: '42vw',
      borderRadius: '0px',
      padding: '3rem 6rem',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 3,
    },
  };

  if(window.outerWidth <= 360){//responsividade do modal
    customStyles.content.padding = '1rem 2rem';
    customStyles.content.width = '80vw';
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Wrapper>
          <Logo><Link to={"/"}>Rockr Blog</Link></Logo>
          <Navbar>
              <Link to={"/"}><Posts>Posts</Posts></Link>
              <Contact onClick={openModal}>Contact</Contact>
          </Navbar>
          <Imagem onClick={openModal} src="https://coderockr.com/assets/images/hand-white.svg" alt="" />
      </Wrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" style={customStyles}>
        <Svg onClick={closeModal} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="#2D2D2D"/></Svg>
        <ModalContent />
      </Modal>
    </>
  )
}

export default Header;