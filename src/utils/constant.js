//export const API_KEY = "AIzaSyCJTwLEKiStokNLNP4gvYum7h8OOhHav0Q"
export const API_KEY ="AIzaSyBfHSa_p7B-EtOxxJ5Lfa0QbJPnPx1CNxY"
//export const API_KEY = "AIzaSyC609TCKX0gIujcIkqm9zd9Z4BDoSt6gmw";
//export const API_KEY = "AIzaSyDUXv5myM92XDnn249z0KKTo3IJiFKKUGY";
//export const POPULAR_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key="+API_KEY; 
export const POPULAR_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const CATEGORY_RELATED_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&videos";

export const CURRENT_VIDEO_DETAILS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";