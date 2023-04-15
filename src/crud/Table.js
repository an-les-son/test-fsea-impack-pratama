import React from "react";
import { Table, Button } from "react-bootstrap";

const CrudTable = ({ product, editData, hapusData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Code Product</th>
          <th>Nama Product</th>
          <th>Deskripsi Product</th>
          <th>Harga Product</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {product.map((product, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{product.nama}</td>
              <td>{product.deskripsi}</td>
              <td>Rp.{product.harga}</td>
              <td>
                <Button variant="warning" type="submit" onClick={() => editData(product.id)}>
                  Ubah
                </Button>
                <Button className="ms-2" variant="danger" type="submit" onClick={() => hapusData(product.id)}>
                  Hapus
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CrudTable;
