# Enoch DEX core contracts

This repo contains all the core contracts to run the enoch dex on the matic network.

## Development

1. start a local server with the following command

```
npx hardhat node
```

This starts a local development server at http://127.0.0.1:8545

2. Deploying contracts

```
npx hardhat run scripts/deploy.js --network localhost
```

This command deploys the contracts on the local running server that we just started

