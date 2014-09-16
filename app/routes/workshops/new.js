import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields', {});
    controller.set('speakers', this.store.find('speaker'));
  }
});