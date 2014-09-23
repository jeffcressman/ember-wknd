import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  setupController: function(controller) {
  	// trying a different method than working with empty fields array
  	controller.set('selectedGuest', null);
  	controller.set('selectedWorkshop', null);
    // controller.set('fields', {});
    controller.set('guests', this.store.find('guest'));
    controller.set('workshops', this.store.find('workshop'));
  }
});