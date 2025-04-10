export async function getAccessToken(code) {
    const clientId = "0cfc152a5ed6485488604111d050af9c";
    const redirectUri = "http://127.0.0.1:5173/callback"; // o mesmo que você registrou no Spotify
    const codeVerifier = localStorage.getItem("code_verifier");

    const body = new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body.toString(),
    });

    const data = await response.json();
    return data.access_token;
}
