import React from 'react'
import { useTranslation } from "react-i18next";
import { BiUserCircle, BiArrowBack } from "react-icons/bi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";


const FormCliente = ({form, handleSubmit, setSecondForm}) => {
    const [t, i18n] = useTranslation("global");
  return (
    <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label-icon">
                  <BiUserCircle className="icon" />
                </label>
                <input
                name="from_name"
               
                  type="text"
                  placeholder={t("data.name")}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <BiUserCircle className="icon" />
                </label>
                <input
                 name="from_name"
                 
                  type="text"
                  placeholder={t("data.last-name")}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <MdOutlinePhoneIphone className="icon" />
                </label>
                <input
                  type="text"
                  placeholder={t("data.phone")}
                  className="input-field"
                  name="user_phone"
                  
                />
              </div>
              <div className="form-group">
                <label className="label-icon">
                  <HiOutlineMail className="icon" />
                </label>
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="input-field"
                  name="email_id"
                  
                />
              </div>

              <div className="form-group">
                <textarea
                  rows="8"
                  style={{ resize: "none", width: "80%" }}
                  className="input-field"
                  placeholder={t("data.message")}
                  name="message"
                  
                />
              </div>
              <div className="form-group">
                <button
                  className="custom-button"
                  id="btn2"
                  onClick={() => setSecondForm(false)}
                >
                  <span className="circle" aria-hidden="true">
                    <BiArrowBack
                      style={{ fontSize: "24px", marginTop: "12px" }}
                      className="iconback"
                    />
                  </span>
                  <span className="button-text">{t("formPasaje.volver")}</span>
                </button>

                <button className="learn-more" id="btn">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text" type="submit" value="Send">{t("formPasaje.enviar")}</span>
                </button>
              </div>
            </form>
  )
}

export default FormCliente