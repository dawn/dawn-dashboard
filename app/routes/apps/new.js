var AppsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('app', {});
  }
});

export default AppsNewRoute;
