var User = DS.Model.extend({
  username: DS.attr('string'),
  
  created_at: DS.attr('date'),
  //updated_at: DS.attr('date'),
  apps: DS.belongsTo('app')
});

User.reopenClass({
  FIXTURES: [
    { id: 1, username: 'Speed' }
  ]
});
 
export default User