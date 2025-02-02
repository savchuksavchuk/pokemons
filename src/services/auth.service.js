import { API_URL } from "../config";

const controller = `${API_URL}/user`;

export class AuthService {
  static getMessageToSign = async () => {
    const result = await fetch(`${controller}/getMessageToSign`, {
      method: "GET",
    });

    if (result.ok) {
      return result.json();
    }
  };

  static signNonce = async (nonce) => {
    if (!window.ethereum) {
      throw new Error("Metamask is not installed");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];

    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [nonce, account],
    });

    return signature;
  };

  static login = async (message, signature) => {
    const result = await fetch(`${controller}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, signature }),
    });

    if (result.ok) {
      return result.json();
    }
  };
}
