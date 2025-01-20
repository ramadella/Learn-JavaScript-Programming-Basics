import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum harus mengembalikan jumlah dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('sum harus mengembalikan 0 jika salah satu parameter adalah bukan angka', () => {
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum('2', '3'), 0);
});

test('sum harus mengembalikan 0 jika salah satu parameter adalah angka negatif', () => {
  assert.strictEqual(sum(-2, 3), 0);
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, -3), 0);
});

test('sum harus mengembalikan hasil penjumlahan jika kedua parameter adalah angka positif', () => {
  assert.strictEqual(sum(5, 7), 12);
  assert.strictEqual(sum(0, 0), 0);
});

test('sum harus mengembalikan 0 jika kedua parameter adalah non-numeric', () => {
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum({}, {}), 0);
});
