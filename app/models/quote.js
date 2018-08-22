import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
  name: attr('string'),
  content: attr('string'),
  author: attr('string'),
  image: belongsTo('contentful-asset'),
  project: hasMany('project')

});
