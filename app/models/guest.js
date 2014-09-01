import DS from 'ember-data';

var Guest = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  workshops: DS.hasMany('workshop', { async: true } )
});

Guest.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Cliff Ramon',
			email: 'cliff@somewhere.com',
			password: 'password',
			workshops: [ 6, 9 ] 
		},
		{
			id: 2,
			name: 'Dana Orf',
			email: 'dana@somewhere.com',
			password: 'password',
			workshops: [ 6, 8, 10 ]
		},
		{
			id: 3,
			name: 'Ralf fine',
			email: 'ralf@somewhere.com',
			password: 'password',
			workshops: [ 7, 9, 10 ]
		}
	]
});

export default Guest;