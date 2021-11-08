import React, { Component } from "react";

class Control extends Component {
    render() {
      return (
        <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>

          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>

          <li><input onClick={function(e){
            e.preventDefault();
              this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
          {/* value 값 말고 <input>delete</input>으로 써서 에러 났었음. */}
        </ul>
      );
    }
  }

export default Control;