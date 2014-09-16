import Ember from 'ember';

var SpeakerEditRoute = Ember.Route.extend({
	model: function(params) {
		return this.store.find('speaker', params.id);
	},

	deactivate: function() {
		this.currentModel.rollback();
	},

	actions: {
		save: function() {
			var route = this;

			this.currentModel.save().then(function(speaker) {
				route.transitionTo('speakers.speaker', speaker);
			});
		},

		cancel: function() {
			this.transitionTo('speakers.speaker', this.currentModel);
		}
	}
});

export default SpeakerEditRoute;