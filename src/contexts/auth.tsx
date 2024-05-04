import React, { createContext, useState } from "react";

interface AuthContextData {
  signed: boolean;
  token: string;
  nome: string;
  email: string;
  celular: string;
  estado: string;
  cidade: string;
  id: string;
  signIn(user, token, nome, celular, estado, cidade, id): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }: any) => {
  // eslint-disable-next-line
  const [signed, setSigned] = useState(false);
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [id, setId] = useState("");

  const signIn = async (token, email, nome, celular, estado, cidade, id) => {

    console.log(token+'-'+email+'-'+nome+'-'+celular+'-'+estado+'-'+cidade+'-'+id)

    try {
      if (token && email && nome && celular && estado && cidade && id) {
        await setSigned(true);
        await setToken(token);
        await setNome(nome);
        await setEmail(email);
        await setCelular(celular);
        await setEstado(estado);
        await setCidade(cidade);
        await setId(id);

        await localStorage.setItem("@SideKickAuth:token", token);
        await localStorage.setItem("@SideKickAuth:email", email);
        await localStorage.setItem("@SideKickAuth:nome", nome);
        await localStorage.setItem("@SideKickAuth:celular", celular);
        await localStorage.setItem("@SideKickAuth:estado", estado);
        await localStorage.setItem("@SideKickAuth:cidade", cidade);
        await localStorage.setItem("@SideKickAuth:id", id);

      }
    } catch (error) {
      console.error(error);
      throw new Error("Falha ao fazer login");
    }
  };

  const signOut = () => {
    localStorage.clear();
    setSigned(false);
    setToken("");
    setNome("");
    setEmail("");
    setCelular("");
    setEstado("");
    setCidade("");
    setId("");
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        token,
        nome,
        email,
        celular,
        estado,
        cidade,
        id,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthProvider, AuthContext };
