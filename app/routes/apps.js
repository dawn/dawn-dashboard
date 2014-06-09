var AppsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('app');
  },
  actions: {
    save: function(app) {
      app.save();
    }
  }
});

export default AppsRoute;
