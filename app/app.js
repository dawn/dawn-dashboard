import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'dawn-dashboard', // TODO: loaded via config
  Resolver: Resolver,
  ApplicationAdapter: DS.FixtureAdapter // use fixtures for now
});

loadInitializers(App, 'dawn-dashboard');

export default App;
