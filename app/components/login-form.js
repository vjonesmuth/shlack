import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  /**
   * @type {AuthService}
   */
  @service auth;

  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  /**
   * Handle form submission
   *
   * @param {Event & {target: HTMLFormElement}} evt
   */
  @action
  onFormLoginSubmit(evt) {
    evt.preventDefault();
    
    const { target } = evt;
    const val = target.querySelector('select').value;
    
    this.auth.loginWithUserId(val);
  }

  /**
   * Handle selection change
   *
   * @param {Event & {target: HTMLSelectElement}} evt
   */
  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }
}
