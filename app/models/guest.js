import DS from 'ember-data';
import DeletesDependentRelationships from 'ember-wknd/mixins/deletes-dependent-relationships';

var Guest = DS.Model.extend(DeletesDependentRelationships, {
	dependentRelationships: ['registrations'],

  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  registrations: DS.hasMany('registration', { async: true } )
});

Guest.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Cliff Ramon',
			email: 'cliff@somewhere.com',
			password: 'password',
			registrations: [ 20, 21 ] 
		},
		{
			id: 2,
			name: 'Dana Orf',
			email: 'dana@somewhere.com',
			password: 'password',
			registrations: [ 22, 23, 24 ]
		},
		{
			id: 3,
			name: 'Ralf fine',
			email: 'ralf@somewhere.com',
			password: 'password',
			registrations: [ 25, 26, 27 ]
		}
	]
});

export default Guest;