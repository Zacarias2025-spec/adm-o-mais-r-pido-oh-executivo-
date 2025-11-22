import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";
import AdminPanel from "../components/AdminPanel";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    fetch("/api/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  const refresh = () => {
    fetch("/api/produtos")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }

  return (
    <div style={{ padding:"20px" }}>
      <h1>Produtos</h1>
      {token && <AdminPanel refresh={refresh} token={token} />}
      <div style={{ display:"flex", flexWrap:"wrap", gap:"20px" }}>
        {produtos.map((p, i) => <ProdutoCard key={i} produto={p} />)}
      </div>
    </div>
  );
}
