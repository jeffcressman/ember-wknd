import AuthorizedRoute from 'ember-wknd/routes/authorized';

export default AuthorizedRoute.extend( {
	access: ['host'],

  model: function() {
    return this.store.find('guest');
  }
});