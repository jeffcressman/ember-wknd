import DS from 'ember-data';

var Registration = DS.Model.extend({
  name: DS.attr('string'),
  guest: DS.belongsTo('guest', { async: true }),
  workshop: DS.belongsTo('workshop', { async: true } )
});

Registration.reopenClass({
	FIXTURES: [
		{
			id: 20,
			name: 'Getting Started With Ember',
			guest: 1,
			workshop: 6 
		},
		{
			id: 21,
			name: 'Models',
			guest: 1,
			workshop: 9 
		},
		{
			id: 22,
			name: 'Getting Started With Ember',
			guest: 2,
			workshop: 6 
		},
		{
			id: 23,
			name: 'Templates',
			guest: 2,
			workshop: 8 
		},
		{
			id: 24,
			name: 'Ember-cli',
			guest: 2,
			workshop: 10
		},
		{
			id: 25,
			name: 'Routes',
			guest: 3,
			workshop: 7 
		},
		{
			id: 26,
			name: 'Models',
			guest: 3,
			workshop: 9
		},
		{
			id: 27,
			name: 'Ember-cli',
			guest: 3,
			workshop: 10 
		}				
	]
});

export default Registration;