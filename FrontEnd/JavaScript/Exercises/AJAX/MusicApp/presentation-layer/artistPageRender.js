function RenderArtist() {

    this.artistPageData = new ArtistLogic();

    this.renderAll = async function(artistName) {
        var data = await this.artistPageData.getArtistPageData(artistName);
         
        // $("<div>").attr("id","main-container").addClass("main-container").append(data).appendTo("body").insertBefore("<script>");
        
        $("<div>").addClass("artist-container").appendTo("#main-container");
        $("<div>").addClass("artist-name").html(data.artist.name).appendTo(".artist-container");
        $("<div>").addClass("artist-bio").html(data.artist.bio.content).appendTo(".artist-container");
        $("<div>").addClass("artist-album").html(data.artist.album).appendTo(".artist-container");

    }
}

 