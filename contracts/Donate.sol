// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MaticDonation {
    event DonationReceived(address indexed donor, uint256 amount);

    // Function to donate MATIC to the contract
    function donate() external payable {
        require(msg.value > 0, "Donation must be greater than 0");
        emit DonationReceived(msg.sender, msg.value);
    }

    // Function to check the contract's balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Function to withdraw the entire contract balance to the caller
    function withdraw() external {
        payable(msg.sender).transfer(address(this).balance);
    }
}
