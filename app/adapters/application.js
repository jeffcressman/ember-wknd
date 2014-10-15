import DS from 'ember-data';
import config from '../config/environment';

// For testing without connecting to our Rails app
// export default DS.FixtureAdapter.extend();

// TODO: Why isn't this extending DS.ActiveModelAdapter?
//       Probably would simplify code in other places.
var ApplicationAdapter = DS.RESTAdapter.extend({
  
  host: config.APP.SERVER_URL

});

export default ApplicationAdapter;