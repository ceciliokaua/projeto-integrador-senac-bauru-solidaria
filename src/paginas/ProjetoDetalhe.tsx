import { useParams } from "react-router-dom";

function ProjetoDetalhe () {
    const { id } = useParams();

    return(
        <>
            <div style={{ paddingTop: "100px", textAlign: "center"}}>
                <h1>Página do Projeto</h1>
                <p>ID do projeto: {id}</p>
            </div>
        </>
    )
}
export default ProjetoDetalhe