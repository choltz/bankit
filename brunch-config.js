// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.paths = {
  watched: ['app', 'app/buh']
};

exports.plugins = {
  "babel": {
    presets: ['es2015', 'stage-2']
  },
  "vue-brunch": ""
};
