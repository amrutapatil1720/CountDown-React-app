import React,{Component} from 'react';
import './App.css';
import Clock from './components/clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      deadline:"July 17,2019",
      newDeadline:''
    };
  }
  deadlineUpdate()
  {
    this.setState({deadline: this.state.newDeadline});
  }
  render() {
    return (
    <div>

    <h1 className="heading">Countdown clock to {this.state.deadline}</h1>
    <div className="style">
      <Clock  deadline={this.state.deadline}/>
      <input placeholder="Enter New day" onChange={(val)=>this.setState({newDeadline:val.target.value})} />

      <button onClick={()=>this.deadlineUpdate()}>Submit</button>
        </div>
      </div>
    );
  }
  }

  export default App;
