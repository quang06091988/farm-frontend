# 🌱 DApp Trồng Cây – Nhận NFT

## 🎯 MỤC TIÊU
Tạo một DApp mini-game Web3 thân thiện với người dùng, cho phép:
- Nhấn nút **“🌱 Trồng cây”**
- Đếm ngược **10 giây** tạo cảm giác hồi hộp
- Nhận **1 NFT cây** ngẫu nhiên từ bộ metadata lưu trên IPFS

## ⚙️ CÔNG NGHỆ SỬ DỤNG

| Thành phần        | Công nghệ                                    |
|-------------------|----------------------------------------------|
| **Blockchain**     | Sepolia Testnet                              |
| **Smart Contract** | Solidity + Hardhat + OpenZeppelin v5         |
| **Frontend**       | React + Vite + Ethers.js v6                  |
| **Lưu trữ NFT**    | IPFS (Web3.Storage)                          |
| **Deploy frontend**| Vercel                                       |
| **Kết nối ví**      | MetaMask                                     |

## 🧠 SMART CONTRACT

- **Tên file**: `FarmNFT.sol`
- **Chuẩn**: ERC-721
- **Hàm chính**:
  - `mint()` – Sinh NFT mới từ metadata ngẫu nhiên
  - `addCID(string[] calldata _metadataURIs)` – Cho phép chủ sở hữu thêm danh sách metadata

> **Địa chỉ contract (Sepolia)**  
> `0xEeF0aa6efF8B161801031fe01eBce54aB04Dfee4`

## 📦 METADATA NFT

- **CID IPFS gốc**:  
  `bafybeifpdlajqftq7jbbt2ykk33xc7xaplp46fmgmizg45eeair7qj6tru`

- **Gồm 5 cây NFT đặc biệt**:
  - 🌾 **Cây Lúa**
  - 💰 **Cây Tiền**
  - 🧠 **Cây Tri Thức**
  - 🧧 **Cây Lì Xì Tết**
  - 🪐 **Cây Đa Vũ Trụ**

- **Link mẫu**:  
  `https://w3s.link/ipfs/bafybeifpdlajqftq7jbbt2ykk33xc7xaplp46fmgmizg45eeair7qj6tru/cay_lua_metadata.json`

## 🎨 GIAO DIỆN FRONTEND

### Tính năng:
- 🌱 Nút **“Trồng cây”**
- ⏳ **Đếm ngược 10 giây**
- 🖼️ Hiển thị **ảnh + tên cây NFT** từ IPFS
- 🔍 Link **Etherscan** xem NFT
- 💧 Nút nhận ETH testnet (đến Faucet)

### Thiết kế:
- Màu **pastel**, **bo tròn**, thân thiện Gen Z
- **Responsive** cho mobile
- Có hiệu ứng loading và popup chúc mừng 🎊

## 🚀 DAPP ONLINE

**Link trải nghiệm:**  
👉 [https://farm-frontend-pink.vercel.app](https://farm-frontend-pink.vercel.app)

- ✅ Kết nối ví
- ✅ Mint NFT thật
- ✅ Xem NFT trên Etherscan

## 🔧 QUY TRÌNH TRIỂN KHAI

1. Viết và test contract `FarmNFT.sol`
2. Tạo 5 file metadata NFT cây
3. Upload metadata lên IPFS (Web3.Storage)
4. Deploy contract lên **Sepolia**
5. Chạy script `addCID.js` để thêm metadata
6. Viết **frontend React + Ethers.js**
7. Gắn logic gọi `mint()` + hiển thị metadata
8. Thêm hiệu ứng, link Etherscan, nút faucet
9. Deploy frontend lên **Vercel**

## ✅ TRẠNG THÁI HOÀN THIỆN

| Tính năng                         | Trạng thái |
|----------------------------------|------------|
| Kết nối ví                        | ✅         |
| Trồng cây + đếm ngược            | ✅         |
| Mint NFT thật                    | ✅         |
| Hiển thị ảnh + tên từ IPFS       | ✅         |
| Link xem NFT trên Etherscan      | ✅         |
| Giao diện tối ưu cho mobile      | ✅         |
| DApp chạy online                 | ✅         |
