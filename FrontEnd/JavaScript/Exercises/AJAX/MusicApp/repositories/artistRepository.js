import {Artist} from "/entities/artist.js";
 
export function ArtistRepository() {
    this.getArtist = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist="+artistName+"&api_key=2f93ba74dd403b6b129cb5e324621abc&format=json");
            result = await response.json();
            return new Artist(result.artist);
        }   catch (error) {
            return result;
        }
    }

    this.getTopAlbumNames = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artistName+"&api_key=2f93ba74dd403b6b129cb5e324621abc&format=json&limit=5");
            result = await response.json();
            var names = result.topalbums.album.map(function(album){
                return album.name;
            });

            return names;
        }   catch (error) {
            return result;
        }
    }
  
}
 // return new Artist(result.artist);
            // array.map