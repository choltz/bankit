// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.paths = {
  watched: ['app', 'app/assets']
};

exports.plugins = {
  "babel": {
    presets: ['es2015', 'stage-2']
  }
};
