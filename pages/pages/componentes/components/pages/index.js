import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign:"center", marginTop:"100px" }}>
      <h1>DZM Corretor de Imóveis</h1>
      <p>Zacarias intermediário mais rápido oh Executivo</p>
      <Link href="/produtos">
        <button style={{ padding:"10px 20px", marginTop:"20px" }}>Ver Produtos</button>
      </Link>
    </div>
  );
}
