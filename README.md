# Wagmi Token Generator

## 🚀 Overview
Wagmi Token Generator is a decentralized application (dApp) that allows users to easily create and list ERC-20 tokens on an EVM-compatible blockchain. The platform enables project creators to launch their tokens while providing investors with a secure and transparent way to participate in token sales.

## 📸 Website

### Dashboard VIew
![Dashboard](https://github.com/Rahulsinghrawat18/Wagmi_Token_Generator/blob/main/public/1.png)

### Token Listing View
![Token Listing](https://github.com/Rahulsinghrawat18/Wagmi_Token_Generator/blob/main/public/2.png)

### Token Trade View
![Token Trading](https://github.com/Rahulsinghrawat18/Wagmi_Token_Generator/blob/main/public/3.png)

## 🔥 Features
- **Token Creation**: Generate ERC-20 tokens with customizable parameters.
- **Token Listing**: List created tokens on the platform.
- **Funding Goals**: Tokens are launched upon meeting funding goals.
- **Decentralized & Transparent**: Utilizes blockchain for secure transactions.
- **Seamless User Experience**: Simple and intuitive UI.

## 🛠️ Tech Stack
- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js
- **Blockchain**: Solidity, Hardhat
- **Smart Contracts**: ERC-20 Token, Launchpad Contract
- **Deployment**: Vercel, Core Blockchain Testnet

## 🏗️ Installation & Setup
### Prerequisites
- Node.js v18+
- MetaMask (or any Web3 wallet)
- Hardhat (for local testing)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Rahulsinghrawat18/Wagmi_Token_Generator.git
cd app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following:
```ini
CORE_TESTNET_RPC_URL=https://rpc.test.btcs.network
PRIVATE_KEY=your_private_key
```
> ⚠️ **Do NOT expose your private key in public repositories.**

### 4️⃣ Deploy Smart Contracts
```bash
npx hardhat run scripts/deploy.js --network core-testnet
```
This will output the contract address. Update the frontend accordingly.

### 5️⃣ Start the Development Server
```bash
npm run dev
```
Access the app at `http://localhost:3000/`


## 📌 Contract Address
0xC95cbB5Bc38ab5ac1287a0999DbDB8e2454a1cE7
[View On Core Testnet Explorer](https://scan.test2.btcs.network/address/0xC95cbB5Bc38ab5ac1287a0999DbDB8e2454a1cE7)

## 📜 License
This project is licensed under the **MIT License**.

## 🌐 Live Demo
[🔗 View the Live App](https://wagmi-teal.vercel.app/)

## 🤝 Contributing
Feel free to fork this repo, create a new branch, and submit a pull request! Contributions are welcome.

## 📩 Contact
For any inquiries or collaborations, reach out at:
📧 **rawatji7788@gmail.com**

---

🎉 Happy Building! WAGMI 🚀
