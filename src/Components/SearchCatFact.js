import axios  from 'axios';
import { Component } from 'react';

class SearchCatFact extends Component {
	constructor(props){
		super(props);
		this.state = {
            catFact : "",
            renderInitialCatFact : true,
            initialCatFact : ""
		}
	}

    fetchRandomCatFact = async () => {
        this.setState({
            renderInitialCatFact : false
        });
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

    setInitialRandomCatFact = async () => {
        try {
            const linkToAPI = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
            let res = await axios.get(linkToAPI);
            this.setState({
                initialCatFact : res.data.text
            });
            console.log(this.state.initialCatFact);
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
    
    // Work around because Axios returns object[Promise], which cannot be rendered as a child
    componentDidMount() {
        this.setInitialRandomCatFact();
    }

	render() {
		return (
            <div className = "catFact">
                {this.state.renderInitialCatFact 
                ? <p>{this.state.initialCatFact}</p>
                : <p>{this.state.catFact}</p> 
                }
                <div>
                    <button className="newCatPictureButton" onClick={this.fetchRandomCatFact}>New Catto Fact!</button>
                </div>
            </div>
		)
	}
}

export default SearchCatFact