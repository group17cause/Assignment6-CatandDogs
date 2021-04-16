import axios  from 'axios';
import { Component } from 'react';

//https://some-random-api.ml/docs/JSON-endpoints/Facts
class SearchDogFact extends Component {
	constructor(props){
		super(props);
		this.state = {
            dogFact : "",
            renderInitialDogFact : true,
            initialDogFact: ""       
		}
	}

    fetchRandomDogFact = async () => {
        this.setState({
            renderInitialDogFact : false
        });
        try {
            const linkToAPI = "https://some-random-api.ml/facts/dog";
            let res = await axios.get(linkToAPI);
            this.setState({
                dogFact : res.data.fact
            });
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

    fetchRandomDogFact = async () => {
        try {
            const linkToAPI = "https://some-random-api.ml/facts/dog";
            let res = await axios.get(linkToAPI);
            this.setState({
                initialDogFact : res.data.fact
            });
            console.log(this.state.initialDogFact);
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
    
    componentDidMount() {
        this.fetchRandomDogFact();
    }
	render() {
		return (
            <div className = "dogFact">
                {this.state.renderInitialDogFact 
                ? <p>{this.state.initialDogFact}</p>
                : <p>{this.state.dogFact}</p>
                }
                <div>
                    <button className="newDogPictureButton" onClick={this.fetchRandomDogFact}>New Doggo Fact!</button>
                </div>
            </div>
		)
	}
}

export default SearchDogFact