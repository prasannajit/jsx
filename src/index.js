import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
    const submit = 'submit';
    return (<div>
        <label className="label" htmlFor="name">Enter name: </label>
        <input id="name" type="text"></input>
        <button style={{backgroundColor:'blue',color:'white'}}>{submit}</button>
    </div>);
};

ReactDOM.render(<App/>,document.querySelector('#root'));