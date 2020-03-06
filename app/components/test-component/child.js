import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TestChildComponent extends Component {
  get isActive() {
    return this === this.args.activeChild;
  }

  @action
  activate() {
    this.args.onActivate(this);
  }
}
