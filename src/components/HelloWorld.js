import React from 'react'
import "./HelloWorld.css"

function HelloWorld(){
    return(
        // css 속성의 key ==> js object의 key (- ==> CamelCase)
        // <div style={{ textAlign: 'center', color: "red"}}> => {무조건 객체이므로 한번 더 {}}
        <div className='hello-world'>
            <h1>Hello, World!</h1>
            <p>This is My first React Application</p>
        </div>
    )
}

export default HelloWorld;