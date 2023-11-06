import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import avichiilogo from "../../assets/images/Aviciilogo.png";
function Header2() {
  return (
    <Navbar
      style={{ backgroundColor: "#0C0E0C", color: "white" }}
      expand="lg"
      className="bg-body-tertiary"
    >
      <a href="/">
        <img
          alt="logo"
          style={{ height: "75px", marginLeft: "20px", marginTop: "0px" }}
          src={avichiilogo}
        ></img>
      </a>
      <Container style={{ color: "white" }} fluid>
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" style={{ marginLeft: "50%" }}>
            <Form.Control
              style={{ justifyContent: "flex-end" }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header2;
