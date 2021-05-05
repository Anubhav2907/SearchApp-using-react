import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit=(e)=>{
      e.preventDefault();
      this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              onChange={(event) => {
                this.setState({ term: event.target.value});
              }}
              value={this.state.term}
              type="text"
              id="search"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
