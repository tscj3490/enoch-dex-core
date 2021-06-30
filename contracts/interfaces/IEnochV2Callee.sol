pragma solidity >=0.5.0;

interface IEnochV2Callee {
    function EnochV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
