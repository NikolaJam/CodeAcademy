
import {Album} from "/entities/albums.js";

export function AlbumRepository() {
    this.getAlbum = async function (artistName, topAlbumNames) {
        var result = [];
        try {

            for(let index = 0; index < topAlbumNames.length;index++){
            const album = topAlbumNames[index];
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2f93ba74dd403b6b129cb5e324621abc&artist="+artistName+"&album="+album+"&format=json");
            var albumData = await response.json();
            result.push(new Album (albumData.album)); 
            }
            return result;
        }   catch (error) {
            return result;
        }
    }

}