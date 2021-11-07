import React, { Component } from "react";

class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            // App.js에서 만든 이벤트'함수' 호출
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

export default Subject;