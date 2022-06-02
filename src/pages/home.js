import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import  OptForm  from "../components/opt-form";
import Feature from '../components/feature';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
            <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            <Feature.SubTitle>Ready to watch? Enter your email to create or restart your membership.</Feature.SubTitle>
        
            <OptForm>
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Get Started</OptForm.Button>
          <OptForm.Break/>
          <OptForm.Text>
            Ready to Watch ? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
        </Feature>

        
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
