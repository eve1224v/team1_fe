import Header from "../../../components/common/Header/Header";

import PasswordForm from "../../../components/signup/PasswordForm/PasswordForm";

import "./PasswordSettingPage.css";

function PasswordSettingPage() {
  return (
    <div className="signup-page">
      <Header
        title="비밀번호 설정"
        subtitle="비밀번호를 입력해주세요."
      />

      <PasswordForm />
    </div>
  );
}

export default PasswordSettingPage;