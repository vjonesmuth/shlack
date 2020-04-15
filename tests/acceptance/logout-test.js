import { module, test } from 'qunit';
import { visit, currentURL, click, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  });

  test('visiting /teams and clicking logout', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1';

    await visit('/teams/linkedin'); 
    // await pauseTest();
    assert.ok(currentURL().startsWith('/teams/linkedin'), 'Go to the /teams url');

    await click('.team-sidebar__logout-button');
    // await pauseTest();
    assert.equal(currentURL(), '/login', 'Click logout button');
  });
});
