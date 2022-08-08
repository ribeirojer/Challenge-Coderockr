import { Input, Button, Subtitle, Title, TextArea, WrapperButton, SvgButton } from '../styles/ModalStyle';

type Props = {}

const ModalContent = (props: Props) => {
  return (
    <>
        <Title><span>Contact</span></Title>
        <Subtitle>Name</Subtitle>
        <Input type="text" placeholder='Fill your full name'/>
        <Subtitle>E-mail</Subtitle>
        <Input type="text" placeholder='Fill a valid e-mail'/>
        <Subtitle>Phone</Subtitle>
        <Input type="text" placeholder='Fill your phone'/>
        <Subtitle>Post</Subtitle>
        <TextArea placeholder='Hello...'></TextArea>
        <WrapperButton>
          <Button>
            <SvgButton width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18L21 9L0 0V7L15 9L0 11V18Z" fill="white"/>
            </SvgButton>
            Submit
          </Button>
        </WrapperButton>
    </>
  )
}

export default ModalContent;