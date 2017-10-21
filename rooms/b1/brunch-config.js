// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.npm = {
  enabled: true,
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap',
   // pug: 'pug',
    // selectpicker: 'bootstrap-select',
    // datepicker: 'bootstrap-datepicker',
    // table: 'bootstrap-table',
    // datatables: 'datatables'
  },
  styles: {
    bootstrap: ['dist/css/bootstrap.css']
    // 'bootstrap-select': ['dist/css/bootstrap-select.css'],
    // 'bootstrap-datepicker': ['dist/css/bootstrap-datepicker.css'],
    // 'bootstrap-table': ['dist/css/bootstrap-table.css'],
    // 'font-awesome': ['css/font-awesome.css'],
    // datatables: ['media/css/jquery.dataTables.css']
  }
};

exports.plugins = {
  babel: { presets: ['latest']}
  //   verbose: false,
  //   onlyChanged: true
 }

