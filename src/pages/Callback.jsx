import { useEffect } from "react";
import { getAccessToken } from "../auth/callbackHandler";

function Callback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      getAccessToken(code)
        .then((token) => {
          localStorage.setItem("access_token", token);
          console.log("✅ Access Token salvo:", token);
          window.location.href = "/";
        })
        .catch((err) => {
          console.error("❌ Erro ao trocar código por token:", err);
        });
    }
  }, []);

  return <p>Conectando com o Spotify...</p>;
}

export default Callback;