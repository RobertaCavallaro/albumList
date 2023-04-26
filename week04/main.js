/////// VARIABLES////////
let elFmSaveAlbum = document.getElementById("fmSaveAlbum");
let elFmShowAlbum = document.getElementById("fmShowAlbum");
let elDivShowAlbum = document.getElementById("divShowAlbum");

//Create an Array to store data, and make it empty//////
let arrAlbums = [];

//Object Constructor Notation variable for an album
function Album(artist, name, year, notes) {
  this.artist = artist;
  this.name = name;
  this.year = year;
  this.notes = notes;
  //Define a Method (a command) to calculate how old the Album is
  this.getAge = function () {
    //Check the current year
    let currentYear = new Date();
    //Subtract the album year from the current year to show on screen
    return currentYear.getFullYear() - this.year;
  };
}

/// FUNCTIONS////////////
///Get the Album data
function fnSaveAlbum(event) {
  event.preventDefault();
  console.log("fnSaveAlbum(event) is running ....");

  //Read the values of the <inputs>
  let valInAlbumArtist = document.getElementById("inAlbumArtist").value;
  let valInAlbumName = document.getElementById("inAlbumTitle").value;
  let valInAlbumYear = document.getElementById("inAlbumYear").value;
  let valInAlbumNote = document.getElementById("inAlbumNotes").value;

  console.log(valInAlbumArtist, valInAlbumName, valInAlbumYear, valInAlbumNote);

  let tmpAlbum = new Album(
    valInAlbumArtist,
    valInAlbumName,
    valInAlbumYear,
    valInAlbumNote
  );
  console.log(tmpAlbum);

  //Add the newest Album to the Array ( the CD wallet; "database")
  arrAlbums.push(tmpAlbum);
  console.log(arrAlbums, arrAlbums.length);

  //Reset the form to add a new album
  elFmSaveAlbum.reset();

  //Pop up to show saved
  window.alert("Saved Album!");
}
function fnShowAlbum(event) {
  event.preventDefault();
  console.log("fnShowAlbum(event) is running ....");

  //First, check if there are any albums saved before proceeding
  //Using an If..Else (Conditional Statement), check if empty Array (empty collection)
  if (!arrAlbums.length) {
    // Array is empty, say a message
    window.alert("Please save an album first!");
  } else {
    // or Else, there is at least 1 album, show it
    console.log("Current albums " + arrAlbums.length);
    //First randomly pick an album
    let randomAlbum = Math.floor(Math.random() * arrAlbums.length);

    // On-screen, show the album
    elDivShowAlbum.innerHTML =
      "<p><strong>Album Artist: </strong>" +
      arrAlbums[randomAlbum].artist +
      "<br><strong>Album Name: </strong>" +
      arrAlbums[randomAlbum].name +
      "<br><strong>Album Year: </strong>" +
      arrAlbums[randomAlbum].year +
      "<br><strong>Album Notes: </strong>" +
      arrAlbums[randomAlbum].notes +
      "<br><strong>Album Age: </strong>" +
      arrAlbums[randomAlbum].getAge() +
      "</p>";
  }
}

///EVENT LISTENERS////////////
// Listen for clicking Submit on the Save form
elFmSaveAlbum.addEventListener("submit", function (event) {
  fnSaveAlbum(event);
});
//Listen for clicking the Show an album button
elFmShowAlbum.addEventListener("submit", function (event) {
  fnShowAlbum(event);
});
