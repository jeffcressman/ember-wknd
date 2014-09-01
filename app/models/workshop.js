import DS from 'ember-data';

var Workshop = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  speaker: DS.belongsTo('speaker', { async: true } )
});

Workshop.reopenClass({
	FIXTURES: [
		{
			id: 6,
			name: 'Getting Started With Ember',
			description: 'All you need to know to get started with Ember.',
			speaker: 4
		},
		{
			id: 7,
			name: 'Routes',
			description: 'Routes, routes, routes.',
			speaker: 4
		},
		{
			id: 8,
			name: 'Templates',
			description: 'Something to look at.',
			speaker: 5
		},
		{
			id: 9,
			name: 'Models',
			description: 'Hooking up your data.',
			speaker: 5
		},
		{
			id: 10,
			name: 'Ember-cli',
			description: 'Putting the pieces together',
			speaker: 5
		}		
	]
});

export default Workshop;