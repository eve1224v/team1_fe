import Header from "../../../components/common/Header/Header";

import NicknameForm from "../../../components/signup/NicknameForm/NicknameForm";

import "./NicknameSettingPage.css";

function NicknameSettingPage() {
  return (
    <div className="signup-page">
      <Header
        title="닉네임 설정"
        subtitle="사용할 닉네임을 입력해주세요."
      />

      <NicknameForm />
    </div>
  );
}

export default NicknameSettingPage;