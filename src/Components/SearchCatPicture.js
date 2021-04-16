// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Component } from 'react';
import SearchCatFact from "./SearchCatFact"

class SearchCatPicture extends Component {
	constructor(props){
		super(props);
		this.state = {
			linkToCatPicture : "",     
		}
	}

    fetchRandomCatPicture = async () => {
        const linkToAPI = "https://thatcopy.pw/catapi/rest/";
        try {
            let res = await axios.get(linkToAPI);
            this.setState({
                linkToCatPicture: res.data.webpurl
            });
            console.log(this.state.linkToCatPicture);
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
		<div className = "catSide">
            <h1>Or are you a Cat Person?</h1>
            <img className = "catPicture" src = {this.state.linkToCatPicture} alt="Some Cat"></img>
            <div> 
                <button className="newCatPictureButton" onClick={this.fetchRandomCatPicture}>New Catto Picture!</button>
            </div>
            <SearchCatFact>
            </SearchCatFact>
	    </div>    
		)
	}
}


export default SearchCatPicture