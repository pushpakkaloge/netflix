import Header from "../components/header";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({children}){
return(
    <Header>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} alt="Netflix-logo" src={logo} />
            <Header.Button to={ROUTES.SignIn}>Sign In</Header.Button>
        </Header.Frame>
        {children}
    </Header>
)
}