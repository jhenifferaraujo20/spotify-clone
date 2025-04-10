import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const codeVerifier = localStorage.getItem("code_verifier");

    const body = new URLSearchParams({
      grant_type: "authorization_code", // ATENÇÃO: estava com erro de digitação!
      code: code,
      redirect_uri: "https://fanciful-belekoy-f03886.netlify.app/callback", // precisa ser exatamente o mesmo registrado no Spotify Dev
      client_id: "0cfc152a5ed6485488604111d050af9c",
      code_verifier: codeVerifier,
    });

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("access_token", data.access_token);
      navigate("/"); // volta pro app logado
    })
    .catch(error => {
      console.error("Erro ao obter token:", error);
    });
  }, [navigate]);

  return <p>Conectando com o Spotify...</p>;
}

export default Callback;