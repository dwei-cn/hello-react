// import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react';

import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Header from './components/Header';
import AwsForm from './components/AWSForm';
import Todolist from './components/Todolist';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {

  // 父组件中定义数据
  const dataList = [
    {
      image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/96748826_102994418092727_8540014934442901504_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=osPJR1lYn2UAX908RCD&_nc_ht=scontent-sjc3-1.xx&oh=00_AfC9I0Tr6L_bIgnMP9Uhk_E3mKIwvwQ-OWV-uEEBck3Msg&oe=65A4AC60",
      title: "免费玩GTA5",
      content: "上Epic Games免费玩GTA5哟",
      link: "https://www.epicgames.com/store/en-US/product/epic-games-store/gta-5-free-edition"
    },

    {
      image: "https://www.overclockers.co.uk/blog/wp-content/uploads/2023/05/Pokemon-TCG-Live-Blog-Feature.png",
      title: "Pokemon TCG Live Blog Feature",
      content: "This is a live blog feature for the Pokemon TCG.",
      link: "https://tcg.pokemon.com/en-us/tcgl/"
    },
  ]

  const listItems = dataList.map((itemData, index) =>   //  map 方法遍历一个名为 dataList 的数组，并为数组中的每个元素创建一个名为 ItemDetail2 的组件实例。
    <Card2
      key={index}
      ItemTitle={itemData.title}      // 应该和js func里面的props相对应
      ItemImage={itemData.image}
      ItemDescription={itemData.content}
      ItemLink={itemData.link}
    />
  )

  const [message, setMessage] = useState("Hello react form!");

  const formData = {
    txtAccessKey: "7758",
    txtSecretAccessKey: "7758",
    txtRegionID: "Asia Pacific"
  }

  const handlerAppDataEvent = async (appdata) => {
    //console.log(appdata)
    //alert(JSON.stringify(appdata))
    const postdata = JSON.stringify({
      accessKeyID: appdata.accessKeyID,
      accessKeyIDSecret: appdata.accessKeyIDSecret,
      selectRegionID: appdata.selectRegionID
    })

    const response = await fetch('http://localhost:3000/json', {
      method: 'POST',
      body: postdata,
      headers: {
        'content-type': 'application/json',
        'user-agent': 'Mozilla/99.0 MDN Example'
      },
    });

    const data = await response.json()
    setMessage(JSON.stringify(data.body, {}, 2))  // 整个表达式的目的是将 data.body 对象转换为带有缩进格式的 JSON 字符串，并且这个字符串会在每一层级使用两个空格进行缩进。这通常用于美化输出，以便更容易阅读和调试。
  }



  return (
    <div className="App">
      <Header />

      <h1>I love React!</h1>

      <hr />
      <h2>单个卡片</h2>
      <Card1 />

      <hr />
      <h2>循环卡片</h2>
      {listItems}

      <hr />
      {/* <h2>Form 表单</h2> */}
      <AwsForm appdata={formData} onSave={handlerAppDataEvent} />
      <pre>
        {message}
      </pre>

      <hr />

      <div className="container">
        <h2>To-do List App</h2>
        <div className="todo-app">
            <Todolist />
        </div>
      </div>
      
    </div>

  );
}

export default App;
