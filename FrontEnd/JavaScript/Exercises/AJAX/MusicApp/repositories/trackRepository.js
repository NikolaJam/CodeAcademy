 
import {Artist} from "/entities/artist.js";

export function TrackRepository() {
    this.getTrackNames = async function (artistName) {
        var result = null;
        try {
            var response = await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+artistName+"&api_key=2f93ba74dd403b6b129cb5e324621abc&format=json");
            result = await response.json();
            var names = result.toptracks.track.map(function(track){
                return track.name;
            });

            return names;
        }   catch (error) {
            return result;
        }
    }

}