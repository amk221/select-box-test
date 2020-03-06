import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TestComponent extends Component {
  @tracked show;

  @action
  toggle() {
    this.show = !this.show;
  }
}
