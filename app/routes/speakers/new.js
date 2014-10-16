import AuthorizedRoute from 'ember-wknd/routes/authorized';

export default AuthorizedRoute.extend( {
	access: ['Host'],
  setupController: function(controller) {
    controller.set('fields', {});
  }
});