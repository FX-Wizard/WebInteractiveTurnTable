import React, {Component} from 'react';
import "./radialMenu.css"
// import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/css/font-awesome.min.css';

class RadialMenu extends React.Component {
    constructor(props) {
      super(props);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.state = {
        open: false,
      };
    }
    
    toggleMenu () {
        this.setState({ open: !this.state.open });
    }
  
    render() {
      return (
        <div className="radial-menu">
          <MainButton 
            toggle={this.toggleMenu} 
            open={this.state.open} 
          />
  
          <Button className="button1"
              toggle={this.props.normal}
              open={this.state.open}
              label="Stock"
            >
          </Button>
          
          <Button className="button2"
              toggle={this.props.policePackage}
              open={this.state.open}
              label="Police"
            >
          </Button>
          
          <Button className="button3"
              toggle={this.props.bluesmobile}
              open={this.state.open}
              label="Bluesmobile"
            >
          </Button>
          
          {/* <Button className="button4"
              toggle={this.buttonClicked}
              open={this.state.open}
              label="fa fa-video-camera fa-2x"
            >
          </Button> */}
        </div>
      );
    }
}

  
function MainButton(props){
    return (
      <button 
      className={props.open 
        ? "MainButton MainButton-triggered" 
        : "MainButton "}
      onClick={props.toggle}
    > <a className="fa fa-plus fa-2x"></a>
    </button>
  );
}


function Button(props) {
    return (
      <button 
      className={props.open 
        ? "Button Button-triggered" 
        : "Button "}
      onClick={props.toggle}
      >
      <a>{props.label}</a>
    </button>
  );
}


export default RadialMenu;