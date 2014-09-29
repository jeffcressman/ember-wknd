import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createGuest: function() {
			var self = this;
			var guest = this.store.createRecord('guest', this.get('fields'));
			guest.save().then(function() {
				self.transitionToRoute('guests.index');
			});
		},
		cancel: function() {
			this.transitionToRoute('guests');
		}
	}
});