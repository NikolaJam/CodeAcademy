import {ArtistRepository} from "/repositories/ArtistRepository.js";
import {AlbumRepository} from "/repositories/AlbumRepository.js";

export function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository();
    
    this.getArtistPageData = async function(artistName) {
        
        var artist =  await this.artistRepo.getArtist(artistName);
        var topAlbumNames = await this.artistRepo.getTopAlbumNames(artistName);
        var albums = await this.albumRepo.getAlbum(artistName, topAlbumNames);
      
        var pageData = {
            artist: artist,
            album:  albums
        }
        console.table(pageData.artist);
        return pageData;
    }
    this.getArtistTopAlbumNames
}