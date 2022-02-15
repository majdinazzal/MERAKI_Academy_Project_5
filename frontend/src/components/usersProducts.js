import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import UserProducts from "./userProductRender";

const ProfileModal = () => {
  const [modalShower, setModalShower] = useState(false);
  const switchModalTrue = () => {
    setModalShower(true);
  };
  const switchModalfalse = () => {
    setModalShower(false);
  };
  return (
    <div>
      <button onClick={switchModalTrue}>ShowProducts</button>
      <Modal isOpen={modalShower}>
        <button onClick={switchModalfalse}>close</button>
        <br /> <br />
        <UserProducts />{" "}
      </Modal>
    </div>
  );
};
export default ProfileModal;
