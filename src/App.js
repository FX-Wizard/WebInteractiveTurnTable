import React, {Component} from 'react';
import Viewport from './viewport';

class App extends Component {
  constructor(props) {
    super(props);
    this.normal = this.normal.bind(this)
    this.bluesmobile = this.bluesmobile.bind(this)
    this.policePackage = this.policePackage.bind(this)
    this.state = {
      paint: "normal",
      accessories: "none",
      wheels: "normal"
    }
  }
  componentDidMount() {
    this.view = new Viewport ({
      output: document.getElementById('viewElement')
    });
  }

  componentDidUpdate() {
    this.view.test()
  }

  normal() {
    if (this.state.accessories !== "normal") {
      this.view.hideObject("policePackage");
      this.view.hideObject("bluesBrothers");
      this.view.showObject("hubcaps");
      this.state.accessories = "normal";
    }
  }

  policePackage() {
    if (this.state.accessories !== "policePackage") {
      this.view.showObject("policePackage");
      this.view.hideObject("bluesBrothers");
      this.view.hideObject("hubcaps");
      this.state.accessories = "policePackage";
    }
  }

  bluesmobile() {
    if (this.state.accessories !== "bluesBrothers") {
      this.view.hideObject("policePackage");
      this.view.showObject("bluesBrothers");
      this.view.hideObject("hubcaps");
      this.state.accessories = "bluesBrothers";
    }
  }

  render() {
    return (
      <div className="container">
        <div className="content" id="content">
          <div className="buttonLayout">
            <button onClick={this.normal} id="changeColourBtn">Normal</button>
            <button onClick={this.policePackage} id="changeColourBtn">Police</button>
            <button onClick={this.bluesmobile} id="changeColourBtn">Bluesmobile</button>
          </div>
        </div>
        <div id="viewElement"></div>
      </div>
    );
  }
}

export default App;
