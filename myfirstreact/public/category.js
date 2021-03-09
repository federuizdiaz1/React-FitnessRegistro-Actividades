import React, { Component } from 'react';



class Category extends Component {
  render() {
    const buscadores = [
      'http://www.google.com',
      'http://www.bing.com',
      'http://www.yahoo.com'];


    return (
      <div className='Category'>

        <li><h3>{this.props.name}</h3>
          <ul>

          </ul>
        </li>
      </div>
    );


  }
}


export default Category;