import DS from 'ember-data';

var Speaker = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  bio: DS.attr('string'),
  workshops: DS.hasMany('workshop', { async: true } )
});

Speaker.reopenClass({
	FIXTURES: [
		{
			id: 4,
			name: 'Banner Heff',
			bio: 'All around great guy and story teller.',
			workshops: [ 6, 7 ] 
		},
		{
			id: 5,
			name: 'Nacy Fall',
			bio: "If it's broke Nacy can fix it!",
			workshops: [ 8, 9, 10, ]
		}
	]
});

export default Speaker;