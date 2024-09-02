// import logo from './logo.svg';
// import './App.css';
// import { connect } from "react-redux"
// import { increaseCounter, decreaseCounter } from "./action/actions"
// import { useSelector, useDispatch } from "react-redux";
import Home from './components/Home';

function App(props) {
  // redux hook
  // const dispatch = useDispatch();
  // const newCount = useSelector((state) => state.counter.count);

  // event handler
  // const handleIncrease = () => {
  //   // dispatch actions
  //   // props.increaseCounter() // redux class

  //   dispatch(increaseCounter())//redux hook
  // }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello world with React!</h1>
    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>{/*redux hook */}
    //     {/* <button onClick={() => props.decreaseCounter()}>Decrease Count</button> redux class */}
    //   </header>
    // </div>

    <Home />
  );
}

// redux class
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
