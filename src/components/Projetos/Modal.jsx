import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../../assets/css/components/projetos.css";
function Modals(props) {
  return (
    <Modal
      {...props}
      width="400px"
      className="modal-style"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='modal-header'>
        <Modal.Title  id="contained-modal-title-vcenter">
        {props.titulo}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
      <Modal.Title className="titulo-modal" id="contained-modal-title-vcenter">
        Resumo
        </Modal.Title>
        <p>
        {props.resumo}
        </p>
        <Modal.Title className="titulo-modal" id="contained-modal-title-vcenter">
        Tecnologias
        </Modal.Title>
        <p>
        {props.tecnologias}
        </p>
        <Modal.Header>
        
      </Modal.Header>
        <div className="botoes-modal">
        
        <Button target="_blank" href={props.git} className="botao-modal">Repositório</Button>
        {props.url !== "" &&(
            <Button target="_blank" href={props.url} className="botao-modal">Ir para o site</Button>
        )}
        
        </div>
      </Modal.Body>
      
        
       
      
    </Modal>
  );
}

export default Modals