import  Header  from "../components/header";
import Profiles from "../components/profiles";
import {HOME} from '../constants/routes'
import logo from '../logo.svg';

export default function SelectProfileContainer({user,setProfile}){
    return( <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={HOME} src={logo}/>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's Watching ?</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={()=>setProfile({displayName:user,photoURL:user.photoURL})}
                  data-testid = 'user-profile'  
                >
                <Profiles.Picture src={user.photoURL}></Profiles.Picture>
                <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>)
}