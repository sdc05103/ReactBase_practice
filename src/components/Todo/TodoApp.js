import React, {useState} from 'react';

const colors = ["red", "yellow", "pink", "violet"]

export default function TodoApp(){
    const [todoList, setTodoList] = useState([{
        text: '',
        color: ''
    }]);
    const [activeColor, setActiveColor] = useState(colors[0]);
    const [inputText, setInputText] = useState('');

    const addTodo= ()=>{ 
        //setTodoList 이용
        //입력한 텍스트를 받아오고, activeColor로 받아오기
        const newTodo ={
            text: inputText,
            color: activeColor
        }

        setTodoList(prevTodoList=>prevTodoList.concat(newTodo));
        setInputText('');
    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };
    
    return (
        <div style={{justifyContent:"center", display:"flex", alignItems:"center", flexDirection:"column"}}>
            
            <h1>Todo App</h1>
            <div>
                <input 
                    type="text" 
                    onChange={handleInputChange}
                    style={{backgroundColor: activeColor}} 
                    value={inputText}
                />
                <button onClick={addTodo} >입력</button>
            </div>
            <div style={{display:'flex', flexDirection: 'row'}}>
                {colors.map(color=>(
                    <div onClick={()=>{                                                                                                                 setActiveColor(color)}} style={
                        {backgroundColor:color, width:10,height:10, borderRadius:10, margin:10}
                    }></div>
                ))}
            </div>
            <div>
                <h3>Todo List</h3>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {todoList.map(todo=>{
                        return <div style={{backgroundColor: todo.color}}>{todo.text}</div>
                    })}
                </div>
            </div>
        </div>
    )
}