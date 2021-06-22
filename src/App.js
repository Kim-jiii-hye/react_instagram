/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [title, titleEdit] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [good, goodEdit] = useState(0);
  let [modal, changeModal] = useState(false);
  let [clicktitle, clicktitlechange] = useState(0);

  let [inputdata, inputdatachange] = useState('');

  function titleEdit2(){
    var newArray = [...title]; //딥카피.. 
    newArray[0] = '여자코트 추천';
    titleEdit(newArray);
      // titleEdit(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ titleEdit2 }>버튼</button>

      {
        title.map(function(a, i) {
          return(
          <div className="list" key={i}>
            <h3 onClick={ () => { clicktitlechange(i) } }>{ a }<span onClick={()=>{goodEdit(good + 1)}}>👍</span>{ good }</h3>
            <p>6월 3일 발행</p>
            <hr />
          </div>
          )
        })
      }

      
      {/* <input onChange={ (e)=>{ inputdatachange(e.target.value) }} /> */}


      <div className="publish">
        <input onChange={ (e) => { inputdatachange(e.target.value) }}/>
        <button onClick= { () => {
          var arrCopy = [...title];
          arrCopy.unshift(inputdata);
          titleEdit(arrCopy);

        }}>저장</button>
      </div>
      {/* state를 변경할때는 변경함수 사용하기 */}
      
      <button onClick={ () => {changeModal(!modal)}}>Modal 보기</button>
      {
        modal === true
        ? <Modal title={title} clicktitle={clicktitle}></Modal>
        : null
      }
      <Profile />
     

    </div>
  );
}
function Modal(props){
  return (
      <div className="modal">
        <h2>제목 { props.title[props.clicktitle] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>

  )
}

export default App;

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {name : 'Kim', age : 25}
  }

  // 상위에 있는 this값 바로 가져다 쓰기 때문에 this.change.bind(this)로 쓰지 않아도 된다
  change = () => {
    this.setState({name : 'Park'})
  }
  render(){
    return(
      <div>
        <h3>프로필 입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <p>나이는 {this.state.age}세 입니다.</p>
        <button onClick={ this.change }>이름 바뀌는 버튼</button>
      </div>
    )
  }
}