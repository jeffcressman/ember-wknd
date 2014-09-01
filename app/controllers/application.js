import Ember from 'ember';

export default Ember.Controller.extend({

	myLoginModalButtons: [
			Ember.Object.create({title: 'Login', clicked: 'login'}),
			Ember.Object.create({title: 'Cancel', clicked: 'cancel', dismiss: 'modal'})
	],

	myRegistrationModalButtons: [
		Ember.Object.create({title: 'Register', clicked: 'register'}),
		Ember.Object.create({title: 'Cancel', clicked: 'cancel', dismiss: 'modal'})
	],

	// the fields property will contain 'loginUsername' and 'loginPassword' via this.get('fields')
	actions: {
		login: function() {
			Bootstrap.NM.push('Login success', 'success');
			return Bootstrap.ModalManager.hide('myLoginModal');
		},

		// Controllers persist so if we happen to register more than one user
		// the current setup does not clear 
		register: function() {
			var self = this;
			var guest = this.store.createRecord('guest', this.get('fields'));
			guest.save().then(function() {
				Bootstrap.ModalManager.hide('myRegistrationModal');
				self.transitionToRoute('guest', guest);
			});
		},

		cancel: function() {
			return Bootstrap.NM.push('Login cancelled', 'info');
		},

		showLogin: function() {
			return Bootstrap.ModalManager.show('myLoginModal');
		},

		showRegistration: function() {
			return Bootstrap.ModalManager.show('myRegistrationModal');
		}		
	}
});


// example code from using the fields property to create a speaker
// var self = this;
// var speaker = this.store.createRecord('speaker', this.get('fields'));
// speaker.save().then(function() {
// 	self.transitionToRoute('speakers.index');
// });