import React, { useState} from 'react'
import PropTypes from 'prop-types'

const Hola = ({valor}) => {

    const [contador, setContador] = useState(valor)

    const handleSumar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <p>{ contador }</p>
            <button onClick={handleSumar}>sumar 1</button>
        </div>
    )
}

Hola.propTypes = {
    valor: PropTypes.number.isRequired
}

Hola.defaultProps = {
    valor: 0
}

export default Hola
