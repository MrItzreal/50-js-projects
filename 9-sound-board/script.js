const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// 1:loop sounds
// 2:create a button element
// 3:add class to new button
// 4:insert the sounds text
// 5:get ID and append the child
// 6:make sure sounds play one at a time.

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

//this function makes sure that only
//one sound are played at a time
function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
