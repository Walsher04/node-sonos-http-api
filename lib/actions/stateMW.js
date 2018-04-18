'use strict';

function stateMW(player) {
  return Promise.resolve(player.state);
}

module.exports = function (api) {
  api.registerAction('stateMW', stateMW
}
