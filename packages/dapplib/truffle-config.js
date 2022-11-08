require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rifle magic huge inflict clog metal giant'; 
let testAccounts = [
"0x1c4b50b76c187ea4376fb5fff2f7a3b068c1f0fdcafdc8c96322519ec6730242",
"0x2e962181d75b66d8a862fcd678dccca184297848a274d3c79136fa2193ad48a3",
"0x097f45c72772c767aafb1f22791751a94a88004b51c5129c4ead4f502bf97306",
"0xe0675b576076a46fed648a1311042542d03bbba80a90170ecc4183a400113c7b",
"0xf1682f499bd028bf2929a0997ba82329b2afff1f5d5a6d39e547893f2aa37d1a",
"0x4b37a62926c9dbfcbe367b51956fd1a410b331720f9b6f31e0261d9881cbdb20",
"0x96d297f75b5af5f93444c2a94ac0f778a85f7418640fda2d945099ead298e66e",
"0xb05ae9185d7c314eb40f2897d1bcf5090352bceb50bf42b08d0d42358405dc65",
"0x35d164471231be309ee3d02311869751f1ff19e17c44fc2c6fae718e90268ca5",
"0xeff75ce777dbfaea462177d18dad9ac03e6ea7203fa68207fcf8c5984162edc6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

