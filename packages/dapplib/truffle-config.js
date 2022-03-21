require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet rescue place minimum hunt brave equal genuine'; 
let testAccounts = [
"0xcaa27488b90a97874a4e9d622d2347b14ddba0242a4a739a61b32cf6fbeb3237",
"0x497c00628d0505d3ed8cdb1a33f3d0f85e6a191bf995d41b68d88a985824281b",
"0x0b2d1df41cdc898e862148de708842539888da5425df12881c85d9942b1af8fd",
"0x5be85e10dcfa18b4d0265f42e53be6ec6a983b0fee1eb13cddf0b103f1c58feb",
"0x964bb959f3be2957be4d0446c57d97295cad50c3fe78f50381b9a03bf3ede154",
"0x2e3716cba6bdcf5db545b564ffcc03d113fe9117e75bc6cfb3902a3913de26cb",
"0xdc5576b9634d59c10883d657281585ea67b9879f656f6bdb3a76b9335a0df404",
"0x2ef2b90f726537fc82ed2fe37c5e95843798c554435e838598bd7f8d70326393",
"0xdc4fddc0f433c5042052a1cba3a3bd4ce91cce37f4f0aeff010375dc5e04a7e5",
"0x65c15cf5af1ed45aef7e5a4f33bd99110143145fbc72fe19d4bc6cb98dcd319c"
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

