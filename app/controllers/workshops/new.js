import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createWorkshop: function() {
			var self = this;
			var store = self.store;
			var fields = this.get('fields');
			var speaker_id = fields.speaker; // save speaker as we need to load it before adding to workshop
			fields.speaker = null;

			var workshop = store.createRecord('workshop', fields);

			// we loaded our speakers in the controller so we can access them here		
			// But, its not a worry to to 'load' it again if we've loaded it once
			//   http://emberjs.com/guides/models/
			//   The store will automatically cache records for you. If a record had already been loaded, 
			//   asking for it a second time will always return the same object instance. This minimizes 
			//   the number of round-trips to the server, and allows your application to render its UI to 
			//   the user as fast as possible.	


			// // Method of adding speaker to workshop
			// // This doesn't work even though its the method given in the Ember docs
			// // http://emberjs.com/guides/models/creating-and-deleting-records/
			// store.find('speaker', speaker_id).then(function(speaker) {
			// 	workshop.set('speaker', speaker);
			// });

			workshop.save().then(function() {
				// Method of adding workshop to speaker works correctly
				store.find('speaker', speaker_id).then(function(speaker) {

					speaker.get('workshops').then(function(workshops){
						workshops.addObject(workshop);
						speaker.save();
					});
					// console.log('found speaker: ' + speaker.get('name') + ' for speaker id: ' + speaker_id); // this gets us a name

				});				
				self.transitionToRoute('workshops.index');
			});
		},
		cancel: function() {
			this.transitionToRoute('workshops');
		}
	}
});