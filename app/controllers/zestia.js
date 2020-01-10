/* eslint-disable no-console */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PowerController extends Controller {
  @action
  selectFoo(foo) {
    console.log(foo);
  }
}
