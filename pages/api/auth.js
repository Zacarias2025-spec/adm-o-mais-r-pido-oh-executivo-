export default function handler(req, res) {
  if (req.method === "POST") {
    const { user, pass } = req.body;
    if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
      res.status(200).json({ success: true, token: "admin-token" });
    } else {
      res.status(401).json({ success: false, message: "Usuário ou senha incorretos" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
