# Introduction

There are two steps required to integrate into the defillama system.

1. Add adapter to defillama
2. Submit PR like: https://github.com/DefiLlama/DefiLlama-Adapters/commits/d67f57641b931a04afe05affe4c52605b6544e26/projects/macaron-xyz/index.js

# Step 1: Add adapter locally

The following steps need to be completed: 

1. Fork repository: https://github.com/DefiLlama/DefiLlama-Adapters
2. Create a new project adapter path under projects, for example: projects/[%PROJECT_TAG%]/index.js

```javascript
const { sumTokens2, } = require('../helper/unwrapLPs')

async function tvl(api) {
  
  return sumTokens2({ owners: [
    '[%CONTRACT_ADDR%]',
  ], tokens: ['[%TOKEN_ADDR_1%]', '[%TOKEN_ADDR_2%]'], api, }) //wbtc and usdt
}

module.exports = {
  btr: { tvl, }
}

```

- [%PROJECT_TAG%] is  the project name
- [%CONTRACT_ADDR%] is the contract address of the project
- [%TOKNE_ADDR_1%]、[%TOKEN_ADDR_2%] are the currency pair address that needs to be calculated
- For future references, if you add another token you can just add it here, you can do like this https://github.com/DefiLlama/DefiLlama-Adapters/pull/10229/files

# Step 2: Submit PR

- Submit PR, for example: https://github.com/DefiLlama/DefiLlama-Adapters/commits/d67f57641b931a04afe05affe4c52605b6544e26/projects/macaron-xyz/index.js

# Reference

- https://docs.llama.fi/list-your-project/submit-a-project
## Projects built on bitlayer

| Name      | Category                                           | Website                                | Defillama                                                    | Project Path            |
| --------- | -------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------ | ----------------------- |
| bitsmiley | [CDP](https://defillama.com/protocols/CDP)         | https://www.bitsmiley.io/app/alphanet  | https://defillama.com/protocol/bitsmiley#information         | projects/bitsmiley-io   |
| macaron   | [Dexes](https://defillama.com/protocols/Dexes)     | https://www.macaron.xyz/#/swap?lang=en | https://defillama.com/protocol/macaron                       | projects/macaron-xyz    |
| avalon    | [Lending](https://defillama.com/protocols/Lending) | https://app.avalonfinance.xyz/         | https://defillama.com/protocol/avalon-finance#information    | projects/avalon-finance |
| bitcow    | [Dexes](https://defillama.com/protocols/Dexes)     | https://bitcow.xyz/                    | https://defillama.com/protocol/bitcow#information            | projects/bitcow         |
| enzo      | [Lending](https://defillama.com/protocols/Lending) | https://app.enzo.finance/              | https://defillama.com/protocol/enzo#information              | projects/enzo           |
| trustin   | [Lending](https://defillama.com/protocols/Lending) | https://www.trustin.com/               | https://defillama.com/protocol/trustin-finance?borrowed=false&twitter=true&tvl=false | projects/trustin        |


