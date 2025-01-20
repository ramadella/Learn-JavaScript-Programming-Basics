import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Menambahkan dua angka positif', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5, 'Hasil penjumlahan 2 + 3 seharusnya 5');
});

test('Menambahkan angka positif dan nol', () => {
  const result = sum(7, 0);
  assert.strictEqual(result, 7, 'Hasil penjumlahan 7 + 0 seharusnya 7');

});
test('Menambahkan dua angka negatif', () => {
  const result = sum(-4, -6);
  assert.strictEqual(result, -10, 'Hasil penjumlahan -4 + -6 seharusnya -10');
});
test('Menambahkan angka negatif dan positif', () => {
  const result = sum(-3, 8);
  assert.strictEqual(result, 5, 'Hasil penjumlahan -3 + 8 seharusnya 5');
});
test('Menambahkan angka desimal', () => {
  const result = sum(2.5, 3.5);
  assert.strictEqual(result, 6, 'Hasil penjumlahan 2.5 + 3.5 seharusnya 6');
});
