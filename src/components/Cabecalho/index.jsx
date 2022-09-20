export const Cabecalho = ({logobw}) => {
    return(
        <section className="farofa">
            <div className="farofadentro">
                <div className="farofinha">
                    <h1>
                        BOCAWEB FRONT
                    </h1>
                </div>
                <div className="logo">
                    <img src={logobw} alt='Logo do Boca Web' />
            </div>
            </div>
        </section>
    )
}

export default Cabecalho