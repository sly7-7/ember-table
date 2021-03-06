import { module, test } from 'ember-qunit';

import { generateTable } from '../../helpers/generate-table';
import { componentModule } from '../../helpers/module';

import TablePage from 'ember-table/test-support/pages/ember-table';

const table = TablePage.create();

module('Integration | footer', function() {
  componentModule('basic', function() {
    test('renders if footerRows are set', async function(assert) {
      await generateTable(this, { footerRowCount: 3 });

      assert.ok(table.footer.isPresent, 'Footer is present in the table');
      assert.equal(table.footer.rows.length, 3, 'correct number of footer rows rendered');

      this.set('footerRows', []);

      assert.ok(table.footer.isPresent, 'Footer is present in the table');
      assert.equal(table.footer.rows.length, 0, 'Footer rows are removed');
    });
  });
});
