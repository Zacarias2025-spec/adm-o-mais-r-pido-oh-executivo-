import { useState } from "react";

export default function AdminPanel({ token, refresh }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");

  const handleAdd = async () => {
    const res = await fetch("/api/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, nome, preco, imagem }),
    });
    if (res.ok) {
      setNome(""); setPreco(""); setImagem("");
      refresh();
    }
  };

  return (
    <div style={{ marginBottom:"20px" }}>
      <h2>Adicionar Produto</h2>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Preço" value={preco} onChange={e => setPreco(e.target.value)} />
      <input placeholder="URL da imagem" value={imagem} onChange={e => setImagem(e.target.value)} />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
