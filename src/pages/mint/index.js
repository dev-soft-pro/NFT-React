import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import './mint.css'

import { connectWallet, getCurrentWalletConnected, mintNFT } from '../../util/interact.js';
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
// Alchemy Web 3 is a wrapper around Web3.js providing enchanced API methods
const web3 = createAlchemyWeb3(alchemyKey);
web3.eth.handleRevert = true;

export default function Connect(props) {
  // string that stores the user's wallet address
	const [walletAddress, setWallet] = useState('');
    // number of tokens minted so far
  const [tokensMinted, setTokensMinted] = useState('loading...');
    // number of total tokens
  const [totalTokens, setTotalTokens] = useState('loading...');
  // string that contains a message to display at the bottom of the UI
  const [status, setStatus] = useState('');
  // string that contains the pending transaction string to display at the bottom of the UI
  const [transactionStatus, setTransactionStatus] = useState('');
  // string that contains the transactionURL to display at the bottom of the UI
  const [transactionURL, setTransactionURL] = useState('');
  // string that contains the transactionURLTxt to display at the bottom of the UI
  const [transactionURLTxt, setTransactionURLTxt] = useState('');

  var tokensMintedResponse;
  var totalTokensResponse;

  useEffect(() => {
		async function connectWallet() {
			// empty [] means it will be only called on the component's first render
			const { address, status } = await getCurrentWalletConnected();

			setWallet(address);
			setStatus(status);
            
			addWalletListener();

      tokensMintedResponse = await fetch(`https://www.cryptohermitsnft.com/getTokensMinted`, {method: 'GET'});
      tokensMintedResponse = await tokensMintedResponse.json();
      tokensMintedResponse = tokensMintedResponse['tokensMinted'];
      setTokensMinted(tokensMintedResponse);

      totalTokensResponse = await fetch(`https://www.cryptohermitsnft.com/getTotalTokens`, {method: 'GET'});
      totalTokensResponse = await totalTokensResponse.json();
      totalTokensResponse = totalTokensResponse['totalTokens'];
      setTotalTokens(totalTokensResponse);
		}
		connectWallet();
	}, []);

  function addWalletListener() {
		// check if Metamask is installed
		if (window.ethereum) {
			// if enabled, add listener to see if state changes
			// state changes include when user connects an additional account, switches accounts, or disconnects an account
			window.ethereum.on('accountsChanged', (accounts) => {
				// if there is at least one account connected, set walletAddress to the first account
				if (accounts.length > 0) {
					setWallet(accounts[0]);
					setStatus('👆🏽 Click above to get your BitBird NFT');
				}
				// else prompt user to connect to Metamask
				else {
					setWallet('');
					setStatus('🦊 Connect to Metamask using the top right button.');
				}
			});
		} else {
			document.getElementById('mintButton').disabled = true;
			setStatus(
				<p>
					{' '}
					🦊{' '}
					<a target='_blank' rel='noreferrer' href={`https://metamask.io/download.html`}>
						You need to download MetaMask.
					</a>
				</p>
			);
		}
	}

  // connect the user's Metamask wallet to our dApp
	const connectWalletPressed = async () => {
		const walletResponse = await connectWallet();
		// update status
		setStatus(walletResponse.status);
		// update wallet address
		setWallet(walletResponse.address);
	};

  async function wait(ms) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

  function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

  // called to mint the user's NFT
	const onMintPressed = async () => {
		setTransactionStatus(' ');
		setTransactionURL(' ');
		setTransactionURLTxt(' ');

		var txHash;
		var success;
		var status;
		var mintNFTResponse;

		var _mintAmount = document.getElementById('mintAmount').value;

		if (_mintAmount === '') {
			alert('mint amount cannot be empty');
			return;
		}

		if (_mintAmount > 3) {
			alert('mint amount cannot be greater than 3');
			return;
		}

		document.getElementById('mintButton').innerHTML = 'loading Metamask...';

		// call smart contract to mint url
		mintNFTResponse = await mintNFT(_mintAmount);

		txHash = mintNFTResponse['txHash'];
		success = mintNFTResponse['success'];
		status = mintNFTResponse['status'];

		if (success) {
			document.getElementById('mintButton').innerHTML = 'pending transaction...';

			setTransactionStatus(`Check out your pending transaction on Etherscan in a new tab while you wait.`);
			setTransactionURL(`https://rinkeby.etherscan.io/tx/${txHash}`);
			setTransactionURLTxt('Pending Transaction');
		} else {
			document.getElementById('mintButton').innerHTML = 'Mint NFT';

			setStatus(status);
			return;
		}

		setStatus(status);

		// check and see if the transaction hash is completed or still pending
		// max of 58 minutes to wait
		for (var i = 0; i < 175; i++) {
			// failed example 0xec7f5f035cc1e831e4dcc9cb3fb67b1d4a6e41dc45aaa5986ae81163f1d3355c
			var txReceipt = await web3.eth.getTransactionReceipt(txHash);
			// ----------------------------------------------------------- example of txReceipt -----------------------------------------------------------
			// blockHash: "0x11822fba16e3f52c58b806eb9248e5697274d81b9b4d05e32e00782fb12f335b"
			// blockNumber: 11144942
			// contractAddress: null
			// cumulativeGasUsed: 1480730
			// effectiveGasPrice: "0x7c15db11"
			// from: "0x53434cf062fd750ed4efa7b552e72ab800acea18"
			// gasUsed: 150112
			// logs: (2) [{…}, {…}]
			// logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000100000000000000000000008000000000000000000000000004000000000000000000000020000000000000000000800008000000000000000800010000000000008000000000000000000000000000000000000000000000000000000000000000000000100000000800000000000000000020000000000004000000000000000000002000000000000000000000000000020000000000000000008000020000000000000000000000000000000000000000000000000000000000000000000"
			// status: true
			// to: "0x52c7715d5d41f5245d30a27297bd84f3121b290d"
			// transactionHash: "0x72684be0b4df5608fdaf9530b2fea8c36b6658f6c98e92fd5fb87b674fe2ce71"
			// transactionIndex: 16
			// type: "0x2"

			if (txReceipt === null) {
				await wait(5000);
				var newI = i + 1;
				var secondsPassed = newI * 5;
				secondsPassed = secondsPassed.toString();

				console.log(`${secondsPassed} seconds has passed for the pending transaction`);
				continue;
			} else {
				break;
			}
		}
		console.log(txReceipt);
		console.log(txHash);

		// upon completion of transaction, update success variable
		var txSuccess = txReceipt['status'];

		// index of last token minted
		var lastIndex;

		// if the transaction was successful, then get the tokenId
		if (txSuccess) {
			var tokenIdArr = [];
			var tokenId;
			console.log(txReceipt['logs']);

			if (txReceipt['logs'].length < 3) {
				tokenId = parseInt(txReceipt['logs'][1]['data'], 16);
				tokenIdArr.push(tokenId);

                lastIndex = tokenIdArr.length - 1;
                tokensMintedResponse = await fetch(`https://www.cryptohermitsnft.com/setTokensMinted/${numberWithCommas(tokenIdArr[lastIndex])}`, {method: 'PUT'});
				tokensMintedResponse = await tokensMintedResponse.json();
                setTokensMinted(tokensMintedResponse['tokensMinted']);

				setTransactionStatus(`Now that your transaction is completed, you can view your NFT on Open Sea once the metadata is revealed. Your token id is ${tokenIdArr}.`);
				setTransactionURLTxt('Completed Transaction');
			} else {
				for (let i = 1; i <= txReceipt['logs'].length; i += 2) {
					tokenId = parseInt(txReceipt['logs'][i]['data'], 16);
					tokenIdArr.push(tokenId);
				}

                lastIndex = tokenIdArr.length - 1;
                tokensMintedResponse = await fetch(`https://www.cryptohermitsnft.com/setTokensMinted/${numberWithCommas(tokenIdArr[lastIndex])}`, {method: 'PUT'});
				tokensMintedResponse = await tokensMintedResponse.json();
                setTokensMinted(tokensMintedResponse['tokensMinted']);

				setTransactionStatus(`Now that your transaction is completed, you can view your NFTs on Open Sea once the metadata is revealed. Your token ids are ${tokenIdArr}.`);
				setTransactionURLTxt('Completed Transaction');
			}

			document.getElementById('mintButton').innerHTML = 'Mint NFT';
		} else {
			// failed example 0xec7f5f035cc1e831e4dcc9cb3fb67b1d4a6e41dc45aaa5986ae81163f1d3355c
			document.getElementById('transactionStatus').style.color = 'red';
			setTransactionStatus(`Please click the link below for the reason your transaction failed.`);
			setTransactionURL(`https://rinkeby.etherscan.io/tx/${txHash}`);
			setTransactionURLTxt('Failed Transaction');
		}

		document.getElementById('mintButton').innerHTML = 'Mint NFT';
	};

  return (
    <DefaultPage>
      <div className="page-mint">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>Mint Nft</p>
        <p className="text-normal-black" style={{ marginTop: 30 }}>
          Tokens Minted {tokensMinted}/{totalTokens}
        </p>
        <p className="text-normal-black" style={{ marginTop: 30 }}>
          Get your random cryptohermit nft below, All nfts are 0.01 Eth!
        </p>
        <p className="text-normal-black" style={{ marginTop: 30 }}>
          Number of Nfts to mint (3 max per wallet)
        </p>
        <div className="mint-select-wrapper">
          <select name='mintAmount' id='mintAmount' className='mint-amount'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="mint-icon-down" onClick={() => document.getElementById('mintAmount').click()} />
        </div>
        <div className="mint-button-wrapper">
          <button id='walletButton' className="btn-cyan mint-connect" onClick={connectWalletPressed}>
            {walletAddress.length > 0 ? 'Connected: ' + String(walletAddress).substring(0, 6) + '...' + String(walletAddress).substring(38) : 
              'Connect Wallet'}
          </button> <br id="button-separator"/>
          <button id='mintButton' className="btn-magento" onClick={onMintPressed}>MINT NFT</button>
        </div>
        <p id='status'>{status}</p>
				<br></br>
				<br></br>
				<p id='transactionStatus'>
					{transactionStatus}
					<br></br>
					<a href={`${transactionURL}`} target='_blank' rel='noreferrer'>
						{transactionURLTxt}
					</a>
				</p>
      </div>
    </DefaultPage>
  )
}