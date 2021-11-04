import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    // render()보다 먼저 실행되면서
    // 그 component를 초기화 시키려면 여기에 코드를 작성하면 된다.
    // => constructor가 있으면 제일 먼저 실행되면서 초기화가 진행된다.
    this.state = {
      subject: { title: "WEB", sub: "World Wide Web!" },
    };
  }


  // 상위 component의 값을 하위 component에 props의 값으로 하는건 얼마든지 가능하다
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>  
        </Subject>
        <TOC></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Content>

        <Counter></Counter>
      </div>
    );
  }
}

export default App;
