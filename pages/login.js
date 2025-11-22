import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pass }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      router.push("/produtos");
    } else {
      setError(data.message);
    }
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", marginTop:"100px" }}>
      <h1>Login Admin</h1>
      <input placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Senha" value={pass} onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
