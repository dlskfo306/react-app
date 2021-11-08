import React, { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Counter from "./components/Counter";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";

class App extends Component {
  constructor(props) {
    super(props);
    // render()보다 먼저 실행되면서
    // 그 component를 초기화 시키려면 여기에 코드를 작성하면 된다.
    // => constructor가 있으면 제일 먼저 실행되면서 초기화가 진행된다.
    this.state = {
      // mode가 welcome 일때
      mode: 'read',
      selected_content_id: 2, // 기본적으로 2번 컨텐츠가 나오게 설정
      subject: {title: "WEB", sub: "World Wide Web!" },
      welcome: {title:'Welcome', desc:'Hello, React!!'},
      // 밑의 contents를 아래의 TOC에 주입하고 싶다면
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    };
  }


  // 상위 component의 값을 하위 component에 props의 값으로 하는건 얼마든지 가능하다
  render() {
    console.log('App render');
    // mode의 값에 따라 달라지게 조건문 적기
    var _title, _desc, _article = null;
    // 보통은 지역변수나 sub function일 경우 이름 앞에 _를 써주는데 
    // 이는 자바스크립트의 경우 접근제한자(public, private)가 없기 때문에 변수명으로 사용범위를 나타내준다.
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article = <CreateContent></CreateContent>
    }
     


    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            // alert('hihihi');
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            //debugger;
            this.setState({
              mode: "read",
              selected_content_id: Number(id), // 강제로 숫자로 만들기
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>

        <Control onChangeMode={function(_mode){
          this.setState({
            mode: _mode
          });

        }.bind(this)}></Control>

        {/* 가변적으로 바뀔 수 있게 */}
        {_article}
      </div>
    );
  }
}

export default App;
