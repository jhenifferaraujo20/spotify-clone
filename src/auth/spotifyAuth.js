const clientId = "0cfc152a5ed6485488604111d050af9c";
const redirectUri = "https://fanciful-belekoy-f03886.netlify.app/callback";
const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-library-read"
];

function generateRandomString(length) {
    let text= '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function  generateCodeChallenge(codeVerifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');    
}

export async function  redirectToAuthCodeFlow() {
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    localStorage.setItem("code_verifier", codeVerifier);

    const params = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scopes.join(" "),
        redirect_uri: redirectUri,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
    });

    window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}