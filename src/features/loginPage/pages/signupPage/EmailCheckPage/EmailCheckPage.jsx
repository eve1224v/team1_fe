import Header from "../../../components/common/Header/Header";

import EmailForm from "../../../components/signup/EmailForm/EmailForm";

import "./EmailCheckPage.css";

function EmailCheckPage() {
  return (
    <div className="signup-page">
      <Header
        title="이메일 인증"
        subtitle="광운대학교 이메일을 입력해주세요."
      />

      <EmailForm />
    </div>
  );
}

export default EmailCheckPage;