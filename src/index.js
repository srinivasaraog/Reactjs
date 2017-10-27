

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search.js';
import YTsearch from "youtube-api-search";
import VideoList from './components/video_list';
import VideoDeatils from './components/video_deatils';
const API_KEY='AIzaSyAh1I-Oe23vLSh_l44LN78Ck3BReYXbe9U';

class App extends Component{
	constructor(props){
		super(props);

		this.state={videos:[],selectedVideo:null};
	    this. videoSearch("aruna");
	}

  videoSearch(term){

  	YTsearch({ key:API_KEY, term:term}, (videos) => {

         this.setState({ videos:videos,selectedVideo:videos[0] });
         console.log(this.state.videos);
        });
  }
    render(){

	return (
	  <div>
	<SearchBar onSearchTermChange={term=> this.videoSearch(term)}/>
	<VideoDeatils video={this.state.selectedVideo}/>
	<VideoList onVideoSelect= { selectedVideo => this.setState({selectedVideo})}  videos={this.state.videos}/>
	</div>
	);
   }
   

}
ReactDOM.render(<App/>,document.getElementById("root"));