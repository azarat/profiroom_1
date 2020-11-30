import React, { useCallback } from 'react'

//emoji
import { Picker } from 'emoji-mart'

//types
import { FormProps } from './Types'

//antd
import { SmileOutlined } from '@ant-design/icons'

const Form: React.FC<FormProps> = ({
  handleSubmit,
  inputValue,
  handleChange,
  smilesBox,
  openSmiles,
  addEmoji,
  handleImageChange,
  openEmoji,
  preview,
}) => {
  const handleEnter = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key == 'Enter') {
        handleSubmit(e)
      }
    },
    [inputValue]
  )
  return (
    <div className="messages-window__form-container">
      <form className="messages-window__form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Сообщение.."
          value={inputValue}
          className="messages-window__input"
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
      </form>
      <div className="messages-window__tools" ref={smilesBox}>
        <div
          className={
            openSmiles
              ? 'messages-window__emoji-container-open'
              : 'messages-window__emoji-container-close'
          }
        >
          <Picker onSelect={addEmoji} color="#397ae7" style={{ width: '100%' }} />
        </div>
        <div className="messages-window__tools-left">
          <form encType="multipart/form-data">
            <label htmlFor="file-upload" className="messages-window__file-upload">
              <div className="icon-file"></div>
            </label>
            <input
              id="file-upload"
              className="fileInput"
              type="file"
              onChange={(e) => handleImageChange(e)}
              style={{ display: 'none' }}
            />
          </form>
          <div className="messages-window__emoji-smiles-button">
            <SmileOutlined onClick={openEmoji} />
          </div>
        </div>
        <button
          className="icon-send-message messages-window__submit-button"
          onClick={handleSubmit}
        ></button>
        {preview && (
          <img src={preview} alt="preview" className="messages-window__upload-file-preview" />
        )}
      </div>
    </div>
  )
}

export default Form
