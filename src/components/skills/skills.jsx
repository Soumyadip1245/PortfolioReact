import React from 'react'
import './skills.css'
const skills = () => {
  var data = [
    {
      img: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
    },
    {
      img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-1024.png"
    },
    {
      img: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-1024.png"
    },
    {
      img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png"
    }, {
      img: "https://i.imgur.com/AchNR7I.png"
    }, {
      img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png"
    }, {
      img: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
    },
    { img: "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/java-512.png" }
  ]
  return (
    <section2 id="skills">
      <div className="skillscontainer">
        <div className="skillsheader">
          <h1>Skills</h1>
          <div className="main">
            {data.map((curr) => {
              return <div className="skill">
                <img id="skillimage" src={curr.img} />
              </div>
            })}

          </div>
        </div>
      </div>
    </section2>
  )
}

export default skills