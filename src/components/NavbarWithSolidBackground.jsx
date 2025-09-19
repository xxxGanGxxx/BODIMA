import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">EXPLORE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">SAVED</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">CONTACT US</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default AlignmentExample;