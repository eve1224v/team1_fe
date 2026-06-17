import signupSuccess from "../../../../../assets/signup_success.svg";

import "./SignupSuccessPage.css";

function SignupSuccessPage() {
  return (
    <div className="signup-success-page">
      <img
        src={signupSuccess}
        alt="회원가입 성공"
        className="success-image"
      />

      <h1>회원가입 완료!</h1>
      <p>나침반과 함께 광운대학교를 탐험해보세요.</p>
    </div>
  );
}

export default SignupSuccessPage;