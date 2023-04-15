import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const CrudForm = ({ id, nama, deskripsi, harga, handleChange, handleSubmit }) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Form Ubah Data Product" : "Form Tambah Product Baru"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Product</Form.Label>
              <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Deskripsi Product</Form.Label>
              <Form.Control as="textarea" rows={3} name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Harga Product</Form.Label>
              <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {id ? "Ubah" : "Tambah"}
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CrudForm;
