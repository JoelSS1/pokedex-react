export default function Buscador() {
    return (
        <>

            <section className="container-buscador  " >
                <input type="text" placeholder="Busca tu Pokemon" className="input-buscar form-control" />
                <button className="btn btn-outline-secondary" type='submit'>
                    Buscar Pokemon
                </button>

            </section>

            
        </>
    );
}
