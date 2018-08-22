import Ember from 'ember';
const { set } = Ember;

export default Ember.Route.extend({
	titleToken: function(model) {
		return model.content.get('titleText');
	},
    model() {
        return Ember.RSVP.hash({
            content: this.get('store').queryRecord( 'homePage', { 'fields.slug': 'home' } ),
            projects: this.get('store').query('project', { 'order': 'fields.ranking' })
        });
    },
    setupController( controller, model ) {
        this._super(controller, model);
        controller.set('model', model);
    },
    headData: Ember.inject.service(),
    afterModel(model) {
        console.log('model.projects', model.projects);
        set(this, 'headData.title', model.content.get('metaTitle'));
        set(this, 'headData.description', model.content.get('metaDescription'));
        if(model.content.get('metaImage').content) {
            set(this, 'headData.image', model.content.get('metaImage').content.data.file.url);
        }
    }
});
