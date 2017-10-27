
import React,{Component} from "react";

class SearchBar extends Component{
	constructor(props){
     super(props);
     this.state={'onchange':''};

	}
	onInputChange(term){
    this.setState({'onchange':term});
    this.props.onSearchTermChange(term);

	}

   render(){



   	return( <div>
   		<input onChange={event => this.onInputChange(event.target.value)}  value={this.state.onchange}/>
   		 
   		</div>);


   }

}
export default SearchBar;