// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract WavePortal {
    uint256 countWaves; //asigned to 0 automagically

    constructor() {
        console.log("Look mom, no backend!, I own you the bootcamp loan.. sorry! \n");
    }

    struct Bros {
        uint totalWaves;
        uint256 timeStamp;
        string   tweet;
    }

    mapping( address => Bros ) public brosMap;

    // similar to POST
    function wave() public {
        countWaves += 1;

        brosMap[msg.sender].totalWaves += 1;
        brosMap[msg.sender].timeStamp = block.timestamp;
        console.log("%s has waved!", msg.sender);
    }


    function tweet( string memory message ) public {
        brosMap[msg.sender].tweet = message;
    }

    function getTweet() public view returns (string memory) {
        return brosMap[msg.sender].tweet;
    }

    function getDate() public view returns (uint256) {
        return brosMap[msg.sender].timeStamp;
    }

    function getTotalWavesByBros() public view returns (uint256) {
        return brosMap[msg.sender].totalWaves;
    }

    // similar to GET
    function getTotalWaves() public view returns (uint256) {
        console.log("we have %d total of waves!", countWaves);
        return countWaves;
    }
}