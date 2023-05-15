// import React, { useState } from 'react';
import React, { Component } from 'react';

import './App.css';

  // // Counter example

// function App(){
// const [count, setCount] = useState(0); 
//   return (
//     <div className="app">
//           <div className='button-wrapper'>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count-1)}>-</button>
//             <button onClick={()=>setCount(count+1)}>+</button>
//           </div>
//     </div>
//   );
// }

// // Checkbox example


class App extends Component {
  state = {
    isCitizen: false,
    isOver21: false
  };

  onChange = (e) => {
    if (e.target.type === 'checkbox')
      this.setState({ [e.target.name]: e.target.checked });
    else
      this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { isCitizen, isOver21 } = this.state;
    return (
      <form>
        <h1>Are you a citizen: {isCitizen ? "Yes" : "No"}</h1>
        <h1>Are you over 21: {isOver21 ? "Yes" : "No"}</h1>
        <label>
          Are you a citizen?
          <input type="checkbox"
            checked={isCitizen}
            name="isCitizen"
            onChange={this.onChange} />
        </label>
        <br />
        <label>
          Are you over 21?
          <input type="checkbox"
            checked={isOver21}
            name="isOver21"
            onChange={this.onChange} />
        </label>
      </form>
    );
  }
}

export default App;

