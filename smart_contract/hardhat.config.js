require ('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9cvP3sNlieiqRjy6IOQcCTA0C2fFpkb2',
      accounts: [ 'ba11cd95b6a7b7967b217f244d1c47be34970d6ca85b9d2815cc759ae1ba64cc ' ]
    }
  }
}