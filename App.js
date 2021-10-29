import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Title, Text } from "react-native-paper";

import {
  Connection,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const BUTTON_TEXT = "Request Airdrop";
const BUTTON_TEXT_LOADING = "Requesting Airdrop...";

export default function App() {
  const [account, setAccount] = useState({ keypair: null, balance: 0 });
  const [requestAirdropButton, setRequestAirdropButton] = useState({
    text: BUTTON_TEXT,
    loading: false,
  });

  const createConnection = () => {
    // Your code here
  };

  const createAccount = () => {
    // Your code here
  };

  const getBalance = async (publicKey) => {
    // Your code here
  };

  const requestAirdrop = async (publicKey) => {
    // Your code here
  };

  return (
    <View style={styles.container}>
      {account.keypair ? (
        <>
          <View style={styles.row}>
            <Title>Public Key</Title>
            <Text>{account?.keypair?.publicKey?.toBase58()}</Text>
          </View>
          <View style={styles.row}>
            <Title>Balance</Title>
            <Text>{account?.balance} SOL</Text>
          </View>
          <View style={styles.row}>
            <Button
              mode="outlined"
              onPress={() => requestAirdrop(account.keypair.publicKey)}
              loading={requestAirdropButton.loading}
            >
              {requestAirdropButton.text}
            </Button>
          </View>
        </>
      ) : (
        <View style={styles.row}>
          <Title>Account doesn't exist</Title>
        </View>
      )}
      <Button mode="outlined" onPress={() => createAccount()}>
        Create New Account
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
