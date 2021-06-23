/* eslint-disable */
import React, { Component, useState } from 'react';
import Slider from "react-slick";
import logo from './logo.svg';
import './App.css';
import myprofileimg from './img/flower.png';
import uploadimg1 from './img/macarong.jpg';
import uploadimg2 from './img/macarong2.jpg';
import uploadimg3 from './img/macarong3.jpg';
import mystoryimg from "./img/rabbit.jpg";
import friendstoryimg from './img/cow.jpg';
import friendstoryimg2 from './img/jjanggu.png';
import friendstoryimg3 from './img/jjangah.png';

// import Year from "react-live-clock";
// import Month from "react-live-clock";
// import Date from "react-live-clock";



function App() {
  let [title, titleEdit] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // let [commentModal, commentChangeModal] = useState(false);
  let [good, goodEdit] = useState(0);
  let [modal, changeModal] = useState(false);
  let [clicktitle, clicktitlechange] = useState(0);
  let [inputdata, inputdatachange] = useState('');

  let [heart, heartCnt] = useState(0);//하트 개수 표현
  let [commid, commidChange] = useState(['apple_123', 'banana_234', 'orange_495']);
  let [comm, commChange] = useState(['맛있겠어요!', '마카롱 사진 이뻐요', '가나다라마바사 댓글']);
  //댓글 추가 관련 코드
  let [commidInput, commidInputChange] = useState('');
  let [commInput, commInputChange] = useState('');

  function titleEdit2(){
    var newArray = [...title]; //딥카피.. 
    newArray[0] = '여자코트 추천';
    titleEdit(newArray);
      // titleEdit(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  }

   const settings = {
      dots: true,
      infinite: true,
      speed:500,
      slidesToShow:1,
      slidesToScroll: 1
    }


  return (
    <div className="App">
      {/* 인스타그램 최상위 네비게이션 */}
      <div className="black-nav">
        <div className="title">Instagram</div>
        <div className="emoji" >
          <div>➕</div>
          <div>🤍</div>
          <div>💌</div>
        </div>
      </div>

      {/* 스토리 공간 */}
      <div className="story">
        <div>
          <img className="my_story" src={mystoryimg} />
        </div>
        <div>
          <img className="friends_story" src={friendstoryimg} />
        </div>
        <div>
          <img className="friends_story" src={friendstoryimg2} />
        </div>
        <div>
          <img className="friends_story" src={friendstoryimg3} />
        </div>
      </div>

      {/* <button onClick={ titleEdit2 }>버튼</button> */}



      <div className="feed">
        {/* myinfo */}
        <div className="feed_profile">
          <img className="myprofile" src={myprofileimg} />
          <div className="myid">hello_cake_atelier</div>
        </div>

        <div className="feedimage">
          {/* <img src={feedimg} style={{height:'auto', width:'100%'}} /> */}
          <Slider {...settings}>
            <div>
              <img src={uploadimg1} style={{height:'auto', width:'100%'}} />
            </div>
            <div>
              <img src={uploadimg2} style={{height:'auto', width:'100%'}} />
            </div>
            <div>
              <img src={uploadimg3} style={{height:'auto', width:'100%'}} />
            </div>
          </Slider>
        </div>

        <div className="reaction">
          <div><span onClick={() => heartCnt(heart + 1)}>🤍</span></div>
          <div>
            <span onClick={() => {commentChangeModal(!commentModal)}}>💬</span>
          </div>
          <div>💌</div>
          <div className="mysave">☑</div>
        </div>
        <div className="reaction2">
          <div className="good" >좋아요 { heart }개</div>
          <div className="contents">
            #macaron #dessert #coucou #today
          </div>
        </div>
      </div>

      <div className="comment">
        <div className="comment_id">
          {
            commid.map(function(a, i) {
              return(
                <div className="commlist" key={i}>
                  { a }
                </div>
              )
            })
          }
        </div>
        
        <div className="comment_cont">
          {
            comm.map(function(a, i) {
              return(
                <div className="commlist" key={i}>
                  { a }<span onClick={()=>{goodEdit(good + 1)}}>👍{good}</span>
                </div>
              )
            })
          }
        </div>

        <div className="plus">
          <p>더보기</p>          
        </div>
      </div>

      <div className="input_comment">
          <input className="id_input" type="text" placeholder="아이디 입력" size="10"
          onChange={(e) => {commidInputChange(e.target.value) }}/>
          <input className="comm_input" type="text" placeholder="댓글을 입력해주세요"
          onChange={(e) => {commInputChange(e.target.value) }}/>
          <button onClick = { () => {
            var idCopy = [...commid];
            var commCopy = [...comm];
            idCopy.unshift(commidInput);
            commCopy.unshift(commInput);
            commidChange(idCopy);
            commChange(commCopy);
          }}>SAVE</button>
      </div>
{/* 
      {
        title.map(function(a, i) {
          return(
          <div className="list" key={i}>
            <h3 onClick={ () => { clicktitlechange(i) } }>{ a }<span onClick={()=>{goodEdit(good + 1)}}>👍</span>{ good }</h3>
            <p>6월 3일 발행</p>
            <div className="Year-Month">
              <p>
                <Year id="Year" format={"YYYY"} ticking={false} timezone={"KR/Pacific"} />
                <Month format={"MMM"} ticking={false} timezone={"KR/Pracific"} />
                <Date format={"DD"} ticking={false} timezone={"KR/Pracific"} />
              </p>
            </div>
            <hr />
          </div>
          )
        })
      } */}
     
      
      {/* <input onChange={ (e)=>{ inputdatachange(e.target.value) }} /> */}


      {/* <div className="publish">
        <input onChange={ (e) => { inputdatachange(e.target.value) }} placeholder="댓글을 입력해주세요"/>
        <button onClick= { () => {
          var arrCopy = [...title];
          arrCopy.unshift(inputdata);
          titleEdit(arrCopy);

        }}>저장</button>
      </div> */}
      {/* state를 변경할때는 변경함수 사용하기 */}
      {/* Modal 코드 */}
      {/* <button onClick={ () => {changeModal(!modal)}}>Modal 보기</button>
      {
        modal === true
        ? <Modal title={title} clicktitle={clicktitle}></Modal>
        : null
      } */}
      {/* <Profile /> */}
     

    </div>
  );
}


// function Modal(props){
//   return (
//       <div className="modal">
//         <h2>제목 { props.title[props.clicktitle] }</h2>
//         <p>날짜</p>
//         <p>상세내용</p>
//       </div>

//   )
// }

export default App;

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = {name : 'Kim', age : 25}
//   }

//   // 상위에 있는 this값 바로 가져다 쓰기 때문에 this.change.bind(this)로 쓰지 않아도 된다
//   change = () => {
//     this.setState({name : 'Park'})
//   }
//   render(){
//     return(
//       <div>
//         <h3>프로필 입니다.</h3>
//         <p>저는 {this.state.name} 입니다.</p>
//         <p>나이는 {this.state.age}세 입니다.</p>
//         <button onClick={ this.change }>이름 바뀌는 버튼</button>
//       </div>
//     )
//   }
// }