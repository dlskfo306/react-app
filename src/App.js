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
      // mode가 welcome 일때
      mode: 'read',
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
    var _title, _desc = null;
    // 보통은 지역변수나 sub function일 경우 이름 앞에 _를 써주는데 
    // 이는 자바스크립트의 경우 접근제한자(public, private)가 없기 때문에 변수명으로 사용범위를 나타내준다.
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      // 일단 걍 임의로
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
     


    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          // subject라는 컴포넌트 안에 
          // onChangePage라는 이벤트를 직접 생성.
          // 이벤트에 함수를 설치해주면(function~~)
          onChangePage={function(){
            // alert('hihihi');
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >  
          
        </Subject>
        
        {/* <header>
          <h1><a href="/" onClick={function(e){
            // 링크를 클릭했을 때 실행
            console.log(e);
            // debugger;
            e.preventDefault();
            // 근데 확인 누르면 리로드 되어버림 (안되게 하자!)

            // this.state.mode='welcome'; -> 에러 오지게남
            // 근데 .bind(this) 를 쓰면 사용 가능
            // 근데 또 ! 저렇게 하면 state가 바뀐지 모름
            // setState써줘야함.
            
            this.setState({
              mode:'welcome'
            });
            
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
        {/* <Counter></Counter> */}
      </div>
    );
  }
}

export default App;
