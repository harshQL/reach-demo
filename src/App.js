import React from "react";
import Wallet from "./wallet";
import {
  PROVIDER_ID,
  useInitializeProviders,
  WalletProvider,
} from "@txnlab/use-wallet";
import { WalletConnectModalSign } from "@walletconnect/modal-sign-html";

const App = () => {
  const providers = useInitializeProviders({
    providers: [
      {
        id: PROVIDER_ID.WALLETCONNECT,
        clientStatic: WalletConnectModalSign,
        clientOptions: {
          projectId: process.env.REACT_APP_PROJECT_ID,
          metadata: {
            name: "JASIRI dApp",
            description: "JASIRI dApp",
            url: "#",
            icons: ["https://walletconnect.com/walletconnect-logo.png"],
          },
          modalOptions: {
            themeMode: "light",
          },
        },
      },
    ],
    nodeConfig: {
      network: "testnet",
      nodeServer: "https://testnet-api.algonode.cloud",
      nodeToken: "",
      nodePort: "443",
    },
  });

  return (
    <div>
      <WalletProvider value={providers}>
        <Wallet />
      </WalletProvider>
    </div>
  );
};

export default App;
