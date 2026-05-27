import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";

import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

import { ROUTES } from "../../../../../router/routes.constant";

import "./PasswordForm.css";

function PasswordForm() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleNext = () => {
    if (password.length < 8) {
      setIsError(true);
      return;
    }

    navigate(ROUTES.SIGNUP_NICKNAME);
  };

  return (
    <div className="password-form">
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setIsError(false);
        }}
      />

      {isError && (
        <div className="error-box">
          <img src={error} alt="에러" />
          <span>비밀번호는 8자 이상이어야 합니다.</span>
        </div>
      )}

      <Button text="다음" onClick={handleNext} />
    </div>
  );
}

export default PasswordForm;