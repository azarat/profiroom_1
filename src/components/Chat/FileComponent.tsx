import React from 'react'

//types
import { FileComponentProps } from './Types'

const File: React.FC<FileComponentProps> = ({ index, fileLink, typeFile, nameFile }) => {
  return (
    <a key={index} href={fileLink} download="file">
      <div className="messages-window__file">
        <img
          className="messages-window__file-image"
          src={`/assets/img/file-types/${typeFile.split('/').pop()}.png`}
          alt="fileImage"
        />
        <p className="messages-window__file-title">
          {nameFile.length > 15 ? nameFile.substring(0, 15) + `...` : nameFile}
        </p>
        <div className="icon-download-file"></div>
      </div>
    </a>
  )
}

export default File
