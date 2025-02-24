import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | weekday-selector', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<WeekdaySelector />`);

    assert.dom().hasText('Mon Tue Wed Thu Fri Sat Sun');
    assert.dom('circle').exists({ count: 7 });
    assert.dom('text').exists({ count: 7 });

    // Template block usage:
    await render(hbs`
      <WeekdaySelector>
      </WeekdaySelector>
    `);

    assert.dom().hasText('Mon Tue Wed Thu Fri Sat Sun');
  });

  test('it renders with a custom start of week', async function (assert) {
    await render(hbs`<WeekdaySelector @startOfWeek="sunday" />`);

    assert.dom().hasText('Sun Mon Tue Wed Thu Fri Sat');
  });

  test('it renders with a custom week', async function (assert) {
    await render(
      hbs`<WeekdaySelector @week={{hash sunday=true monday=true tuesday=true wednesday=true thursday=true friday=true saturday=true}} />`,
    );

    assert.dom().hasText('Mon Tue Wed Thu Fri Sat Sun');
    assert.dom('circle').hasClass('ws-selected', { count: 7 });
  });

  test('it renders with a custom maxChars', async function (assert) {
    await render(hbs`<WeekdaySelector @maxChars={{2}} />`);

    assert.dom().hasText('Mo Tu We Th Fr Sa Su');
  });

  test('it renders readOnly', async function (assert) {
    await render(
      hbs`<WeekdaySelector @readOnly={{true}} @week={{hash sunday=true monday=false tuesday=true wednesday=true thursday=true friday=true saturday=true}} />`,
    );

    assert.dom('g').hasClass('ws-readonly', { count: 7 });
    assert.dom('g').hasClass('ws-day', { count: 7 });
    assert.dom('circle').hasClass('ws-day-monday', { count: 1 });
    assert.dom('circle').hasClass('ws-unselected', { count: 1 });
    assert.dom('text').hasClass('ws-day-monday', { count: 1 });
    assert.dom('text').hasText('Mon');
  });
});
