'use strict';

//function state(player) {
//  return Promise.resolve(player.state);
//}
function tryReplaceWithHighresAlbumArt(track) {
    if (!track.uri) {
      return;
    }

    return musicServices.tryGetHighResArt(track.uri)
      .then((highResAlbumArtUrl) => {
        track.absoluteAlbumArtUri = highResAlbumArtUrl;
      }).catch(() => {
        if (track.albumArtUri && track.albumArtUri.startsWith('http')) {
          track.absoluteAlbumArtUri = track.albumArtUri;
        } else if (track.albumArtUri) {
          track.absoluteAlbumArtUri = `${_this.baseUrl}${track.albumArtUri}`;
        }
      });


module.exports = function (api) {
  api.registerAction('state', state);
}
