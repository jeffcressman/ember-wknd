import DS from 'ember-data';

// For testing without connecting to our Rails app
// export default DS.FixtureAdapter.extend();

var ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});
export default ApplicationAdapter;