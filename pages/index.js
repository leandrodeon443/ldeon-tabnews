import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>AAAAAAAAAAAAAAAAAAAA</title>
            </Head>
            <main>
                <h2>Uma página qualquer!</h2>
                <h1>AQUI SO TEM ESSE BOTAO.....</h1>
                <button onClick={() => alert("Botão clicado!")}>
                    Clique aqui
                </button>
            </main>
        </>
    );
}
