var playList = [
  ['Song Title 1', 'Artist 1'],
  ['Song Title 2', 'Artist 2'],
  ['Song Title 3', 'Artist 3'],
  ['Song Title 4', 'Artist 4'],
  ['Song Title 5', 'Artist 5']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ul>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ul>';
  print(listHTML);
}

printSongs(playList);





















