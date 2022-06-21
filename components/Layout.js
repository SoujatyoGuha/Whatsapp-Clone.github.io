import styled from 'styled-components';
import Sidebar from './Sidebar';

const Layout= ({children}) => {
  return(
    <div>
      <Wrapper>
        <Container>
           <Sidebar />
           {children}
        </Container>
      </Wrapper>
    </div>
  )
}

export default Layout

const Wrapper = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 height:100vh;
`
const Container = styled.div`
 display:flex;
 width:75vw;
 margin:auto;
 margin-top:20px;
 margin-bottom:20px;
 box-shadow: 0 0 1rem 0.05rem rgba(0, 0, 0, 0.2);
 height:100vh;

 @media (max-width: 1440px;) {
   width:100%;
   height:100vh;
   margin:0;
 }

`
