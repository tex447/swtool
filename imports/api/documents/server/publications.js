import { Meteor } from 'meteor/meteor';
import { Documents } from '../documents';

Meteor.publish('documents', () => Documents.find());
Meteor.publish('criticals', () => Criticals.find());
