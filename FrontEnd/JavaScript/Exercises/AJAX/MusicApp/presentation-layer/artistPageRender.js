
import { ArtistLogic } from "/business-layer/artistLogic.js";
import * as jquerry from "/jquery-3.3.1.js"

// moment.locale("mk");                                //pretvori go vo MK format

export function RenderArtist() {

    this.artistPageData = new ArtistLogic();
    this.artistData = {};
    this.renderAll = async function (artistName) {

        this.artistData = await this.artistPageData.getArtistPageData(artistName);

        $("<div>").attr("id", "main-container").addClass("main-container").prependTo("body");           //main contain
        $("<div>").addClass("artist-container").appendTo("#main-container");                            //artist main
        $("<div>").addClass("artist-top").append(this.renderSimilar()).appendTo(".artist-container");   //artist top
        $("<div>").addClass("artist").prependTo(".artist-top");                                      //artist name photo
        $("<div>").addClass("artist-bottom").appendTo(".artist-container");
        $("<div>").addClass("top-tracks-container").append(this.renderAlbumTracks()).prependTo(".artist-top");
        $(".artist").append(this.renderArtistProfile())
        .append(this.renderArtistPhoto())
        .append(this.renderBio());
        
        // .append(this.renderAlbumPublished())
        $(".artist-bottom").append(this.renderArtistAlbum());

    }
    this.renderArtistProfile = function () {
        return $("<div>").addClass("artist-name").html(this.artistData.artist.name);
    }

    this.renderArtistPhoto = function () {
        return $("<img>").addClass("artist-photo").attr("src", this.artistData.artist.image[4]["#text"]);
    }

    this.renderAlbumPublished = function () {
        // return $("<div>").addClass("album-published").html(moment(this.artistData.artist.bio.published).format("DD - MMMM - YYYY"));
    }

    this.renderSimilar = function () {
        var similarMain = $("<div>").addClass("similarMain");
        $("<span>").addClass("similar-title").html("Similar Artists").appendTo(similarMain);

        for (let index = 0; index < this.artistData.artist.similar.artist.length; index++) {

            var i = $("<div>").addClass("similar").appendTo(similarMain);
            $("<img>").addClass("similarPhoto").attr("src", this.artistData.artist.similar.artist[index].image[1]["#text"])
            .appendTo(i);
             $("<a>").addClass("a-tag").html(this.artistData.artist.similar.artist[index].name).appendTo(i)
                .attr("href", this.artistData.artist.similar.artist[index].name).appendTo(i).on("click", (event) => {
                    event.preventDefault();
                    $("#main-container").html("");
                    console.log(event.target);

                    this.renderAll(event.target.text)

                });
        }
        return similarMain;
    }

    this.renderBio = function () {
        return $("<div>").addClass("artist-bio").html(this.artistData.artist.bio.summary)
    }

    this.renderArtistAlbum = function () {

        var $albums = $("<div>").addClass("artist-album");
        for (let index2 = 0; index2 < 5/*this.artistData.album.length*/; index2++) {
            var $album = $("<div>").addClass("album").appendTo($albums);
            $("<h3>").addClass("albumName").html(this.artistData.album[index2].name).appendTo($album);
            $("<img>").addClass("album-photo").attr("src", this.artistData.album[index2].image[2]["#text"]).appendTo($album);
            for (let index3 = 0; index3 < this.artistData.album[index2].tracks.track.length; index3++){

                $("<span>").addClass("track-name").html((index3+1)+". "+this.artistData.album[index2].tracks.track[index3].name)
                .appendTo($album);
            }
        }
        return $albums;
    }

    this.renderAlbumTracks = function (){
        var $tracks = $("<div>").addClass("top-tracks");
        $("<span>").addClass("similar-title").html("Top 20 Hits").appendTo($tracks);

        for (let index4 = 0; index4 < 20; index4++){
            $("<div>").addClass("top-tracks").html((index4+1)+". "+this.artistData.tracks[index4]).appendTo($tracks);
        }
        return $tracks;
    }
}

// $("<span>").addClass("track-name").html((INDEKS+1)+". "+this.artistData.tracks[INDEX?])  //Kodot za TOP Tracks
// .appendTo($KADETREBA);