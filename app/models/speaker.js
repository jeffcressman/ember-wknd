import DS from 'ember-data';
import DeletesDependentRelationships from 'ember-wknd/mixins/deletes-dependent-relationships';

var Speaker = DS.Model.extend(DeletesDependentRelationships, {
	dependentRelationships: ['workshops'],

  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  bio: DS.attr('string'),
  workshops: DS.hasMany('workshop', { async: true } )
});

Speaker.reopenClass({
	FIXTURES: [
		{
			id: 4,
			name: 'Banner Heff',
			email: 'banner@somewhere.com',
			password: 'password',
			bio: 'All around great guy and story teller.',
			workshops: [ 6, 7 ] 
		},
		{
			id: 5,
			name: 'Nacy Fall',
			email: 'nancy@somewhere.com',
			password: 'password',
			bio: "If it's broke Nacy can fix it!",
			workshops: [ 8, 9, 10, ]
		}
	]
});

export default Speaker;