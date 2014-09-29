import Ember from 'ember';

var GuestEditRoute = Ember.Route.extend({

	deactivate: function() {
		this.currentModel.rollback();
	},

	actions: {
		save: function() {
			var route = this;

			this.currentModel.save().then(function(guest) {
				route.transitionTo('guest', guest);
			});
		},

		cancel: function() {
			this.transitionTo('guest', this.currentModel);
		}
	}
});

export default GuestEditRoute;