import $ from 'jquery';
import token from "./token.js"



function getData(data, callback) {
    $.ajax({
        url: `http://api.soundcloud.com/tracks/?client_id=${token}`,
        dataType: "json",
        data: {
            q: data
        },
        success: callback
    })
};




$(".music-player").html(`

<audio class="playthesong" src=""controls></audio>
<div class="nowplay"><p>Now Playing:</p></div>

`)


//https://api.soundcloud.com/tracks/308225130/stream?client_id=${token}


function appendData(songs) {
    console.log(songs)
    for (var count = 0; count < songs.length; count++) {
        $(".music").append(
            `

    <div class="musicStuff">

      <img class="song-pictures" data-id="${songs[count].id}" src="${songs[count].artwork_url}"/>
      <div class="musicStream">${songs[count].stream_url}?client_id=${token}</div>
    <ul>
      <li><div class="titles">${songs[count].title}</div></li>
    </ul>

    </div>
    `)
        $(".musicStream").hide();
    }


    $(".song-pictures").on("click", function pickSong(event) {
        var target = $(event.currentTarget).next(".musicStream").html();
        playSong(target);
    });

    $(".song-pictures").on("click", function nowPlaying(event) {
        var othertarget = $(event.currentTarget).next(".titles").html();
        putSong(othertarget);

    });


}
////////////////////////////////////////////////////////////////////////////////



function playSong(target) {
    $(".playthesong").replaceWith(`<audio src="${target}" controls></audio>`)

};



function putSong(othertarget) {
    $(".nowplay").replaceWith(`<p>Now Playing:${othertarget}</p>`)
}





function searchMusic(event) {
    event.preventDefault();
    $(".music").empty();
    var input = $(".input").val();
    getData(input, appendData);

}

$(".Searchformusic").click(searchMusic)
