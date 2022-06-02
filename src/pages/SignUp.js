import { Fragment,useContext,useState } from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import Form from "../components/signin";
import {Browse, SignIn} from '../constants/routes';
import { useHistory } from "react-router-dom";
import {FirebaseContext} from '../context/firebase';

export default function SignUp(){
    const history  = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[fname,setFname] = useState('');
    const[Error,setError] = useState('');
    const[isValid,setIsValid] = useState(true);


    const FormSubmitHandler=(e)=>{
        e.preventDefault();

        return firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then((result)=>result.user.updateProfile({
            displayName:fname,
            photoURL: Math.floor(Math.random()*5)+1
        })
        .then(()=>{
            history.push(Browse);
        }))
        .catch((error)=>{
            setFname('');
            setEmail('');
            setPassword('');
            setError(error.message);
        })
    }
    return (<>
    <HeaderContainer>
    <Form>
          <Form.Title>Sign Up</Form.Title>
          {Error && <Form.Error>{Error}</Form.Error>}

          <Form.Base onSubmit={FormSubmitHandler} method="POST">
            <Form.Input
              placeholder="First name"
              value={fname}
              onChange={({ target }) => setFname(target.value)}
            />
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
            <Form.Submit disabled='' type="submit" data-testid="sign-up">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
    </HeaderContainer>
    <FooterContainer></FooterContainer>
</>
)
}