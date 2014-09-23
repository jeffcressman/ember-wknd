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

	this.route('login');

	this.resource('guests', function () {} );

	this.resource('guest', { path: '/guest/:guest_id' }, function () {
		this.route('new');
		this.route('edit', { path: '/:guest_id/edit' });
		this.resource('guest.workshops', { path: '/workshops'}, function () {
			this.resource('guest.workshops.workshop', { path: '/:workshop_id'}, function () {
				this.resource('guest.workshops.workshop.speaker', { path: '/speaker/:speaker_id'} );
			});
		});
	});

	this.resource('speakers', function () {
		this.route('new');
		this.route('edit', { path: '/:speaker_id/edit' });
		this.resource('speakers.speaker', { path: '/:speaker_id'}, function () {});
	});

	this.resource('workshops', function () {
		this.route('new');
		this.route('edit', { path: '/:workshop_id/edit' });
		this.resource('workshops.workshop', { path: '/:workshop_id' }, function() {});
	});

	this.resource('registrations', function () {
		this.route('new');
		this.route('edit', { path: '/:registration_id/edit' });
		this.resource('registrations.registration', { path: '/:registration_id' });
	});
	
});

export default Router;
