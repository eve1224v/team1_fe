import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";

import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";

import { ROUTES } from "../../../../../router/routes.constant";

import "./NicknameForm.css";

function NicknameForm() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (nickname.trim().length < 2) {
      setIsError(true);
      return;
    }

    navigate(ROUTES.SIGNUP_SUCCESS);
  };

  return (
    <div className="nickname-form">
      <Input
        type="text"
        placeholder="닉네임을 입력해주세요."
        value={nickname}
        onChange={(e) => {
          setNickname(e.target.value);
          setIsError(false);
        }}
      />

      {isError && (
        <div className="error-box">
          <img src={error} alt="에러" />
          <span>닉네임은 2자 이상 입력해주세요.</span>
        </div>
      )}

      <Button text="완료" onClick={handleSubmit} />
    </div>
  );
}

export default NicknameForm;