import DS from 'ember-data';

var Host = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string')
});

Host.reopenClass({
	FIXTURES: [
		{
			id: 30,
			name: 'Sam',
			email: 'sam@somewhere.com',
			password: 'password'
		}
	]
});

export default Host;