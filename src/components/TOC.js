import React, { Component } from "react";

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        // data의 갯수만큼 반복문 돌려서 출력

        // 엘리먼트 여러개를 자동으로 생성하고 있는데
        // key값을 넣지 않으면 에러로 Warning: Each child in a list should have a unique "key" prop. 가 생긴다
        // 각각의 항목들은 key 라는 props를 가지고 있어야 한다는 뜻
        // key={각각의 목록을 다른것들과 구분할 수 있는 것, 식별자}
        // 리액트가 내부적으로 필요해서 우리한테 요구하는 사항이기 때문에 그냥 그려려니 하고 넣는 데이터
        lists.push(
          <li key={data[i].id}>
            <a href={"/content/" + data[i].id}
            data-id = {data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
              // id값의 경로를 써주고 디버깅을 해보면 id의 값을 확인할 수 있다.
            }.bind(this)}
            >{data[i].title}</a>
          </li>
        );
        i = i + 1;
      }
      return(
        <nav>
          <ul>
            {/* <li><a href="1.html">HTML</a></li>
            <li><a href="1.html">CSS</a></li>
            <li><a href="1.html">JavaScript</a></li> */}
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC;