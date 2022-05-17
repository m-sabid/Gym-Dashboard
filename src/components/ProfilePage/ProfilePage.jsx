import React from "react";
import FormSec from "./Form/FormSec";
import "./Profile.css";

const ProfilePage = () => {
  return (
    <>
      <div className="profileHeader">
        <div>
          <div className="manegerImgDiv">
            <img
              id="manager_profilePic"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="name_dis">
            <div className="fname d-flex">
              <p>First Name</p> &#160; <p>Last Name </p>
            </div>
            <div className="post">Manager</div>
          </div>
        </div>
        {/* Acces Level: */}
        <div className="accSec">
          <div className="acclvl">
            <p>Acces Level:</p>
            <div className="btnSec">
              <button id="accBtn">Equipment</button>
              <button id="accBtn">Trianer</button>
              <button id="accBtn">Class</button>
            </div>
          </div>
        </div>
      </div>
      <FormSec />
    </>
  );
};

export default ProfilePage;
