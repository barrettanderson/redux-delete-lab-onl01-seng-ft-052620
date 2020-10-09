import React, { Component } from 'react';

class Band extends Component {
  render() {
    const {name, id, deleteBand} = this.props
    console.log(this.props)
    return(
      <div>
        <li>
          {name} <br/>
        </li>
          <button onClick={() => deleteBand(id)}>DELETE</button>
      </div>
    );
  }
};

export default Band;
