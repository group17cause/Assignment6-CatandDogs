// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Component } from 'react';

// https://dog.ceo/dog-api/
class SearchDogPicture extends Component {
	constructor(props){
		super(props);
		this.state = {
			linkToDogPicture : "",     
		}
	}

    fetchRandomDogPicture = async () => {
        const linkToAPI = "https://dog.ceo/api/breeds/image/random";
        try {
            let res = await axios.get(linkToAPI);
            this.setState({
                linkToDogPicture: res.data.message,
            });
            console.log(this.state.linkToDogPicture);
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.res.data); //Not Found
                console.log(error.res.status); //404
            }
        }
    } 
        
	render() {
		return (
		<div className = "dogSide">
            <h1>Are you a Dog Person?</h1>
            <img class = "dogPicture" src = {this.state.linkToDogPicture} alt="Some Doggo"></img>
            <div> 
                <button className="search-button" onClick={this.fetchRandomDogPicture}>New Doggo Picture!</button>
            </div>
	    </div>    
		)
	}
}


export default SearchDogPicture