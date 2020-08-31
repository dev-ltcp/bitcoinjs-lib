// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
  messagePrefix: '\x18Litecoin PoS Signed Message:\n',
  bech32: 'lp',
  bip32: {
    public: 0x7788B21E,
    private: 0x7788ADE4,
  },
  pubKeyHash: 0x50,
  scriptHash: 0x110,
  wif: 0x80,
};
export const regtest: Network = {
  messagePrefix: '\x18Litecoin PoS Signed Message:\n',
  bech32: 'lpt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc78,
  wif: 0xef,
};
export const testnet: Network = {
  messagePrefix: '\x18Litecoin PoS Signed Message:\n',
  bech32: 'lt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x65,
  scriptHash: 0xc78,
  wif: 0xef,
};
