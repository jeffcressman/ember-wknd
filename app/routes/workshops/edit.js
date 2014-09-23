import Ember from 'ember';

var WorkshopEditRoute = Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('speakers', this.store.find('speaker'));
    this._super(controller, model); // need this to pass the model on
  },

	model: function(params) {
		return this.store.find('workshop', params.id);
	},

	deactivate: function() {
		this.currentModel.rollback();
	},

	actions: {
		save: function() {
			var route = this;
			var store = this.store;
			this.currentModel.save().then(function(workshop) {
				// Method of adding workshop to speaker
				store.find('speaker', route.controller.speaker).then(function(speaker) {
					speaker.get('workshops').then(function(workshops){
						workshops.addObject(workshop);
						speaker.save();
					});
				});
				route.transitionTo('workshops.workshop', workshop);
			});
		},

		cancel: function() {
			this.transitionTo('workshops.workshop', this.currentModel);
		}
	}
});

export default WorkshopEditRoute;

