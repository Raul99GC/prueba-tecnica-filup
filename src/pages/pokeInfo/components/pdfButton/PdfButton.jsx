import React from 'react'
import PropTypes from 'prop-types'
import { saveAs } from 'file-saver'

import styles from './pdfButton.module.css'
import axios from 'axios'

const PdfButton = ({ id }) => {
  const handleClick = async () => {
    try {
      // Realizar la solicitud POST al endpoint
      const response = await axios.post('http://localhost:8080/api/v1/pokemon/', {
        id
      }, {
        responseType: 'arraybuffer' // Indicar que la respuesta es un buffer
      })

      // Crear un Blob con la respuesta del servidor
      const blob = new Blob([response.data], { type: 'application/pdf' })

      // Descargar el archivo usando FileSaver.js
      saveAs(blob, 'archivo.pdf')
    } catch (error) {
      console.error('Error al descargar el archivo', error)
    }
  }

  return (
    <button className={styles.button} onClick={handleClick}>Descargar PDF</button>
  )
}

PdfButton.propTypes = {
  id: PropTypes.number.isRequired
}

export default PdfButton
