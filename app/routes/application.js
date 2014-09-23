import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
	beforeModel: function(transition) {
		this._super(transition);
    return this.csrf.fetchToken();
  },

  setupController: function(controller) {
    controller.set('fields', {});
  }
});
