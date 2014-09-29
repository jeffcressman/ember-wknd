import AuthorizedRoute from 'ember-wknd/routes/authorized';

export default AuthorizedRoute.extend( {
	access: ['host', 'speaker'],
  setupController: function(controller) {
    controller.set('fields', {});
    controller.set('speakers', this.store.find('speaker'));
  }
});