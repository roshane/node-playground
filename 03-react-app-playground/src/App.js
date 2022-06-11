import React from 'react';
import './App.css';

// const increment = (value, callBack) => callBack(value + 1);

// const decrement = (value, callBack) => callBack(value - 1);

// let App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <span>
//           <pre>I love the way this behave</pre>
//         </span>
//       </header>
//       <div>
//         <button onClick={() => increment(count, setCount)}>+</button>
//         <p>{count}</p>
//         <button onClick={() => decrement(count, setCount)}>-</button>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentName: '',
      showButton: false
    };
  }

  setName(e) {
    console.log('value', e.target.value);
    this.setState({
      currentName: e.target.value
    });
  }

  toggleButton(e) {
    this.setState((state, prop) => {
      return { showButton: !state.showButton }
    }, () => console.log('state updated', new Date().getTime()));
  }

  render() {
    let { currentName, showButton } = this.state;
    return (
      <div className='App-header'>
        <input type="text" name="nameInput" id="nameInput" onChange={this.setName.bind(this)} />
        <br />
        <p>can you see me: {currentName}</p>
        <label htmlFor="subscribeNews">Toggle button: </label>

        <input type="checkbox"
          onChange={this.toggleButton.bind(this)}
          id="subscribeNews" name="subscribe" value="newsletter" />

        {
          showButton && <button>click for fun</button>
        }

      </div>
    );
  }
}

export default App;
