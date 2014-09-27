import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
	name: 'custom-session',
	before: 'simple-auth',
	initialize: function() {
		Session.reopen({
			// users uniquely identified by email
			// currentUser: function() { // this works! We had to use a computed property!!
			// 	return 'fred';
			// }.property()

			currentUser: function() {
				var userEmail = this.get('user_email');
				if (!Ember.isEmpty(userEmail)) {
					// going to have a problem as we can't look up against all users.
					// will hack here and search against each user group until we find a match
					// can we not get these because we haven't loaded the session yet and as such are not authorized?

					// Ok, looks like ActiveModelAdapter doesn't support query other than by id so what we have below
					// is just a query for all of the speakers and guests.
					// So, my hack for now could be to just search the returned users for the correct email address
					// and go from there.	

					// using the devTools and s = lookup('simple-auth-session:main')
					// we can get s.currentUser but it is undefined, which is weird because
					// we've populated session.currentUser in the application template
					// return 'chuck'; // this will let us return session.currentUser as 'chuck'


					// 
					var store = this.container.lookup('store:main');
					return store.find('speaker', 1);
					// var user =  store.find('speaker', 1);
					// user.then( function(speaker) {
					// 	console.log('speakers name is ' + speaker.get('name')); // we get this in the console but
					// 	return speaker; // this is not setting currentUser, perhaps its been set after the view has rendered	
					// });

					// var users = [store.find('speaker', { email: userEmail }), store.find('guest', { email: userEmail })];
					// return Ember.RSVP.Promise.all(users).then(function(results){
					//   for (var i=0; i < results[0].content.length; i++){
					//   	if (results[0].content[i].get('email') === userEmail){
					//   		// return results[0].content[i];
					//   		return 'chuck'; // this never seems to set session.currentUser...
					//   	}
					//   }

					//   for (i=0; i < results[1].content.length; i++){
					//   	if (results[1].content[i].get('email') === userEmail){
					//   		return results[1].content[i];
					//   	}
					//   }					  
					// });

					// return 'frank'; // hmm, this gets hit even though we hit return 'chuck' above
				}
			}.property('userEmail'),

			currentUserName: function() {
				return this.get('currentUser').get('name');
			}.property('currentUser')
		});
	}
};