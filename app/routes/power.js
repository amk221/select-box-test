import Route from '@ember/routing/route';
import generateFoos from '../utils/generate-foos';

export default Route.extend({
  model() {
    return generateFoos();
  }
});
