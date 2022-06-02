import {Container, Inner, Item, Title, Pane, SubTitle, Image} from './styles/jumbotron';

const Jumbotron = ({children, direction='row', ...restProps})=>{
    return (
    <Item {...restProps}>
        <Inner direction={direction}>
            {children}
        </Inner>
    </Item>
    )
}


Jumbotron.Container = function JumbotronContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title = function JumbotronTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.Pane = function JumbotronPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronImage({children,...restProps}){
    return <Image {...restProps} />;
}

export default Jumbotron;

