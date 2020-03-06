import Route from '@ember/routing/route';
import generateFoos from '../utils/generate-foos';

export default class ZestiaRoute extends Route {
  model() {
    return generateFoos();
  }
}
