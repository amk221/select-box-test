import Component from '@ember/component';
import { action, set } from '@ember/object';

export default class TestComponent extends Component {
  tagName = '';

  @action
  toggle() {
    set(this, 'show', !this.show);
  }
}
