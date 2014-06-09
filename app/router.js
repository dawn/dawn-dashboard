var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('apps', function() {
    this.route('new');
    this.resource('app', { 'path' : '/:app_id' }, function() {
      this.route('controls');
      this.route('metrics');
      this.route('services');
      this.route('env');
      this.route('logs');
      this.route('domains');
      this.route('ssl');
      this.route('settings');
    });
  });
});

export default Router;
