'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18Litecoin PoS Signed Message:\n',
  bech32: 'lp',
  bip32: {
    public: 0x7788B21E,
    private: 0x7788ADE4,
  },
  pubKeyHash: 0x32,
  scriptHash: 0x6e,
  wif: 0x80,
};
exports.regtest = {
  messagePrefix: '\x18Litecoin PoS Signed Message:\n',
  bech32: 'lpt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x65,
  scriptHash: 0xc78,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Litecoin PoS Signed Message:\n',
  bech32: 'lt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x65,
  scriptHash: 0x127,
  wif: 0xef,
};
