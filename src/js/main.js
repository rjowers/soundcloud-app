import $ from 'jquery';
import token from "./token.js"

function test(data) {
  $.ajax({
    url: `http://api.soundcloud.com/tracks/?client_id=${token}`,
    dataType: "json",
    data: {
    q: data
  },
  success: console.log
  });
};


function playMusic{

}

$(".container").html(`
  <audio src="https://api.soundcloud.com/tracks/259021543/stream?client_id=${token}"controls></audio>`)

test("thewillpeterson");


//1. Function that listens for button
//2. onclick buttton- runs function that loops through the music. plays music
//3. another function that displays all the music data on the page.
