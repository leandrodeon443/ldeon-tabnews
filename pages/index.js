function Home() {
    return (
        <>
            <head>
                <title>LDEON TabNews!</title>
            </head>
            <body>
                <h2>
                    Uma página qualquer! AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </h2>
                <h1>
                    Aqui vai um texto qualquer, será que consigo fazer um botão?
                </h1>
                <button onClick={() => alert("Botão clicado!")}>
                    Clique aqui
                </button>
                <img
                    src="bombomzinho.jpeg"
                    alt="Bombomzinho"
                    style={{
                        width: "300px",
                        height: "auto",
                        marginTop: "20px",
                    }}
                />
            </body>
        </>
    );
}

export default Home;
