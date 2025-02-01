import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Painel Bonito</title>
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl text-center">
                    <h2 className="text-xl font-semibold mb-2">
                        Uma página qualquer!
                    </h2>
                    <h1 className="text-3xl font-bold mb-4">
                        AQUI SÓ TEM ESSE BOTÃO...
                    </h1>
                    <button
                        onClick={() => alert("Botão clicado!")}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                    >
                        Clique aqui
                    </button>
                </div>
                <div className="mt-8 w-full max-w-4xl">
                    <iframe
                        title="Power BI Report"
                        width="100%"
                        height="400"
                        src="https://app.powerbi.com/view?r=eyJrIjoiMTEzNWFjMGUtMGFlNS00MDY1LWEyMjktMzFjY2UwNzBlNThjIiwidCI6IjI3NzZjMjkzLTZlYmItNDZjZS05Mjk5LWUwYWM1Y2YzZGRkMCJ9"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </main>
        </>
    );
}
