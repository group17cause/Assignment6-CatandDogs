import axios from 'axios';
import { Component } from 'react';
import SearchDogFact from "./SearchDogFact"
import festiveboy from "../Images/festiveboy.jpg"

class SearchDogPicture extends Component {
	constructor(props){
		super(props);
		this.state = {
			linkToDogPicture : "",
            initialDogPicture : true     
		}
	}    

    fetchRandomDogPicture = async () => {
        this.setState({
            initialDogPicture : false
        });
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
        const initialDogPicture = this.state.initialDogPicture;
		return (
		<div defer className = "dogSide">
            <h1>Are you a Dog Person?</h1>
            {initialDogPicture 
            ? <img src = {festiveboy} alt = "F E S T I V E B O Y"></img>
            : <img className = "dogPicture" src = {this.state.linkToDogPicture} alt="Some Doggo"></img>
            }
            <div> 
                <button className="newDogPictureButton" onClick={this.fetchRandomDogPicture}>New Doggo Picture!</button>
            </div>
            <SearchDogFact>
            </SearchDogFact>
	    </div>    
		)
	}
}


export default SearchDogPicture