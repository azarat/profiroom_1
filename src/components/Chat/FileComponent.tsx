import React, { useMemo } from 'react'

//types
import { FileComponentProps } from './Types'

const File: React.FC<FileComponentProps> = ({ index, fileLink, nameFile }) => {
  const src = useMemo(() => {
    return '/assets/img/file-types/unknown.png'
  }, [])
  return (
    <a key={index} href={fileLink} download="file">
      <div className="messages-window__file">
        <img className="messages-window__file-image" src={src} alt="fileImage" />
        <p className="messages-window__file-title">
          {nameFile.length > 15 ? nameFile.substring(0, 15) + `...` : nameFile}
        </p>
        <div className="icon-download-file"></div>
      </div>
    </a>
  )
}

export default File
