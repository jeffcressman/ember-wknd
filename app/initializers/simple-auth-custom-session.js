import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
	name: 'custom-session',
	before: 'simple-auth',
	initialize: function() {
		Session.reopen({

			setCurrentUser: function() {
				var userId = this.get('user_id');
				var type = this.get('user_type');
				if (!Ember.isEmpty(userId)) {
					var self = this;
					var store = this.container.lookup('store:main');

					store.find(type, userId).then(function(user){
						self.set('currentUser', user);
						self.set('currentUser.role', type);
					});
				}
			}.observes('user_id'),
		});
	}
};