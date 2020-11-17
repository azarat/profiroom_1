import React from 'react'

//antd
import { Popover } from 'antd'
//types
import { TopProps } from './Types'
//components
import File from './FileComponent'

const Top: React.FC<TopProps> = ({
  collocutor: { collocutorName, collocutorSurname, online },
  fileList,
}) => {
  return (
    <div className="messages-window__top">
      <div className="messages-window__collocutor-info">
        <>
          <div className="messages-window__collocutor-name">
            {`${collocutorName} ${collocutorSurname}`}
            <p className="messages-window__online-status">{online ? 'Oнлайн' : 'Офлайн'}</p>
          </div>

          <Popover
            placement="bottom"
            title={'Файлы'}
            content={
              <div>
                {fileList.map(({ fileName, link, fileType }, index: number) => (
                  <File
                    key={index}
                    index={index}
                    fileLink={link}
                    typeFile={fileType}
                    nameFile={fileName}
                  />
                ))}
                {fileList.length <= 0 && 'Файлов нет'}
              </div>
            }
            trigger="click"
          >
            <div className="icon-files_folder"></div>
          </Popover>
        </>
      </div>
    </div>
  )
}

export default Top
