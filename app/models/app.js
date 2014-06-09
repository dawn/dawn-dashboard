var App = DS.Model.extend({
  name: DS.attr('string'),
  version: DS.attr('number'),
  // env
  // git
  // formation
  created_at: DS.attr('date'),
  //updated_at: DS.attr('date'),
  user: DS.belongsTo('user')
});

App.reopenClass({
  FIXTURES: [
    { id: 1, name: 'ruby-sample', user: 1 }
  ]
});
 
export default App