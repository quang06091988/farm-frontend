# 🌱 Trồng Cây – Nhận NFT

Mini DApp Web3 đơn giản, dễ thương, dễ viral. Người dùng có thể kết nối ví, trồng cây ngẫu nhiên và nhận về một NFT cây độc đáo – tất cả được lưu trữ trên IPFS.

---

## 🚀 Demo
👉 [https://trong-cay.vercel.app](https://trong-cay.vercel.app)

---

## 🎯 Mục Tiêu

- 🌱 Nhấn nút “Trồng cây” để gieo hạt
- ⏳ Đợi 10 giây tạo cảm giác hồi hộp
- 🎁 Mint 1 NFT ngẫu nhiên (ảnh từ IPFS)
- 🖼️ Hiển thị hình ảnh + tên NFT
- 🔍 Link xem NFT trên Etherscan
- 💧 Link nhận ETH testnet

---

## 🛠️ Công Nghệ

| Phần | Công cụ |
|------|--------|
| Smart Contract | Solidity + Hardhat |
| Blockchain | Sepolia Testnet |
| NFT chuẩn | ERC-721 |
| Frontend | React + Vite |
| Web3 | ethers.js v6 |
| Hosting | Vercel |
| Lưu trữ ảnh NFT | IPFS (via Web3.Storage) |

---

## 🧱 Cấu Trúc Dự Án

```
📁 public/
 ┣ cute-sprout.png
 ┣ default-tree.png

📁 src/
 ┣ App.jsx
 ┣ App.css
 ┗ contracts/
    ┗ FarmNFT.json

package.json
vite.config.js
```

---

## 📦 Cài Đặt & Chạy Local

```bash
git clone https://github.com/yourname/trong-cay-nft.git
cd trong-cay-nft
npm install
npm run dev
```

---

## 🌐 Deploy lên Vercel

```bash
npm run build
npx vercel
```

> Output directory: `dist`

---

## 📄 Smart Contract

Contract `FarmNFT.sol` được deploy lên Sepolia:

```
📬 Address: 0xEeF0aa6efF8B161801031fe01eBce54aB04Dfee4
🔗 Etherscan: https://sepolia.etherscan.io/address/0xEeF0aa6efF8B161801031fe01eBce54aB04Dfee4
```

---

## 📥 Nhận ETH Testnet

Để sử dụng DApp, bạn cần ETH testnet (miễn phí):

🔗 https://sepoliafaucet.com

---

## 📸 Giao Diện

| Trước khi mint | Sau khi mint |
|----------------|---------------|
| ![sprout](public/cute-sprout.png) | ![example](public/default-tree.png) |

---

## 💬 License

MIT License. Copyright © 2025.