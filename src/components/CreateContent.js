import React, { Component } from "react";

class CreateContent extends Component{
    render(){
      console.log('content render');
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              // 원래같으면 /create_process로 페이지가 이동인데 e.preventDefault()로 페이지이동 못하게
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
                // App.js에서 CreateContent onSubmit의 인자값 _title, _desc에 해당되는 것
              );
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>

            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>

            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default CreateContent;