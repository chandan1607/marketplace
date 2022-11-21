module.exports = {

  networks: {
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 7545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://eth-goerli.g.alchemy.com/v2/4f0de208a9204152930293e59ae7c196`// Url to an Ethereum Node
        )
      },
      network_id: 5,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true ,    // Skip dry run before migrations? (default: false for public nets )
      
      gas: 4465030,
      gasPrice: 10000000000,
      networkCheckTimeout: 1000000000
    },
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis',

  compilers: {
    solc: {
     version:'^0.8.0',
     optimizer:{
       enabled:'true',
       runs: 200
     }
    }
  },

};
