// modified from https://www.ethereum.org/greeter
pragma solidity ^0.4.24;


contract Mortal {
    address public owner;
    constructor() public { owner = msg.sender; }
    function kill() public { if (msg.sender == owner) selfdestruct(msg.sender); }
}


contract Greeter is Mortal {
    string public greeting;

    constructor(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function newGreet(string memory newGreeting) public returns (bool) {
        greeting = newGreeting;
        return true;
    }
}
