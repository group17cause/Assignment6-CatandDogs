import axios  from 'axios';
import { Component } from 'react';

// https://dog.ceo/dog-api/
class SearchDogFact extends Component {
	constructor(props){
		super(props);
		this.state = {
            dogFact : "",       
		}
	}

    fetchRandomDogFact = async () => {
        try {
            const linkToAPI = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";
            let res = await axios.get(linkToAPI);
            this.setState({
                dogFact : res.data.text
            });
            console.log("Fact Number: ", res.data.text);
            console.log(this.state.dogFact);
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
            <div className = "dogFact">
                <p>
                    {this.state.dogFact}
                </p>
                <div>
                    <button className="newDogPictureButton" onClick={this.fetchRandomDogFact}>New Doggo Picture!</button>
                </div>
            </div>
		)
	}
}

export default SearchDogFact