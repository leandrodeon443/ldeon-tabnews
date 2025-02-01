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

                <iframe
                    title="2"
                    width="600"
                    height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMTEzNWFjMGUtMGFlNS00MDY1LWEyMjktMzFjY2UwNzBlNThjIiwidCI6IjI3NzZjMjkzLTZlYmItNDZjZS05Mjk5LWUwYWM1Y2YzZGRkMCJ9"
                    frameborder="0"
                    allowfullscreen="true"
                ></iframe>
            </main>
        </>
    );
}
