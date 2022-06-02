import { Fragment,useState,useContext } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import Form from "../components/signin";
import {SignUp,Browse} from '../constants/routes';
import {FirebaseContext} from '../context/firebase';
import { useHistory } from "react-router-dom";

export default function SignIn(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');
    const[isValid,setIsValid] = useState(true);

    const {firebase} = useContext(FirebaseContext);
    const history = useHistory();
    const passwordChangeHandler=(e)=>{
        setPassword(e.target.value)
        if(email != '' && password != '' && password.trim().length>5){
            setIsValid(true);
        }else{
            setIsValid(false);
        }  
    }


    const FormSubmitHandler=(e)=>{
        e.preventDefault();
        return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(Browse);
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
        setError(error.message);
      });
    }

    return <Fragment>
        <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={FormSubmitHandler} method="POST">
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={!isValid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
    </Fragment>
}