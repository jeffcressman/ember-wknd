import Ember from 'ember';

var WorkshopRoute = Ember.Route.extend({
 model: function(params) {
	 return this.store.find('workshop', params.id);
 },

 actions: {
	 deleteWorkshop: function() {
		 var workshop = this.currentModel,
				 route = this;

		 workshop.deleteRecord();
		 workshop.save().then(function() {
			 route.transitionTo('workshops');
		 });
	 }
 }
});

export default WorkshopRoute;