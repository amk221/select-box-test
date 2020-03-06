import Route from '@ember/routing/route';
import generateFoos from '../utils/generate-foos';

export default class EmberRoute extends Route {
  model() {
    return generateFoos();
  }
}
