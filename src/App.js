import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    details: []
  };

  // details() {
  //   return axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //   .then(res => {
  //     console.log(res.data);
  //     const details = res.data;
  //     this.setState({
  //       details:details
  //     });
  //   });
  // }
  // fetch("https://api.example.com/items")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //       }

  componentDidMount() {
    // this.details();
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const details = res.data;
        this.setState({details  });
      })
  }

  render() {
    return (
      <div>
        {this.state.details ?
        { this.state.details.map((p, i) => {
              return
              <div>
                <p>{p.id}</p>
                
            })
          }
          :null 
          }
          
           
      </div>
    );
  }
}
