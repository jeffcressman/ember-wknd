import Ember from 'ember';

var SpeakerRoute = Ember.Route.extend({
 model: function(params) {
	 return this.store.find('speaker', params.id);
 },

 actions: {
	 deleteSpeaker: function() {
		 var speaker = this.currentModel,
				 route = this;

		 speaker.deleteRecord();
		 speaker.save().then(function() {
			 route.transitionTo('speakers');
		 });
	 }
 }
});

export default SpeakerRoute;