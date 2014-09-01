import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createSpeaker: function() {
			var self = this;
			var speaker = this.store.createRecord('speaker', this.get('fields'));
			speaker.save().then(function() {
				self.transitionToRoute('speakers.index');
			});
		}
	}
});