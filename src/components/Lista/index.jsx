export const Lista = ({odas}) => {
    return(
        <div className='posts'>
          <p className="odas"> {odas.length} odas </p>
            {odas.map(oda => (
              <div key={oda._id} className='post'>
                <h1>{oda.nome} </h1>
                <p> usuario: {oda.usuario} </p>
                <p> data de inclusão: {oda.data_inclusao}</p>
                <p> palavras-chave: {oda.palavras_chave}</p>
                <p> descricao: {oda.descricao} </p>
              </div>
            ))}
        </div>
    )
}

export default Lista