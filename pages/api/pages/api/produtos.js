let produtos = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(produtos);
  } else if (req.method === "POST") {
    const { token, nome, preco, imagem } = req.body;
    if (token !== "admin-token") return res.status(401).json({ error: "Não autorizado" });
    produtos.push({ nome, preco, imagem });
    res.status(200).json({ success: true });
  } else if (req.method === "DELETE") {
    const { token, nome } = req.body;
    if (token !== "admin-token") return res.status(401).json({ error: "Não autorizado" });
    produtos = produtos.filter(p => p.nome !== nome);
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
