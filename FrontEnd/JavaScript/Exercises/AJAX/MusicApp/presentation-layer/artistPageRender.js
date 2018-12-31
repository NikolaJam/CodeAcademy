

import { ArtistLogic } from "/business-layer/artistLogic.js";
import * as jquerry from "/jquery-3.3.1.js"

// moment.locale("mk");                                //pretvori go vo MK format

export function RenderArtist() {

    this.artistPageData = new ArtistLogic();
    this.artistData = {};
    this.renderAll = async function (artistName) {
        this.artistData = await this.artistPageData.getArtistPageData(artistName);

        $("<div>").attr("id", "main-container").addClass("main-container").prependTo("body");
        $("<div>").addClass("artist-container").appendTo("#main-container");
        $("<div>").addClass("artist-top").append(this.renderSimilar()).appendTo(".artist-container");
        $("<div>").addClass("artist").prependTo(".artist-top");
        $("<div>").addClass("artist-bottom").appendTo(".artist-container");

    
            $(".artist").append(this.renderArtistProfile())
            .append(this.renderArtistPhoto())
            .append(this.renderBio());
        
            // .append(this.renderAlbumPublished())
            $(".artist-bottom").append(this.renderArtistAlbum())
            .append(this.renderAlbumTracks());

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

        var $albums = $("<div>").addClass("artist-album").appendTo(".main-container");
        for (let index2 = 0; index2 < 5/*this.artistData.album.length*/; index2++) {

            $("<h3>").addClass("albumName").html(this.artistData.album[index2].name).appendTo($albums);
            $("<img>").addClass("album-photo").attr("src", this.artistData.album[index2].image[2]["#text"]).appendTo($albums);
            for (let index3 = 0; index3 < this.artistData.album[index2].tracks.track.length; index3++){

                $("<span>").addClass("track-name").html((index3+1)+". "+this.artistData.album[index2].tracks.track[index3].name)
                .appendTo($albums);
    
            }
        }
        return $albums;
    }
    this.renderAlbumTracks = function (){

        var $tracks = $("<div>").addClass("album-tracks");
        
        for (let index3 = 0; index3 < 10; index3++){

            $("<div>").addClass("track-name").html(this.artistData.tracks[index3].name).appendTo($tracks);

        }
        return $tracks;
    }
}

// $("<span>").addClass("track-name").html((INDEKS+1)+". "+this.artistData.tracks[INDEX?])  //Kodot za TOP Tracks
// .appendTo($KADETREBA);