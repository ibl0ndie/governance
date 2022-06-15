const Token = artifacts.require("Token")

module.exports = async function (deployer) {

    const name = "Governance Token"
    const symbol = "GTN"
    const supply = web3.utils.toWei('1000', 'ether') // 1000 Tokens

    // Deploy token
    await deployer.deploy(Token, name, symbol, supply)
    
};