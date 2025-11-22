export default function ProdutoCard({ produto }) {
  return (
    <div style={{ border:"1px solid #ccc", padding:"10px", width:"200px" }}>
      <img src={produto.imagem || "/placeholder.png"} style={{ width:"100%" }} />
      <h3>{produto.nome}</h3>
      <p>Preço: {produto.preco}</p>
    </div>
  );
}
