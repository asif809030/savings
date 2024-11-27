import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditBox = ({show, toggle, data, index}) => {
    const onSave = () => {
      toggle();
      alert(index)
    };

  return (
    <>

      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formTextarea">
              <Form.Label>Your Comment</Form.Label>
              <Form.Control as="textarea" defaultValue={data || ""} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
}

export default EditBox;
