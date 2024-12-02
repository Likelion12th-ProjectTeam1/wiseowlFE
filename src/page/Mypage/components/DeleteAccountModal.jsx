import React, { useState } from "react";
import styled from "styled-components";
import axiosInstance from "../../../auth/axiosInstance";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 255px;
  height: 130px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: "Inter", Arial, sans-serif;

  p {
    margin-top: 10px;
    font-size: 16px;
  }
`;

const ModalButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #5d96e8;
    color: white;
    cursor: pointer;
  }
  &:nth-child(2) {
    background-color: #e0e0e0;
    color: black;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AccountDeletionComponent = ({ onClose }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirmDeletion = async () => {
    setIsDeleting(true); // 삭제 진행 상태 업데이트
    try {
      console.log("탈퇴 API 호출 중...");

      // API 요청 (DELETE 메서드)
      await axiosInstance.delete("/api/accounts/withdraw/");

      // 탈퇴 성공 후 처리
      alert("회원탈퇴가 완료되었습니다.");
      window.location.href = "/"; // 루트 경로로 리디렉션
    } catch (error) {
      console.error("탈퇴 실패:", error);
      alert("탈퇴 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsDeleting(false); // 상태 초기화
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // 모달 바깥 클릭 시 모달 닫기
    }
  };

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      <ModalContent>
        <p>정말로 탈퇴하시겠습니까?</p>
        <div>
          <ModalButton onClick={onClose} disabled={isDeleting}>
            취소하기
          </ModalButton>
          <ModalButton onClick={handleConfirmDeletion} disabled={isDeleting}>
            탈퇴하기
          </ModalButton>
        </div>
      </ModalContent>
    </ModalBackground>
  );
};

export default AccountDeletionComponent;
