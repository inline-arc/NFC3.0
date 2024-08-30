// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Fundraiser {
    struct FundraiserData {
        string purpose;
        uint256 amountToRaise;
        string patientRelation;
        string email;
        string phone;
        string title;
        string description;
    }

    FundraiserData[] public fundraisers;
    mapping(address => uint256[]) public fundraiserOwners;

    function createFundraiser(
        string memory _purpose,
        uint256 _amountToRaise,
        string memory _patientRelation,
        string memory _email,
        string memory _phone,
        string memory _title,
        string memory _description
    ) public {
        fundraisers.push(FundraiserData({
            purpose: _purpose,
            amountToRaise: _amountToRaise,
            patientRelation: _patientRelation,
            email: _email,
            phone: _phone,
            title: _title,
            description: _description
        }));
        fundraiserOwners[msg.sender].push(fundraisers.length - 1);
    }

    function getFundraiser(uint256 _index) public view returns (
        string memory, uint256, string memory, string memory, string memory, string memory, string memory
    ) {
        FundraiserData memory f = fundraisers[_index];
        return (f.purpose, f.amountToRaise, f.patientRelation, f.email, f.phone, f.title, f.description);
    }

    function getFundraisers() public view returns (FundraiserData[] memory) {
        return fundraisers;
    }
}