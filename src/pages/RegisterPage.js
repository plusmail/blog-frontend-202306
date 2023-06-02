import AuthForm from "../components/AuthForm";
import AuthTemplate from "../components/AuthTemplate";

const RegisterPage= ()=>{

    return(
        <>
        <AuthTemplate>
            <AuthForm type="register"/>
        </AuthTemplate>
        </>
    )
};

export default RegisterPage;