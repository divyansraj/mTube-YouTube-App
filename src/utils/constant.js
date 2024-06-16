//export const API_KEY = "AIzaSyCJTwLEKiStokNLNP4gvYum7h8OOhHav0Q"
//export const API_KEY ="AIzaSyBfHSa_p7B-EtOxxJ5Lfa0QbJPnPx1CNxY"
export const API_KEY = "AIzaSyC609TCKX0gIujcIkqm9zd9Z4BDoSt6gmw";
export const POPULAR_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key="+API_KEY; 
export const YT_SHORTS= "https://www.googleapis.com/youtube/v3/search?q=shorts&type=video&part=snippet&maxResults=50&videoDuration=short&key=" + API_KEY;

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";