import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<LoginForm @title="Login" />`);

    assert.deepEqual(
      this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, '\n')
        .split('\n'),        	
        [
          "Login",
          "Select a user",
          "Testy Testerson",
          "Sample McData",
        ],
        'Login form renders'
    );

    /** @type {HTMLInputElement} button */
    let button = find('input[type=submit]');
    assert.equal(button.disabled, true, 'Button is disabled before item select');

    await fillIn('select', '1');

    assert.equal(button.disabled, false, 'Button is enabled after item select');
  });
});
