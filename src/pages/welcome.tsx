import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div className="index">
      <Head>
        <title>Crown Roles</title>
      </Head>
      <h1>Crown Roles</h1>
      <div className="message">
        Welcome. You have been added to the Discord.
        <a href="https://crown-roles-test.vercel.app/api/refresh">Refresh your role</a>
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
        h1 {
          font-size: 32px;
          margin: 0;
          padding: 0;
          font-weight: normal;
        }
        .message {
          margin-top: 20px;
          opacity: 0.5;
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
          padding: 10px 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
