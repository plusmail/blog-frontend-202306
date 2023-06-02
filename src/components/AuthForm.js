import styled from "styled-components";
import { Link } from "react-router-dom";
import palette from "../lib/styles/palette";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import StyledInput from "../components/styled/StyledInput";
const AuthFormBlock = styled.div``;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type }) => {
  const text = textMap[type];

  return (
    <>
      <AuthFormBlock>
        <div>{text}</div>
        <form>
          <TextField
            name={"username"}
            id="usename"
            label="사용자명"
            variant="outlined"
          />
          <br />

          <TextField
            size="small"
            name="password"
            required={true}
            type="password"
            label={"Password"}
            floatingLabelText="Password"
            inputProps={{
              style: {
                height: "25px",
              },
            }}
          />

          {type === "register" && (
            <TextField
              name={"repassword"}
              label="Re-password"
              type={"password"}
            />
          )}

          <Button>{text}</Button>
        </form>
        <Footer>
          {type === "login" ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </AuthFormBlock>
    </>
  );
};

export default AuthForm;
