import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
	name: 'custom-session',
	before: 'simple-auth',
	initialize: function() {
		Session.reopen({

			setCurrentUser: function() {
				var userEmail = this.get('user_email');
				if (!Ember.isEmpty(userEmail)) {
					// ActiveModelAdapter doesn't support query other than by id so what we have below
					// is just a query for all of the speakers and guests.
					// The hack for now is to search the returned users for the correct email address

					var self = this;
					var store = this.container.lookup('store:main');

					var users = [store.find('speaker', { email: userEmail }), store.find('guest', { email: userEmail }), store.find('host', { email: userEmail })];
					Ember.RSVP.Promise.all(users).then(function(results){
						for (var i=0; i < results[0].content.length; i++){
							if (results[0].content[i].get('email') === userEmail){
								self.set('currentUser', results[0].content[i]);
								self.set('currentUser.role', self.get('currentUser').get('constructor.typeKey'));
								return;
							}
						}

						for (i=0; i < results[1].content.length; i++){
							if (results[1].content[i].get('email') === userEmail){
								self.set('currentUser', results[1].content[i]);
								self.set('currentUser.role', self.get('currentUser').get('constructor.typeKey'));
								return;
							}
						}

						for (i=0; i < results[2].content.length; i++){
							if (results[2].content[i].get('email') === userEmail){
								self.set('currentUser', results[2].content[i]);
								self.set('currentUser.role', self.get('currentUser').get('constructor.typeKey'));
								return;
							}
						}
					});
				}
			}.observes('user_email'),

		});
	}
};