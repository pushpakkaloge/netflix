import {Container,List,Title,Name,Item,Picture} from './styles/profiles';



export default function Profiles({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Profiles.Name = function ProfilesName({children,...restProps}){
    return <Name {...restProps}>{children}</Name>
}


Profiles.Title = function profilesTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Profiles.User = function profilesUser({children,...restProps}){
    return <Item {...restProps}>{children}</Item>
}

Profiles.List = function profilesList({children,...restProps}){
    return <List {...restProps}>{children}</List>
}

Profiles.Picture = function profilesPicture({children,src,...restProps}){
    return <Picture {...restProps} src={src? `/images/users/${src}.png`:'/images/misc/loading.gif'}>{children}</Picture>
}