import React, { useState } from "react";
import ToolLibraryBlock from "./ToolLibraryBlock";
import "./digDeeperSectionStyle.css";

const TOOL_LIBRARY_DATA = [
  {
    theme: "Core Documentation",
    content:
      "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
  },
  {
    theme: "Solana Cookbook",
    content:
      "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
  },
  {
    theme: "Solana Stack Exchange",
    content:
      "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
  },
  {
    theme: "Solana Playground",
    content:
      "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
  },
  {
    theme: "Create-solana-dapp",
    content:
      "Get up and running fast with Solana dApps, generate a project template in seconds.",
  },
  {
    theme: "Anchor Docs",
    content:
      "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
  },
  {
    theme: "Solana Program Library",
    content:
      "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
  },
  {
    theme: "Program Examples",
    content:
      "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
  },
  {
    theme: "Solana Designs",
    content:
      "754 inspirational designs, illustrations, and graphic elements from the world's best designers.",
  },
];

const ToolLibraryList = () => {
  const [displayedItems, setDisplayedItems] = useState(3);
  const addMoreItems = () => {
    setDisplayedItems((prevItems) => prevItems + 3);
  };
  return (
    <div>
      <div className="development-course__tool-library-list">
        {TOOL_LIBRARY_DATA.slice(0, displayedItems).map((data, index) => (
          <ToolLibraryBlock
            key={index}
            theme={data.theme}
            content={data.content}
          />
        ))}
      </div>
      <div className="development-course__btn-load-more-container">
        {displayedItems < TOOL_LIBRARY_DATA.length && (
          <button
            className="development-course__btn-load-more custom-button-style"
            onClick={addMoreItems}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default ToolLibraryList;
