import { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import FarmNFT from "./contracts/FarmNFT.json";

const contractAddress = "0xEeF0aa6efF8B161801031fe01eBce54aB04Dfee4";

function App() {
  const [account, setAccount] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [minting, setMinting] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [nftName, setNftName] = useState("");
  const [popup, setPopup] = useState(false);

  const connectWallet = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
    } catch (err) {
      console.error("Không thể kết nối ví:", err);
    }
  };

  const startPlanting = () => {
    if (!account) return alert("Vui lòng kết nối ví trước.");
    if (minting || countdown > 0) return;
    let timer = 10;
    setCountdown(timer);
    const interval = setInterval(() => {
      timer--;
      setCountdown(timer);
      if (timer <= 0) {
        clearInterval(interval);
        mintNFT();
      }
    }, 1000);
  };

  const mintNFT = async () => {
    try {
      setMinting(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, FarmNFT.abi, signer);
      const tx = await contract.mint();
      const receipt = await tx.wait();
      const tokenId = parseInt(receipt.logs[0].topics[3], 16);
      setTokenId(tokenId);

      const tokenURI = await contract.tokenURI(tokenId);
      const metadataURL = tokenURI.replace("ipfs://", "https://w3s.link/ipfs/");
      const response = await fetch(metadataURL);
      if (!response.ok) throw new Error("Không tải được metadata từ IPFS");

      const data = await response.json();
      const imageIPFS = data.image || "";
      const imageURL = imageIPFS.replace("ipfs://", "https://w3s.link/ipfs/");
      const name = data.name || `NFT #${tokenId}`;

      setImageURL(imageURL);
      setNftName(name);
      setPopup(true);
    } catch (error) {
      console.error("Lỗi mint NFT:", error);
    } finally {
      setMinting(false);
    }
  };

  return (
    <div className={`app ${!account ? "center-when-no-wallet" : ""}`}>
      <h1 className="title">
        <span className="icon">🌱</span> Trồng Cây – Nhận NFT
      </h1>
      <p className="subtitle">Mỗi lần trồng là… một lần mint!</p>
      {!account && <p className="tap-me">👉 Chạm vào để gieo một cây mầm số!</p>}

      <div className="buttons-wrapper vertical-buttons">
        {!account ? (
          <button className="connect-button animated" onClick={connectWallet}>
            🔗 Kết nối ví
          </button>
        ) : (
          <p className="connected-account">✅ Ví: {account.slice(0, 6)}...{account.slice(-4)}</p>
        )}

        <button
          className="plant-button animated"
          onClick={startPlanting}
          disabled={minting || countdown > 0}
        >
          {countdown > 0 ? `⏳ Đang trồng… ${countdown}s` : "🌱 Trồng cây"}
        </button>

        <a
          className="faucet-link"
          href="https://sepoliafaucet.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          💧 Nhận ETH testnet
        </a>

        {!imageURL && !minting && (
          <img
            className="illustration"
            src="/cute-sprout.png"
            alt="Cây mầm dễ thương"
          />
        )}
      </div>

      {imageURL && (
        <div className="nft-display">
          <img
            className="fade-in"
            src={imageURL}
            alt={nftName}
            onError={(e) => {
              e.target.src = "/default-tree.png";
            }}
          />
          <p>🎉 {nftName}</p>
          <a
            href={`https://sepolia.etherscan.io/token/${contractAddress}?a=${tokenId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="etherscan-link"
          >
            🔍 Xem NFT trên Etherscan
          </a>
        </div>
      )}

      {popup && (
        <div className="popup popup-animate">
          🎊 Bạn vừa thu hoạch được 1 NFT siêu xinh!
        </div>
      )}

      {minting && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>⏳ Đang mint NFT, vui lòng chờ...</p>
        </div>
      )}
    </div>
  );
}

export default App;
