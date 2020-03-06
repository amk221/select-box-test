import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TestSelectBox extends Component {
  @action
  handleSelection(value, sb) {
    this.args.onSelect(value);
    sb.close();
  }
}
