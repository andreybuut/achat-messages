exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /\.js$/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

// exports.npm = {
//     enabled:true,
// }

exports.npm = {
  enabled: true,
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap',
    axios: 'axios',
  },
  styles: {
    bootstrap: ['dist/css/bootstrap.css']
  }
  
};

exports.plugins = {
  babel: { presets: ['es2015', 'latest']},
  verbose: false,
  onlyChanged: true,
  autoReload: {enabled: true},
// copy cat init
// copy fonts from bootstrap
  copycat: {
    fonts: [
      'node_modules/bootstrap/dist/fonts'
    ],
    verbose: false,
    onlyChanged: true
  },
 };

// if have start `error: watch {appName}/ ENOSPC`
exports.watcher = {
  awaitWriteFinish: true,
  usePolling: true
};

