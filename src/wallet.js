import React from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { useWallet } from "@txnlab/use-wallet";

const Wallet = () => {
  const stdlib = loadStdlib("ALGO");
  const { providers, activeAccount } = useWallet();

  const handleClick = async () => {
    try {
      const unit = new Uint8Array(64);
      const acc = await stdlib.connectAccount({
        addr: activeAccount?.address,
        sk: unit,
      });
      console.log(acc)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() =>
          providers[0]
            .connect()
            .then(() => handleClick())
            .catch((err) => console.log(err))
        }
      >
        click
      </button>
    </div>
  );
};

export default Wallet;
