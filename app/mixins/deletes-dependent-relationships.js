import Ember from 'ember';

// Picked this up from here: http://stackoverflow.com/questions/15177723/delete-associated-model-with-ember-data
//
// Example usage where deleting Post will delete associated Comments: 
// App.Post = DS.Model.extend(App.DeletesDependentRelationships, {
//     dependentRelationships: ['comments'],
//
//     comments: DS.hasMany('App.Comment'),
//     author: DS.belongsTo('App.User')
// });
//
// App.User = DS.Model.extend();
//
// App.Comment = DS.Model.extend({
//     post: DS.belongsTo('App.Post')
// });
//

export default Ember.Mixin.create({

	// an array of relationship names to delete
	dependentRelationships: null,

	// set to 'delete' or 'unload' depending on whether or not you want
	// to actually send the deletions to the server
	deleteMethod: 'unload', 

	deleteRecord: function() {
			this.deleteDependentRelationships();
			this._super();
	},

	deleteDependentRelationships: function() {
			var self = this;

			var fields = self.get('constructor.fields');
			this.get('dependentRelationships').forEach(function(name) {
					var relationshipType = fields.get(name);
					switch(relationshipType) {
							case 'belongsTo': return self.deleteBelongsToRelationship(name);
							case 'hasMany': return self.deleteHasManyRelationship(name);
					}
			});
	},

	deleteBelongsToRelationship: function(name) {
			var record = this.get(name);
			if (record) {
				this.deleteOrUnloadRecord(record);
			}
	},

	deleteHasManyRelationship: function(key) {
			var self = this;

			// deleting from a RecordArray doesn't play well with forEach, 
			// so convert to a normal array first
			this.get(key).toArray().forEach(function(record) {
					self.deleteOrUnloadRecord(record);
			});
	},

	deleteOrUnloadRecord: function(record) {
			var deleteMethod = this.get('deleteMethod');
			if (deleteMethod === 'delete') {
					record.deleteRecord();
			}
			else if (deleteMethod === 'unload') {
					var store = this.get('store');
					store.unloadRecord(record);
			}
	}

});
