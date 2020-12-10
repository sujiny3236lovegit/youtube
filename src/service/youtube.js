class Youtube{
  constructor(key){
    this.key = key; 
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular(){
    return fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCVdBIfW85k7aj871Z_4Q1iM3G3NEwsvw8",
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => result.items);
  }

  search(query){
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCVdBIfW85k7aj871Z_4Q1iM3G3NEwsvw8`, requestOptions)
      .then(response => response.json())
      .then(result => 
        result.item.map(item => ({...item , id: item.id.videoId}))
      );
  }
}

export default Youtube;