# Ember Wknd

WORK IN PROGRESS

## TODO

* register for a workshop
* admin should support full CRUD for all requirements
    - e.g. currently you can create a registration but not one that has both a guest and workshop as required.      
* move the descriptive content here to a blog post
* add options for deploying to a variety of environments
* add code climate and similar badges
* add testing
* move all fixture data into a single `fixture.js` file or use mocks with Express server
* check out <http://indexiatech.github.io/ember-forms/#/getstarted> for Embered Bootstrap styled forms
* use Bootstrap for Ember components where possible instead of raw Bootstrap CSS and javascript
* Embered modals (modals have a route so that state is fully expressed by URL)

## IMPROVE 

* Make Speakers and Workshops pages show clicked item on same page via outlet
* For the main page we could simply have the IndexView render the speaker and workshop templates
into named outlets, which would load their respective controllers and thus models, instead of having the IndexRoute load two models into a 'multi-model'
* DRY up the templates as some are nearly identical
  * <http://blog.jasonkriss.com/building-an-app-with-ember-app-kit-part-4/>

## NOTES

I like how the [Ruby on Rails Tutorial](http://www.railstutorial.org/book/frontmatter) starts with the first chapter being 'From zero to deploy'. That's what I want to start with when learning something new.

## Background

While building my first [Ember](http://emberjs.com/) project I started down a number of roads in terms of what tooling to use and how I was going to deploy my application.

All I knew was that I wanted Ember for the front-end, [Ruby on Rails](http://rubyonrails.org/) for the backend, and [Bootstrap](http://getbootstrap.com/). I chose Rails for the backend because I've already had some experience with it. I was using Boostrap to make prototyping faster and a bit easier on the eye. While prototyping I used [Bower](http://bower.io) to manage my javascript packages.

I started out by working through this excellent series, [1](http://reefpoints.dockyard.com/2014/05/07/building-an-ember-app-with-rails-part-1.html) [2](http://reefpoints.dockyard.com/2014/05/08/building-an-ember-app-with-rails-part-2.html) [3](http://reefpoints.dockyard.com/2014/05/09/building-an-ember-app-with-rails-part-3.html) [4](http://reefpoints.dockyard.com/2014/05/31/building-an-ember-app-with-rails-part-4.html), by [Brian Cardarella](https://github.com/bcardarella) of [Dockyard](http://dockyard.com). The Ember application is built using [ember CLI](http://www.ember-cli.com/). The project is configured such that the Ember and Rails apps are in a single git repository. The Rails app is just your vanilla variety with some things stripped out that the Ember app won't need, like the asset pipeline.

At the same time I also started going through [another great Ember and Rails tutorial](http://ember.vicramon.com/) by [Vic Ramon](https://github.com/vicramon) with my friend [Richie Khoo](https://github.com/evolve2k). In this tutorial the `ember-rails` gem is used to build the Ember project and hook it up with Rails.

The [Dockyard](http://dockyard.com) series doesn't have a post on deployment yet and the ember CLI use of ES6 modules, something I'm not familiar with yet, pushed me in the direction of using `ember-rails`. Given that I had been using [Bower](http://bower.io) already I figured I'd keep using it and use the [bower-rails](https://github.com/42dev/bower-rails/) gem to integrate it with rails. After some difficulties getting Bootstrap working properly with the Rails asset pipeline and some consideration around deployment I've ended up here, with the desire to keep my Ember and Rails apps seperated.

## Goals

Before coding an application I want to know that I have and end-to-end solution working. 

* Ember and Rails on seperate servers
* Include Bootstrap
* Use fixture data for prototyping with Ember
* Authentication
  * `ember-simple-auth`
  * Devise

## The App

Ficticious Ember weekend conference with Guests, Speakers, Workshops, Registrations, and Hosts.

The default application view is a public list of Speakers and Workshops.
<emberwknd.com/>

Guests can register and login
`/login`
`/guests/new`
Guests have a name, email, password, and list of workshops they are attending.
`/guest/:id`
Guests can sign up for Workshops via register button
`/workshops/:id/`

The Guest 'page' demonstrates nested routes and views, displaying the workshop details when clicking a workshop.
`/guest/:id/workshops/:id`
`/guest/:id/workshops/:id/speaker/:id`

Speakers have a name, bio, and list of workshops they are presenting.
`/speakers`
`/speaker/:id`

A Workshop has a name, description, and id of the Speaker giving it.
`/workshop/:id`

Hosts can edit Workshops, Speakers, and Guests.
`/hosts`
`/workshop/:id/edit`
`/speaker/:id/edit`

todo: The login button demonstrates using modals and named outlets.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

## Resources Used To Build This Application

* <http://stackoverflow.com/questions/23349959/recommended-way-to-include-bootstrap-library-in-ember-js-ember-cli-app>
* <http://ember.vicramon.com/>
* <http://reefpoints.dockyard.com/2014/05/07/building-an-ember-app-with-rails-part-1.html>
* [This](http://givan.se/p/00000000) was super helpful for getting devise and CORS sorted out. The rails-csrf section is out of date now. See the [rails-csrf ember-cli addon](https://github.com/abuiles/rails-csrf) before implementing anything from this post.

## How This Application Was Built

```bash
npm install -g ember-cli
npm install -g bower
ember new ember-wknd
cd ember-wknd
npm install --save-dev ember-cli-bootstrap
```
Get rid of the # in URLs

```javascript
Router.reopen({
    location: 'auto',
    rootURL: '/'
});
````

## Deploying To Heroku

```bash
heroku create ember-wknd --buildpack https://github.com/tonycoco/heroku-buildpack-ember-cli.git
heroku run rake db:migrate
heroku run rake db:seed
```

## Updating ember-cli

Some breaking changes to get from ember-cli 0.4.4 to 0.1.0.

Need to update the following. Easiest by re-installing with npm install.
* npm install --save-dev ember-cli-simple-auth
* npm install --save-dev ember-cli-simple-auth-devise
* npm install --save rails-csrf

bower.json gets updated in `ember init` call.

### Issue 1.

Very strange. On `ember init` tried to update `app.js` but it wouldn't do it. Actually no files overwrite now. Maybe it's because I force quite the ember init process once.

Oh, does the overwrite only happen after all files have been determined? Think so... Yep. Just lost some things I was saving in `app.js` and `index.html`.

### Issue 2.

Not really an issue but a surprise that was very red and looked like errors at first.

After updating to ember-cli 0.1.0 we're getting warnings related to the new CSP implementations, e.g. `Refused to apply inline style because it violates the following Content Security Policy directive: "style-src 'self'".`.

Read up on ember-cli CSP [here](https://github.com/rwjblue/ember-cli-content-security-policy).

### Issue 3.

Session isn't returning user_id or user_type anymore. Just the standard

```
user_email: "sam@somewhere.com"
user_token: "Lyoe7zchzwXub1zU2bKA"
```
Weird. Local development environment returns everything and production just the above.

`ember serve --environment=production` returns the correct results:

```
user_email: "fake@email.com"
user_id: 8
user_token: "Lyoe7zchzwXub1zU2bKA"
user_type: "Host"
```

Never figured this out. Just started working again after pushing some branches to Heroku and then pushing master back. Perhaps issues with NPM and Bower caches after the update? Wouldn't really make sense though because getting the extra data back is simply a matter of Rails returning it for the standard simple-auth devise request.

### Issue 4.

Feels like we're not always getting a clean build when updating files. I removed the debugger in the case below

```
/Users/jcressma/Documents/Code/ember-wknd/dist/assets/vendor.js:
 68307              password: credentials.password
 68308            };
 68309:           _this.makeRequest(data).then(function(response) {
 68310              Ember.run(function() {
 68311                  debugger;
 ```

 but it's still in the dist directory...

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Other Deployment Options
  * [Serve Ember files from S3 and index.html from Redis](http://blog.abuiles.com/blog/2014/07/08/lightning-fast-deployments-with-rails/)
* Tutorials, Screencasts, Books, etc.
  * [emberwatch](http://emberwatch.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

