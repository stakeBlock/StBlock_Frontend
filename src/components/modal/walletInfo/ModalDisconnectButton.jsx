import { useRecoilState, useResetRecoilState } from "recoil";
import { styled } from "styled-components";
import { modalAtom } from "../../../store/modal";
import { accountAtom } from "../../../store/account";
import { networkAtom } from "../../../store/network";
import { walletAtom } from "../../../store/wallet";

const ModalDisconnectButton = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const resetAccount = useResetRecoilState(accountAtom);
  const resetNetwork = useResetRecoilState(networkAtom);
  const resetWalletType = useResetRecoilState(walletAtom);

  const handleCloseModal = () => {
    setModal({ ...modal, isWalletInfoOpen: false });
  };
  const disconnect = async () => {
    // reset recoil state
    await resetAccount();
    await resetNetwork();
    await resetWalletType();
  };

  return (
    <StDisconnectButton
      onClick={async () => {
        await disconnect();
        handleCloseModal();
      }}
    >
      Disconnect
    </StDisconnectButton>
  );
};

export default ModalDisconnectButton;

const StDisconnectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31.7rem;
  height: 3.6rem;
  margin-top: 2.8rem;
  border-radius: 0.8rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.Stblock_Color_Black};
  color: ${({ theme }) => theme.colors.Stblock_Color_Light_Blue_Gray};
  ${({ theme }) => theme.fonts.Stblock_SubText_2};
`;
