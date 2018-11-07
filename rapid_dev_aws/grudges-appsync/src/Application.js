import React, { Component } from 'react';
import NewGrudge from './NewGrudge';
import Grudges from './Grudges';
import './Application.css';

import { API, graphqlOperation } from 'aws-amplify';
import { ListGrudges, CreateGrudge } from './graphql';

class Application extends Component {
  state = {
    grudges: [],
  };

  componentDidMount() {
    API.graphql(graphqlOperation(ListGrudges)).then(response => {
      // console.log({ response });
      const grudges = response.data.listGrudges.items;
      this.setState({ grudges });
    }).catch(console.error);
  }

  addGrudge = grudge => {
    API.graphql(graphqlOperation(CreateGrudge, grudge)).then(response => {
      const newGrudge = response.data.createGrudge;
      this.setState({ grudges: [newGrudge, ...this.state.grudges] });
    });
  };

  removeGrudge = grudge => {
    this.setState({
      grudges: this.state.grudges.filter(other => other.id !== grudge.id),
    });
  };

  toggle = grudge => {
    const othergrudges = this.state.grudges.filter(
      other => other.id !== grudge.id,
    );
    const updatedGrudge = { ...grudge, avenged: !grudge.avenged };
    this.setState({ grudges: [updatedGrudge, ...othergrudges] });
  };

  render() {
    const { grudges } = this.state;
    const unavengedgrudges = grudges.filter(grudge => !grudge.avenged);
    const avengedgrudges = grudges.filter(grudge => grudge.avenged);

    return (
      <div className="Application">
        <NewGrudge onSubmit={this.addGrudge} />
        <Grudges
          title="Unavenged Grudges"
          grudges={unavengedgrudges}
          onCheckOff={this.toggle}
          onRemove={this.removeGrudge}
        />
        <Grudges
          title="Avenged Grudges"
          grudges={avengedgrudges}
          onCheckOff={this.toggle}
          onRemove={this.removeGrudge}
        />
      </div>
    );
  }
}

export default Application;