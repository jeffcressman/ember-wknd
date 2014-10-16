import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

// This Route will provide a rudimentary ACL based on the user type
export default Ember.Route.extend(AuthenticatedRouteMixin, {
	// array of user types (model name) that are allowed to access this route
	access: [],
	beforeModel: function(transition) {
		this._super(transition); // so we trigger any code in AuthenticatedRouteMixin first
		
		if (this.get('access').contains(this.get('session').get('currentUser.role'))){
			return true;
		} else {
			// manage the unauthorized attempt
			this.transitionTo('unauthorized');
		}
	}
});