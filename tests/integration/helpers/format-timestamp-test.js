import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | format-timestamp', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('myDate', '05-18-1987');

    await render(hbs`{{ format-timestamp myDate }}`);

    assert.equal(this.element.textContent.trim(), 'May 18, 1987 00:00.00 AM');
  });
});
