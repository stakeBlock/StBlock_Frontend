import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LockUpTitle from "../lockup/LockUpTitle";
import LockUp from "../lockup/LockUp";
import LockUpReward from "../lockup/LockUpReward";
import LockUpManual from "../lockup/LockUpManual";
import AddToken from "../common/AddToken";
import Footer from "../common/Footer";
import PendingBox from "../modal/toast/PendingBox";
import ModalBox from "../modal/toast/ModalBox";

const LockUpLayout = () => {
  const [isProcess, setIsProcess] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (isProcess) {
      setTimeout(() => {
        setIsProcess(false);
      }, 2000);
    }
  }, [isProcess]);

  return (
    <>
      {pending && <PendingBox />}
      {isProcess && <ModalBox />}
      <StWrapper>
        <LockUpTitle />
        <LockUp setPending={setPending} setIsProcess={setIsProcess} />
        <LockUpReward />
        <LockUpManual />
        <AddToken />
        <Footer />
      </StWrapper>
    </>
  );
};

export default LockUpLayout;

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
