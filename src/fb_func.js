import firebaseApp from "./firebase_set.js"
import React, { Component } from 'react';

class Fb_func extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objProducts: null,
      sellerName: "add seller Name",
      productsName: "add seller products Name",
      productsPrice: 0,
    };
    this._db = firebaseApp.database()
  }

  componentDidMount() {
    this.getInfo()
  }

  pullDataFromfirebaseApp = (path, cb) => {
    this._db.ref(path).once('value').then((snapshot) => {
      if (typeof cb === "function")
        cb(snapshot.val())
    });
  }

  pushDataTofirebaseApp = (path, value) => {
    this._db.ref(path).set(value);
  }


  handleChangeN = (event) => {
    this.setState({ sellerName: event.target.value });
  }
  handleChangePN = (event) => {
    this.setState({ productsName: event.target.value });
  }
  handleChangePP = (event) => {
    this.setState({ productsPrice: event.target.value });
  }

  getInfo = () => {
    this.pullDataFromfirebaseApp("/products/", (obj) => { this.setState({ objProducts: obj }) });
  }

  setInfo = () => {
    this.pushDataTofirebaseApp("/Sellers/"+this.state.sellerName+"/"+this.state.productsName,this.state.productsPrice)
    this.pushDataTofirebaseApp("/products/"+this.state.productsName+"/"+this.state.sellerName,this.state.productsPrice)
     
  }

  render() {
    return (
      <div>
        <h1>CarmelExpress</h1>
        {/* {this.state.objProducts && console.log(this.state.objProducts)} */}

        <label>
          Add:
          <input type="text" value={this.state.sellerName} onChange={this.handleChangeN} />
          <input type="text" value={this.state.productsName} onChange={this.handleChangePN} />
          <input type="number" value={this.state.productsPrice} onChange={this.handleChangePP} />
        </label>
        {/* <input type="submit" value="Submit" onClick={this.setInfo} /> */}
        <button onClick={this.setInfo}>Submit</button>

      </div>
    );
  }
}

export default Fb_func;