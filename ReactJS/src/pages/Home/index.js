import React, { Component } from "react";
import axios from "axios";

import { Header, Footer, Content } from "../../components";

import "./style.css";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      people: "Fadly",
      tempat: "Pacific Place",
      tanggal: "19 November 2018",
      actors: []
    };
  }

  componentDidMount() {
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      let data = response.data.results;
      let names = data.map(datum => datum.name);
      this.setState({
        actors: names
      });
      return response;
    })
    .then(response => axios.get(response.data.next))
    .then(response => {
      let data = response.data.results;
      let names = data.map(datum => datum.name);
      this.setState({
        actors: names
      });
    })
    .catch(err => {
      this.setState({
        actors: ["Error Loading"]
      });
    });

    // setTimeout(() => {
    //   this.setState({
    //     tanggal: "19 November 2018"
    //   });
    // }, 3000);

    // setTimeout(() => {
    //   this.setState({
    //     tempat: "GoWork"
    //   });
    // }, 5000);
  }

  handleClickHeader() {
    const newPeople = this.state.people === "Fadly" ? "Shabrina" : "Fadly"
    this.setState({
      people: newPeople
    });
  }

  handleClickContent() {
    const tempat = this.state.tempat === "Pacific Place" ? "Kota Tua" : "Pacific Place"
    const tanggal = this.state.tanggal === "19 November 2018" ? "20 November 2018" : "19 November 2018"
    this.setState({
      tempat,
      tanggal
    });
  }

  render() {
    let { people, tempat, tanggal, actors } = this.state;

    return (
      <div>
        <Header people={people} onClick={() => this.handleClickHeader()} />

        <Content
          location={tempat}
          date={tanggal}
          onClick={() => this.handleClickContent()}
          actors={actors}
        />

        <Footer footer="Footer" />
      </div>
    );
  }
}
