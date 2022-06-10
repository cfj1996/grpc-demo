/**
 * @name: encodeRequest_
 * @user: cfj
 * @date: 2022/4/28 23:26
 */


export const encodeRequest_ = (serialized) => {
  let len = serialized.length;
  const bytesArray = [0, 0, 0, 0];
  const payload = new Uint8Array(5 + len);
  for (let i = 3; i >= 0; i--) {
    bytesArray[i] = (len % 256);
    len = len >>> 8;
  }
  payload.set(new Uint8Array(bytesArray), 1);
  payload.set(serialized, 5);
  return window.goog.crypt.base64.encodeByteArray(payload);
}
