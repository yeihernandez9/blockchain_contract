const Counter = artifacts.require("Counter");
const Messages = artifacts.require("Messages");

module.exports = function(deployer) {
    deployer.deploy(Counter);
    deployer.deploy(Messages, "Inicio de nuestra face blockchain");
};