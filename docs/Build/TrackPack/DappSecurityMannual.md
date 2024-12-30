---
sidebar_position: 2
---

# Dapp Security Manual

# 1 Overview
Bitlayer aims to become a Layer 2 public blockchain on BTC, achieving full EVM and Ethereum ecosystem tool compatibility, using BTC as the native token. 

Building various infrastructures and DApps on Bitlayer is essentially the same as doing so on Ethereum. For developers, ensuring security is paramount, particularly in the context of centralized permissions, with the primary concern being the security of private keys.

This article provides some security practice recommendations for developers to consider when managing and using private keys.
# 2 Basic security concepts
When it comes to centralized permission management, the primary focus is on managing private keys/accounts, including their creation, storage, usage, and replacement throughout their lifecycle.

From the perspective of managing funds accounts, the following basic security principles should be adhered to (including but not limited to):
- Cold and hot wallet separation: Use hot wallets to store small amounts of funds for online operations and cold wallets to store large amounts of funds, managed manually and operated offline.
- Multi-signature control to avoid single point of failure risks.

When using a hot wallet for automated business systems, the secure management and usage of private keys will be the "most challenging" issue. When designing a hot wallet business system, the following basic security principles should be included (but are not limited to):
- Separation of hot and cold wallets to control risk exposure;
- Multi-signature control to avoid single point of failure risk;
- Security audits are essential, not only for smart contracts but for the entire system’s full process;
- Personnel access segregation to avoid a single person having control over the private key usage;
- Principle of least privilege, granting only necessary permissions to personnel and system components;
- Keys used by the system should not appear in plaintext on disk; consider having keys managed by personnel, stored encrypted using strong keys (e.g., random 256-bit passwords) with AES-256 encryption (should combine with a KDF scheme, such as argon2id, or adopt a solution similar to Ethereum's keystore);
- Trust audited code; alongside robust server security management, trust Linux memory security (utilizing a TEE environment if possible would be even better);
- Business process separation, isolating business and risk control to mutually restrict each other; avoid using private keys through a single entry point; risk control system should use independent and trustworthy data sources;
- For automated business, it is best to have clear risk control rules and whitelist restrictions; otherwise, consider incorporating manual review processes.
- Ensure proper monitoring and early warning systems for timely circuit breaking.
# 3 Bitlayer platform tools
A fundamental security tool for EVM-compatible chains is a multi-signature smart contract wallet. Bitlayer will actively seek direct support from Safe-Global for Bitlayer. 

Meanwhile, we have already deployed Safe-Global's open-source multi-signature wallet system on Bitlayer, which developers can freely use. Details are as follows:
- Mainnet：https://multisign.bitlayer.org/home
- Testnet：https://test-multisign.bitlayer.org/home 
> [Contract version]：(https://github.com/safe-global/safe-smart-account/tree/v1.3.0-libs.0)

# 4 Third-party facilities and services

## 4.1 Private key management
For hot wallet systems, private key management needs to be based on traditional signing machines or emerging MPC self-custody services. 

In the traditional signing machine solution, it generally involves using a standalone machine that provides signing services. All private keys required by the business are pre-generated (and encrypted upon generation), securely backed up, and subsequently used for signing services. Additionally, a risk control system (gateway) is needed to isolate the business system from the signing machine, ensuring that signature requests from the business system are checked by the risk control system. This article will not describe hot wallet systems based on signing machines.

Currently, multi-party computation (MPC-TSS) technology has become a mainstream trend in private key management and self-custody of funds. This solution ensures that the complete private key never physically appears during its entire lifecycle (generation, storage, signing, etc.). Instead, it exists in fragments on the local machines of each signing participant, effectively eliminating the single point of failure and making the private key usable but invisible.

Currently, wallet service providers offering MPC-TSS technology for enterprise users include, but are not limited to, Fireblocks, Cobo, and Sinohope. Sinohope has already completed support for Bitlayer and its WaaS (Wallet as a Service) also offers advanced features, allowing users to extend public chain support themselves.

**This article will use Sinohope WaaS service as an example to provide some ideas and suggestions for securely implementing a hot wallet system. If there are other MPC service providers that also support Bitlayer or allow for customized public chain extensions, similar implementation approaches can be referred to as well.**


## 4.2 Password management, sharing, and transmission related tools
For personal password management, it is recommended to use a password management tool. Store all other passwords using one password based on human memory (or a reliable offline backup), ensuring each password is strong and unique. For password management tools, KeePass and KeePass-based software (which is convenient for cross-platform use) are recommended: https://keepass.info/download.html.

For important key information needed by business systems (such as API-Key), it should be stored encrypted and decrypted with a manually entered password at each startup. Such a password can be referred to as an Unseal Key. For Unseal Keys, it is recommended to use Shamir Secret Sharing technology to implement t-n threshold management, avoiding single points of failure.

To securely initialize this t-n Shamir key, you can use HashiCorp Vault software, leveraging GnuPG asymmetric encryption technology. See the appendix section for details.

For transmitting sensitive information, it is recommended to use asymmetric encryption technology for secure transmission, such as GnuPG-based technology.

# 5 Construction ideas for a hot wallet system based on Sinohope WaaS service
Sinohope MPC WaaS service is based on the underlying infrastructure of Sinohope's MPC self-custody product, providing developers with a wallet cloud service based on MPC-TSS technology. A typical service component division and business process that includes a risk control system is as follows:
![Sinohope MPC WaaS](/img/TrackPack/sinohope-waas.png)

## 5.1 Security Mechanisms and Guarantees Provided by MPC WaaS Service

Based on the underlying MPC-TSS technology, Sinohope MPC WaaS offers the following security mechanisms and guarantees for hot wallet private key management:

1. **Private Key Management Based on MPC-TSS Technology**: It adopts a 3-3 threshold setting, where the private key is composed of three shards. The shard keys are generated based on the DKG protocol, and throughout the entire lifecycle of generation and usage, each shard only appears locally on the participating MPC Node. The complete private key never appears in full at any time or place. **This effectively avoids the issue of "private key leakage"** (the complete private key can only be reconstructed if all three shards are leaked and obtained by the same attacker).

2. **Usage Driven by WaaS Interface Through API-Key**: The hot wallet (MPC key) usage is driven by the WaaS interface via API-Key. Two callback mechanisms provide risk control integration:
   - **Centralized Callback**: Before the business reaches the MPC subsystem, the WaaS service confirms the legality of the business through a user-configured callback interface.
   - **User-side MPC Node Callback**: When the user-side MPC Node receives any command to use the MPC private key, it can make a callback request to allow the user-side risk control system to check the business's legality.

3. **Whitelist Functionality for Addresses**: If the whitelist is enabled, Sinohope ensures that the target address for MPC account transactions can only be an address on the whitelist.

4. **IP Whitelist Support for API-Key and MPC Node**: With IP whitelisting configured, only requests from IP addresses on the whitelist are accepted.

5. **Multi-layered Cloud Risk Control**: Ensures the security and availability of cloud shards.

**On this basis, since the WaaS service is ultimately a cloud service driven by API interfaces, any request that is correctly signed with the API-Key and originates from an IP address on the IP whitelist will be considered legitimate.**

**Therefore, users also have the fundamental obligation to use the WaaS service securely.**

## 5.2 User-side Best Security Practices Recommendations

Based on the Sinohope MPC WaaS architecture and security mechanisms, as well as existing user application practices, the following security recommendations are proposed for using the WaaS service.

### 5.2.1 System Architecture Recommendations

The user-side system needs to distinguish between MPC Node, business system, and risk control system:

- **MPC Node**: Provided by Sinohope, it holds the user-side private key shards and participates in the MPC protocol (mainly MPC signing).
- **Business System**: The business system is responsible for the specific operations of the hot wallet, using the API-Key to call the WaaS interface to complete relevant business.
- **Risk Control System**: The risk control system acts as a callback service for the Sinohope WaaS, inspecting and controlling requests for the MPC private key. This includes:
  - **Configuring a Centralized Callback**: After the business system initiates a transaction request, the WaaS service will callback this interface. In this callback process, the transaction content and its business legality need to be independently verified.
  - **Configuring a User-side MPC Node Callback**: Before the MPC Node signs, it will callback this interface for confirmation. The risk control service needs to independently verify the transaction content and business legality.
  - **Advanced Wallet Feature**: If using the advanced wallet feature, the MPC Node needs to configure signature result encryption. For advanced wallet addresses, after the MPC Node completes the signature, it will use the configured public key to encrypt the result using ECIES. The risk control service will use the private key to decrypt the result and then provide it to the business service.

The configuration and encryption can be referenced in the following diagram:

![Sinohope MPC WaaS Config](/img/TrackPack/sinophoe-waas-config.png)

### Description:

1. **Encrypting API-Key Private Key**: The business system decrypts the API-Key private key with a manually entered password at each startup, truly starting the business service. (This process of manually entering the password to start the service is referred to as Unseal).
2. **Manually Unsealing the MPC Node**: Users manually input the password to unseal the MPC Node.
3. **Advanced Wallet Feature**: If using the advanced wallet feature, the risk control system holds the private key for encrypting signature results. This private key is also encrypted with a set of passwords, which can be managed by the risk control team.

### 5.2.2 Personnel Permissions Recommendations: Separation and Isolation

It is recommended to divide the following personnel permissions:

- **Sinohope WaaS Organization Administrator**: The administrator can complete all important configurations through the Sinohope web console, including linking MPC Node, creating vaults, configuring API-Key for vaults, configuring centralized callbacks, whitelists, etc.
- **Business Team**: It is recommended to encrypt and store the API-Key, managed by a team of people. The password used is suggested to be fragmented using Shamir Secret Sharing (SSS) technology with a t-n threshold. Details are introduced later.
- **Risk Control Team**: Manages the passwords for the MPC Node and the encryption key for signature results (when using advanced wallet features). A t-n threshold setting is also recommended.

### 5.2.3 Management Method of Manually Held Passwords

It is recommended that the passwords managed by the business team and risk control team (collectively referred to as Unseal keys) be fragmented using Shamir Secret Sharing (SSS) technology with a t-n threshold. 

In practice, the implementation is consistent with HashiCorp Vault's SSS. Utilize HashiCorp Vault's secure initialization function to initialize each set of Unseal keys. 

Code reference: https://github.com/hashicorp/vault/tree/main/shamir

Suppose each team consists of n people, with t people required to reconstruct the final password. This final password is then used to encrypt/decrypt various locally configured keys.

(For brute force attack prevention) Encryption scheme reference:
- Ethereum keystore scheme.
- Implementing KDF + AES256 encryption scheme, such as using argon2id as KDF for key derivation, followed by AES256 symmetric encryption.

For using HashiCorp Vault's secure initialization function to initialize Shamir keys, refer to the appendix.

### 5.2.4 Other Security Recommendations

- Configure an IP whitelist for the API-Key in WaaS.
- Configure an IP whitelist for the MPC Node.
- The owner/administrator of the WaaS organization has the highest authority and should be the most trusted individual. Additionally, the administrator should not control the risk control team's Unseal Key.
- The risk control system should use an independent database and independent strategy to verify the legality of transactions. Combine strategies such as whitelist, single transaction limit, and daily limit to implement risk control and alerts. Specific details should be considered in conjunction with business needs.
- Before performing relevant operations, confirm that the software version, script files, and configuration file contents are correct and have not been maliciously or erroneously modified.

# 6、Appendix
## 6.1 Secure Shamir Key Generation Using HashiCorp Vault
Vault Installation： [Install Vault | Vault | HashiCorp Developer](https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-install) and [Official Packaging Guide](https://www.hashicorp.com/official-packaging-guide?product_intent=vault)

Vault provides a secure initialization function based on GPG public keys. This functionality allows the secure generation of t-n key shares. Official documentation can be found here:：[PGP encrypted key shares | Vault | HashiCorp Developer](https://developer.hashicorp.com/vault/tutorials/operations/pgp-encrypted-key-shares)
During the Shamir splitting process, each share is encrypted with the GPG public key of each participant. Consequently, each participant can only decrypt their share using their GPG private key, ensuring that no single person can access the original key.

You can run an in-memory version of Vault to perform the initialization and generate key shares.

vault Configuration：
vault.hcl
```
api_addr = "http://0.0.0.0:8800"
ui = false
disable_mlock = true
log_level = "info"

storage "inmem" {}

listener "tcp" {
  address     = "0.0.0.0:8800"
  tls_disable = "true"
}
```
Reference script for securely generating Shamir key shares:
```
#! /bin/bash

export VAULT_ADDR='http://127.0.0.1:8800'
vault server -config=./vault.hcl &
sleep 5
# vault operator init -key-shares=5 -key-threshold=3 
vault operator init -key-shares=3 -key-threshold=2 -pgp-keys="a-gpg.asc,b-gpg.asc,c-gpg.asc"

kill $(pgrep vault)
```

Running the above script generates key shares, and the output consists of ciphertexts encrypted with GPG public keys. For example:
```
Unseal Key 1: wU4DlqeolZZqtfwSAQdAvDQVRIu9Kh5Iy8lYNx1m9E8fSzJ1LAYf+yeBXrMkQkkgbs7hGUkx8gD8h2GC3HGMmq5lGxByZLIiqqKH1X+SO9TS4AHkS4URnV1F20sWNLaI4hOgx+EHJuBw4E3hLMvgPuLFq47e4JDm4SOypAjjX/Ba5EXsa8+fYNCD1iYOtjkVqebUJXVv+VimLpK3T/2lTQmP5VqHy8XHdwOR3hDotxr4sqeFcTHyTeDv4cSA4Hfk7WjumzHD+2J75IXoPFPV2uJbAapw4e7CAA==
Unseal Key 2: wU4DFENHIHBYGwgSAQdAa/RxjJTSlXPI79ygWZohYltWtlEaodN4zZZJzP4dU2ogJt4he7lJGRfonKQ6/c3aVBKFWQ4dvmQhLk09witrfMvS4AHkwDnlRhdvaeFka+FE4bVgeuE2g+Ao4MDhqZrgLeKlFpiJ4I3mQP/9nraXJLaAiQnKsPYpRU5MWH1c8vv8explG06PGhbC1DjvqxuUeOC54Z3Oi1fXh5lETxy5CAhpBVd8ySjtkeCD4aDp4NfkSWhJg/mDeiPOgOfa+b8IjOKSZ6ck4a51AA==
Unseal Key 3: wU4DA+1ur2PGgtESAQdApqMAECkMh+7Vk64xcxjz/O5D8ZiGaxBIylqftzcy5hogzxZyM1C9TdTvfBGnxCI7OPNMsswBhO87+Ln437VlT4rS4AHkikEJJUlIFbYhXP79pBMRbuEUP+A84GfhS4PgNeLDxwue4KnmMtRaT1azVAyeyhJ9EqeEYyLdsV/58UTVWarj79ukvmBV2ZoGEFD8j6zIQzC/vVR0ZHgWdmebFU5S3ISPIZNeKOCq4UAB4Knk060dqvKoqisobjhk9qzqoeKhi29S4ehlAA==
```

Each participant receives their encrypted key share and uses the following command to decrypt the share and convert it into a base64 string:
```
echo "wU4DA+...<base64-encoded ciphertext string>" | base64 --decode | gpg -dq |xxd -r -p | base64
```

Command Explanation:

- base64 --decode : Decodes the base64-encoded string into binary data.
- gpg -dq : Decrypts the binary data using GPG. If the GPG private key is password-protected, you will need to enter the password (it may be cached, so you might not need to enter it again on subsequent runs).
- xxd -r -p: The decrypted output from GPG is in hexadecimal format. The xxd -r -p command converts this hexadecimal string back into binary data.
- base64 : Encodes the binary data into a base64 string.

<font color="red" >After obtaining the plaintext unseal key (base64 string), remember to keep it confidential, keep a record of its purpose, and make a secure backup.</font>

## 6.2 GPG Usage Reference
### 6.2.1 Installing GnuPG and Key Management
It is generally recommended to install precompiled GnuPG software from third-party distributions.
On Ubuntu, you can install it directly using: ```gpt-get install -y gpg```，On macOS, you can install it using Homebrew:：
```
brew info gpg
brew install gpg
gpg -h
```

### Basic Operations for GPG Key Generation and Encryption/Decryption

- **GnuPG Documentation**: [GnuPG Manual](https://gnupg.org/gph/en/manual.html)
- **Additional Reference**: [GPG Installation and Usage](https://imtianx.cn/2019/05/29/gpg_an_zhuang_yu_shi_yong/)

For generating GPG keys, the default configuration is generally sufficient.

For use in Vault initialization and similar processes, GPG keys are used only for securely transmitting data during the process. Each participant decrypts the data and manages their decrypted data independently. Therefore, GPG keys used for these purposes can be temporary and do not need to be permanently stored.

```
# To generate a general GPG key, use the default cryptographic settings and set the validity period to 2 years.
gpg --gen-key

# Generate complete keys (choose your own options)
gpg --full-gen-key
aa
# Export public key (binary format): gpg --output <filename> --export <user id>
gpg --output public-keys.d/ny-gpg.asc --export ny

```

Other basic operations

```
# Encrypt with public key
gpg --recipient <gpg_key_id> --output <output_file_name> --encrypt <input_file_name>
# Decrypt
gpg --output <output_file_name> --decrypt <input_file_name>
```
 
> Using gpg decryption on macOS may result in errors：<br/>
gpg: Public key decryption failed：Inappropriate ioctl for device<br/>
gpg: Decryption failed：Inappropriate ioctl for device<br/>
The reason is that GPG does not know where to read the password input.<br/>
Solution 1:：<br/>
 ```
export GPG_TTY=$(tty)
```
Option 2, use gpg agent and modify the configuration:
Edit~/.gnupg/gpg.conf，Add the following content
```
use-agent 
pinentry-mode loopback
```
Edit again~/.gnupg/gpg-agent.conf，Add the following content
```
allow-loopback-pinentry
```
Finally, enter echo RELOADAGENT | gpg connect agent to restart the agent, which will take effect (the gpg agent will cache the password, and that command will also clear the gpg agent cache). This way, you can directly enter the password on the terminal.

### 6.2.2 The main GPG commands used
#### Universal generated key, using default cryptographic settings, valid for 2 years.
```
gpg --gen-key
```
#### Export public key (binary format):
``` gpg --output <filename> --export <user id>```
```
gpg --output public-keys.d/ny-gpg.asc --export ny
```

#### Decrypt encrypted data during Vault management (initialization, etc.) and convert it into a base64 string:
```
echo "wU4DA+...<Cipher based 64 string>" | base64 --decode | gpg -dq |xxd -r -p | base64
```

Command Explanations:
- base64 --decode : Decodes a base64-encoded string into binary data.
- gpg -dq : Decrypts the binary data using GPG. If the GPG private key is password-protected, you will need to enter the password (it may be cached for a period, so you might not need to enter it again on subsequent runs; the caching is managed by gpg-agent, and you can manually clear the cache with: echo RELOADAGENT | gpg-connect-agent).
- xxd -r -p:  Converts the hexadecimal string output from GPG decryption back into binary data. This step is necessary because GPG outputs decrypted data in hexadecimal format.
- base64 : Encodes the final binary data into a base64 string.