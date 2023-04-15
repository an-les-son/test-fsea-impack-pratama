import React, { Component } from "react";
import CrudTable from "./Table";
import CrudForm from "./Form";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        product: [
          ...this.state.product,
          {
            id: this.state.product.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const productTakDiPilih = this.state.product
        .filter((product) => product.id !== this.state.id)
        .map((filterproduct) => {
          return filterproduct;
        });

      this.setState({
        product: [
          ...productTakDiPilih,
          {
            id: this.state.product.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const productDiPilih = this.state.product
      .filter((product) => product.id === id)
      .map((filterproduct) => {
        return filterproduct;
      });

    this.setState({
      nama: productDiPilih[0].nama,
      deskripsi: productDiPilih[0].deskripsi,
      harga: productDiPilih[0].harga,
      id: productDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const productBaru = this.state.product
      .filter((product) => product.id !== id)
      .map((filterproduct) => {
        return filterproduct;
      });

    this.setState({
      product: productBaru,
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-4">
          <h2>List Product</h2>
          <CrudTable product={this.state.product} editData={this.editData} hapusData={this.hapusData} />
          <CrudForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
