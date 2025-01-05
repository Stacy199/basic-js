const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    const latinAlpha = new RegExp(/[A-Z]/i);
    const encMessage = [];
    const messUp = message.toUpperCase();
    const keyUp = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < messUp.length; i++) {
      if (latinAlpha.test(messUp[i])) {
        const charCode = (messUp[i].charCodeAt() - 65 + keyUp[keyIndex % keyUp.length].charCodeAt() - 65) % 26;
        encMessage.push(String.fromCharCode(charCode + 65));
        keyIndex += 1;
      } else encMessage.push(messUp[i]);
    }
    return !this.direct ? encMessage.reverse().join('') : encMessage.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    const latinAlpha = new RegExp(/[A-Z]/i);
    const decMessage = [];
    const encMessUp = encryptedMessage.toUpperCase();
    const keyUp = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < encMessUp.length; i++) {
      if (latinAlpha.test(encMessUp[i])) {
        const charCode = (encMessUp[i].charCodeAt() - 65 - (keyUp[keyIndex % keyUp.length].charCodeAt() - 65) + 26) % 26;
        decMessage.push(String.fromCharCode(charCode + 65));
        keyIndex += 1;
      } else decMessage.push(encMessUp[i]);
    }
    return !this.direct ? decMessage.reverse().join('') : decMessage.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
