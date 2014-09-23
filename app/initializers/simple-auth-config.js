export default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function() {
 
    var tokenEndpoint = '/users/sign_in';
    EmberWkndENV['simple-auth'] = {
      authorizer: 'simple-auth-authorizer:devise',
      crossOriginWhitelist:[
        EmberWkndENV.APP.SERVER_URL
      ]
    };
 
    EmberWkndENV['simple-auth-devise'] = {
      serverTokenEndpoint: EmberWkndENV.APP.SERVER_URL + tokenEndpoint
    };
 
    window.ENV = EmberWkndENV;
  }
};