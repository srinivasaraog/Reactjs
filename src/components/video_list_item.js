

import React,{Component} from 'react';

  
const VideoListItem =({video,onVideoSelect})=>{
const imageUrl= video.snippet.thumbnails.default.url;

return(

<li onClick={ ()=>onVideoSelect(video)} calssName="list-group-item">
  <div calssName="video-list-media">
    <div calssName="media-left">
     <img calssName="media-object" src={imageUrl}/>
 
    <div  calssName="media-body">
    <div  calssName="media-heading">{video.snippet.title}</div>
  </div>
</div>
</div>

</li>
	);

}





export default VideoListItem;