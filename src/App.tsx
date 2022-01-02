import React from 'react';
import { MouseEvent } from 'react'
import './App.css';

class Counter extends React.Component {
  state = {
    mental: localStorage.getItem('mentalCounter') ?? '0',
    physical: localStorage.getItem('physicalCounter') ?? '0',
  }

  recordChoice(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
    if (e.currentTarget.classList.contains('App-mental')) {
      const currentMentalCounter = parseInt(localStorage.getItem('mentalCounter') ?? '0');
      localStorage.setItem('mentalCounter', `${currentMentalCounter + 1}`);
    }
    else if (e.currentTarget.classList.contains('App-physical')) {
      const currentMentalCounter = parseInt(localStorage.getItem('physicalCounter') ?? '0');
      localStorage.setItem('physicalCounter', `${currentMentalCounter + 1}`);
    }
    this.refreshState();
  }

  refreshState(): void {
    this.setState({
      mental: localStorage.getItem('mentalCounter') ?? '0',
      physical: localStorage.getItem('physicalCounter') ?? '0',
    });
  }

  clearData(): void {
    localStorage.removeItem('mentalCounter');
    localStorage.removeItem('physicalCounter');
    this.refreshState();
  }

  render() {
    return (
      <div>
        <button className="App-btn App-mental" onClick={(e) => this.recordChoice(e)}>Mental health</button>
        <br />
        <button className="App-btn App-physical" onClick={(e) => this.recordChoice(e)}>Physical health</button>
        <p className="App-results">
          Results: <br />
          <i>Mental: {this.state.mental}</i> <br />
          <i>Physical: {this.state.physical}</i>
        </p>
        <a className="App-link" href="#" onClick={() => this.clearData()}>Reset</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rebel's choice
        </p>
        <Counter />
      </header>
    </div>
  );
}

export default App;

