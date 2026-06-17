import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";

import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

import { ROUTES } from "../../../../../router/routes.constant";

import "./EmailForm.css";

function EmailForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleNext = () => {
    if (!email.includes("@")) {
      setIsError(true);
      return;
    }

    navigate(ROUTES.SIGNUP_PASSWORD);
  };

  return (
    <div className="email-form">
      <Input
        type="email"
        placeholder="광운대학교 이메일을 입력해주세요."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsError(false);
        }}
      />

      {isError && (
        <div className="error-box">
          <img src={error} alt="에러" />
          <span>올바른 이메일 형식이 아닙니다.</span>
        </div>
      )}

      <Button text="다음" onClick={handleNext} />
    </div>
  );
}

export default EmailForm;