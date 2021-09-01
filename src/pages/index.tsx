import React from 'react';
import { useWallet } from '@gimmixorg/use-wallet';
import WalletConnectProvider from '@walletconnect/web3-provider';
import useSignature from '@app/features/useSignature';
import Head from 'next/head';
import Router from 'next/router';

const IndexPage = () => {
  const { connect, account } = useWallet();
  const { promptSignature } = useSignature();
  const verifyAndJoin = async () => {
    const signature = await promptSignature();
    Router.push(`/api/verify?account=${account}&signature=${signature}`);
  };
  return (
    <div className="index">
      <Head>
        <title>Crown Roles</title>
      </Head>
      <h1>Crown Roles</h1>
      <div className="message">You must have Crowns to enter.</div>
      {!account ? (
        <button
          onClick={() =>
            connect({
              providerOptions: {
                walletconnect: {
                  package: WalletConnectProvider,
                  options: {
                    infuraId: 'b95f6330bfdd4f5d8960db9d1d3da676'
                  }
                }
              },
              theme: 'dark'
            })
          }
        >
          Connect Wallet
        </button>
      ) : (
        <button onClick={verifyAndJoin}>Verify your Crown Role</button>
      )}

      <div className="links">
        <a href="https://robes.market/" target="_blank">
          Find Divine Robes for sale and check prices at robes.market.
        </a>
      </div>
      <style jsx>{`
        .index {
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .message {
          margin-top: 20px;
          opacity: 0.5;
        }

        h1 {
          font-size: 32px;
          margin: 0;
          padding: 0;
          font-weight: normal;
        }
        button {
          margin-top: 20px;
          background-color: transparent;
          border: none;
          outline: none;
          color: white;
          font-family: serif;
          padding: 0;
          font-size: 18px;
          cursor: pointer;
          background-color: hsl(203, 18%, 19%);
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
        }
        .links {
          position: fixed;
          bottom: 0;
          padding: 20px 75px;
          text-align: center;
          line-height: 1.3em;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
