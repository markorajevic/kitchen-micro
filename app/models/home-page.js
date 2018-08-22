import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    heading: attr('string'),
    callToAction: attr('string'),
    callToActionLink: attr('string'),
    introduction: attr('string'),
    carouselImages: hasMany('contentful-asset'),
    splashHeading: attr('string'),
    splashContent: attr('string'),
    splashActionTitle: attr('string'),
    splashActionLink: attr('string'),
    metaTitle: attr('string'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset')
});
