import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
  	// trying a different method than working with empty fields array
  	controller.set('selectedGuest', null);
  	controller.set('selectedWorkshop', null);
    // controller.set('fields', {});
    controller.set('guests', this.store.find('guest'));
    controller.set('workshops', this.store.find('workshop'));
  }
});