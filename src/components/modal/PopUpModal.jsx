import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  

const PopUpModal = () => {
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" className="nav-btn" onClick={handleShow}>
        Join Us
        </Button>
  
        <Modal show={show} onHide={handleClose} className="onboarding">
          <Modal.Header closeButton>
            <Modal.Title ><h2 className='onboarding-title'>GET 5% OFF JOINING FEE</h2></Modal.Title >
          </Modal.Header>
          <Modal.Footer>
            <Link to={"https://ifitness.gymmasteronline.com/portal/signup/details/f91100f7420cb3fa3366f3f1d85ef57d?src=purchase&session=eyJsYW5ndWFnZSI6ImVuX1VTIiwiaXBfYWRkciI6IjEwMi44OS4zMy40OSJ9.ZmOG4Q.AcQ_OukW8tBzKglWA6B1eXUe2Rw"}><Button variant="secondary" className="onboarding-signup">
             New Member
            </Button></Link>
            <Link to={"https://ifitness.gymmasteronline.com/portal/login?session=.eJwVkG1rwjAUhf9KyId9kr7YWq0gQ2EbOqRop_UFKTG9aTOTtCQpomP_fdnX5xzuPef8YEFU3ZMa8BSDKnc5HmDelaSqtCNhMPQmqRdFXpw6wRJdg-21cFJjbWemvs8ZtwqM8eqHlMRY0K0SXIFHW-l3rbZE-ITStlfWd1clyCto0_BOA_NZGoZBwMbxMKDXiJEoShIWsbCajICNxtWr0XTW9Zo2xMCLcW94q2bwWJljMVJV8a5O-TJZyn1_CPdfS37n5LBgx2J7o9zx77f7msdxlsfP9SMOsnyVeieZfcQbb043ZdbfioldPD9rUcyTRQiHHQy3d1e0ZIKYBgyens-4cguBdvTY9kj2xqIrINHWNVSIK2Rb5Pq5aMg23KDObTlAnQCX-N_lLB6-XH7_AC08efY.ZmOHEA.8FhyDZDVFjmJRfBzxwqVRh2TkUE"}><Button variant="primary"  className="onboarding-login">
              Current Member
            </Button></Link>
          </Modal.Footer>
        </Modal>

      </>
    )
  }

export default PopUpModal