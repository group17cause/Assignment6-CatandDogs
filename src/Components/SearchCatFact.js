import axios  from 'axios';
import { Component } from 'react';

class SearchCatFact extends Component {
	constructor(props){
		super(props);
		this.state = {
            catFact : "",       
		}
	}

    fetchRandomCatFact = async () => {
        try {
            const linkToAPI = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
            let res = await axios.get(linkToAPI);
            this.setState({
                catFact : res.data.text
            });
            console.log(this.state.catFact);
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
            <div className = "catFact">
                <p>
                    {this.state.catFact}
                </p>
                <div>
                    <button className="newCatFactButton" onClick={this.fetchRandomCatFact}>New Cat Fact!</button>
                </div>
            </div>
		)
	}
}

export default SearchCatFact