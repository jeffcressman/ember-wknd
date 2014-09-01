import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberWkndENV.locationType
});

// Get rid of the # in URLs
Router.reopen({
	location: 'auto',
	rootURL: '/'
});

Router.map(function() {

	this.route('login', { path: '/login'});

	this.resource('guests', function () {} );

	this.resource('guest', { path: '/guest/:guest_id' }, function () {
		this.resource('guest.workshops', { path: '/workshops'}, function () {
			this.resource('guest.workshops.workshop', { path: '/:workshop_id'}, function () {
				this.resource('guest.workshops.workshop.speaker', { path: '/speaker/:speaker_id'} );
			});
		});
	});

	this.resource('speakers', function () {
		this.route('new');
		this.resource('speakers.speaker', { path: '/:speaker_id'}, function () {});
	});

	this.resource('workshops', function () {
		this.resource('workshops.workshop', { path: '/:workshop_id' });
	});
	
});

export default Router;
