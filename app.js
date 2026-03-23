const { Connection, clusterApiUrl } = solanaWeb3;

// conexión a Solana (devnet)
const connection = new Connection(clusterApiUrl("devnet"));

function conectarWallet() {
  alert("Conectado a Solana Devnet 🚀");
  console.log("Conectado a:", connection.rpcEndpoint);
}

function enviarTransaccion(tipo) {
  console.log("Enviando a blockchain:", tipo);
  alert("Reciclaje de " + tipo + " enviado a Solana ♻️");
}