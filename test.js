import test from 'ava';
import fn from './';

test('title', async t => {
  var pkg = await fn('nice-package');
	t.is(pkg.depNames[0],'github-url-to-object');
});
