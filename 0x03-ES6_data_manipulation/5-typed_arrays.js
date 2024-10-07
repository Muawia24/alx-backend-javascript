export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Uint8Array(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  }
  int8View[position] = value;
  return buffer;
}
