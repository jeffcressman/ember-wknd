import AuthorizedRoute from 'ember-wknd/routes/authorized';

export default AuthorizedRoute.extend( {
	access: ['host'],
  setupController: function(controller) {
    controller.set('fields', {});
  }
});