import DS from 'ember-data';

// For testing without connecting to our Rails app
// export default DS.FixtureAdapter.extend();

var ApplicationAdapter = DS.RESTAdapter.extend({
  
  host: window.EmberWkndENV.APP.SERVER_URL

});

export default ApplicationAdapter;