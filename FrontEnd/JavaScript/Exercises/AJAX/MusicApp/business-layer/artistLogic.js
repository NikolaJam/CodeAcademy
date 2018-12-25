function ArtistLogic() {
    this.artistRepo = new ArtistRepository();
    // this.albumRepo = new AlbumRepository();
    
    this.getArtistPageData = async function(artistName) {
        
        var artist =  await this.artistRepo.getArtist(artistName);
        // var album = await this.albumRepo.getAlbum(artistName);
        
        var pageData = {
            artist: artist,
            // album: album
        }
        console.log(pageData);
        return pageData;
    }
}