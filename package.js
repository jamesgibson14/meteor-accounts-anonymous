Package.describe({
  summary: "Anonymous account support."
});


Package.on_use(function (api, where) {
  api.use('accounts-base', ['client', 'server']);
  
  api.add_files('anonymous_server.js', 'server');
  api.add_files('anonymous_client.js', 'client');
});

Package.on_test(function (api) {
  api.use(['accounts-anonymous', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('anonymous_tests.js', ['client']);
});
