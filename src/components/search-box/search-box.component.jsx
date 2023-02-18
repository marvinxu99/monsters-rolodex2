import { Component } from "react";

class SearchBox extends Component {

  render() {
    const { onChangeHandler } = this.props;

    return(
      <div>
        <input 
          className={this.props.className}
          type='search' 
          placeholder={this.props.placeholder}
          onChange={onChangeHandler}
         />
      </div>
    )
  }
}

export default SearchBox;
