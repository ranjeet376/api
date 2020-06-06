import React, { Component } from 'react'
import axios from "axios";
export default class Zafar extends Component {
    constructor() {
        super();
        this.state = {
            detailsResponse: null,
            emailResponse: null,
            addressResponse: null
        };

    }



    getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const detailsResponse = res.data;
                this.setState({ detailsResponse });
                console.log("detaails", detailsResponse)
            })
    }

    getComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(re => {
                const emailResponse = re.data;
                this.setState({ emailResponse });
                console.warn("b data", emailResponse)
                console.log("state data", this.state.emailResponse)
            })
    }

    getUsers = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(rs => {
                const addressResponse = rs.data;
                this.setState({ addressResponse })
                console.log('function', addressResponse);
            })
    }

    singh = () => {
        this.getPosts();
        this.getComments();
        this.getUsers()

    }


    render() {
        return (
            <div>
                <h1>Calling Api</h1>
                {
                    this.state.detailsResponse && this.state.emailResponse && this.state.addressResponse ?
                        <div >

                            {
                                this.state.addressResponse.map((item, i) =>
                                    <div className="main" key={i}>

                                        <p >{this.state.detailsResponse[i].id}</p>
                                        <p>{item.address.city}</p>
                                        <p>{this.state.emailResponse[i].email}</p>
                                        <p >{this.state.detailsResponse[i].title}</p>
                                        <p >{this.state.detailsResponse[i].body}</p>

                                    </div>

                                )

                            }

                        </div>
                        : null
                }
                <button onClick={() => this.singh()}>Call</button>

            </div>
        )
    }
}
