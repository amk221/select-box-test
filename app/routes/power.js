import Route from '@ember/routing/route';
import generateFoos from '../utils/generate-foos';

export default class PowerRoute extends Route {
  model() {
    return generateFoos();
  }
}
