import React, { useCallback, useState } from 'react'
import { Upload, message } from 'antd'
import { IChatFileUploadProps } from './Types'
import { RcCustomRequestOptions, UploadFile, RcFile } from 'antd/lib/upload/interface'
import nextCookie from 'next-cookies'

const { jwt_token } = nextCookie('ctx')

const { Dragger } = Upload

const ChatFileUpload: React.FC<IChatFileUploadProps> = ({
  setIsFileUploadModalOpen,
  room,
  sendMessage,
}): JSX.Element => {
  const [fileList, setFileList] = useState<RcFile[]>([])

  const handleFileListChange = useCallback(({ file, onError }: RcCustomRequestOptions) => {
    try {
      if (file.size > 2097152) throw Error('Too large')
      setFileList((prev) => [...prev, file])
    } catch (e) {
      message.error(`File ${file.name} is too large`)
      onError(e)
    }
  }, [])
  const handleFileRemove = useCallback((file: UploadFile) => {
    setFileList((prev) => [...prev.filter((f) => f.uid !== file.uid)])
  }, [])
  const handleSubmit = useCallback(async () => {
    const formData = new FormData()
    formData.append('roomId', room)
    fileList.forEach((file) => formData.append(file.name, file))
    const url = `${process.env.NEXT_PUBLIC_API}api/sendFile`
    try {
      const fileUploadResponse = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${jwt_token}`,
        },
        body: formData,
      })
      const files = await fileUploadResponse.json()

      sendMessage(JSON.stringify(files), 'file')
    } catch (e) {
      message.error('Error due file(s) uploading')
    }
  }, [fileList])
  return (
    <div
      className="chat-page-upload"
      role="presentation"
      id="modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsFileUploadModalOpen(false)
      }}
    >
      <div className="chat-page-upload__modal">
        <div className="chat-page-upload__modal__header">
          <div className="chat-page-upload__modal__header-icon icon-folder-open"></div>
          <h2 className="chat-page-upload__modal__header-title">Завантажте файли</h2>
          <h3 className="chat-page-upload__modal__header-subtitle">Перетягніть сюди файл</h3>
        </div>
        <Dragger
          className="chat-page-upload__modal__dragger"
          name="file"
          fileList={fileList}
          multiple={true}
          customRequest={handleFileListChange}
          onRemove={handleFileRemove}
        >
          <div className="chat-page-upload__modal__dragger-icon icon-cloud"></div>
          <p className="chat-page-upload__modal__dragger-text">.JPG .PNG .GIF</p>
          <p className="chat-page-upload__modal__dragger-text">Перетягніть файли або </p>
          <p className="chat-page-upload__modal__dragger-text chat-page-upload__modal__dragger-text-blue">
            натисніть тут
          </p>
        </Dragger>
        <div className="chat-page-upload__modal__buttons">
          <button className="chat-page-upload__modal__buttons-button chat-page-upload__modal__buttons-button-outlined">
            Скасувати
          </button>
          <button className="chat-page-upload__modal__buttons-button" onClick={handleSubmit}>
            Завантажити
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatFileUpload
