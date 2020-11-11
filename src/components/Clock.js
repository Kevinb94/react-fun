import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

        this.handleClick = this.handleClick.bind(this);
      }



      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }


      tick() {
        this.setState({
          date: new Date()
        });
      }

      handleClick( test,e){
          e.preventDefault();
          alert("Who the fuck clicked me!" + test);
      }




    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button onClick={(e) => this.handleClick("YES", e)}>Click</button>
        </div>
      );
    }
  }


  export default Clock;