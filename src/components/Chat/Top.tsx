import React from 'react'

//antd
import { Popover } from 'antd'
//types
import { TopProps } from './Types'
//components
import File from './FileComponent'

const Top: React.FC<TopProps> = ({ rooms, activeDialog, fileList }) => {
  return (
    <div className="messages-window__top">
      {rooms.map(({ id, collocutorName, collocutorSurname, collocutorOnline }) => (
        <div key={id} className="messages-window__collocutor-info">
          {activeDialog?.dialog === id ? (
            <>
              <p className="messages-window__collocutor-name">
                {collocutorName}
                {` `}
                {collocutorSurname}
              </p>
              <p className="messages-window__online-status">
                {collocutorOnline ? 'Oнлайн' : 'Офлайн'}
              </p>
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
          ) : undefined}
        </div>
      ))}
    </div>
  )
}

export default Top
