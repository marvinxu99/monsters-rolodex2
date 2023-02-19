import { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
    }
  
    handleClick = () => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    // The below approach will require to use bind in the constructor()
    //    this.handleClick = this.handleClick.bind(this);
    // handleClick() {
    //     this.setState(prevState => ({
    //       isToggleOn: !prevState.isToggleOn
    //     }));
    // }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

export default Toggle;