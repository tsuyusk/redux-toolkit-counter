import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { connect, useDispatch } from 'react-redux'
// import { State } from './redux-old-school';
import { increment, incrementAmount } from './features/counter/counter-slice';
import { useAppSelector } from './hooks';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleOnClick() {
    // increment();
    // dispatch({ type: 'counter/increment' })
    dispatch(increment())
  }
      
  function handleOnClickAmount() {
    // dispatch({ type: 'counter/incrementAmount', payload: 10 })
    // incrementAmount(10);
    dispatch(incrementAmount(10))
  }

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux</h1>
      <div className="card">
        <h2>count is {count}</h2>
        <button onClick={handleOnClick}>
          Increment +1
        </button>
        <button onClick={handleOnClickAmount}>
          Increment +10
        </button>
      </div>
    </div>
  )
}

export default App;

// Old School 1

// const mapStateToProps = (state: any) => {
//   return {
//     count: state.counter.value,
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     increment: () => dispatch({ type: 'counter/increment' }),
//     incrementAmount: (payload) => dispatch({ type: 'counter/incrementAmount', payload })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
