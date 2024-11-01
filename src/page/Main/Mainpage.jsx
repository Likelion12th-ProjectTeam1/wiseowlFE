import styled from "styled-components";
import Header from "./components/header";
import Map from "./components/map";
import DashBoard from "./components/dashboard";
import NoticeMain from "./components/notices";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9F9F9;
    padding: 10px;
`;

const Section = styled.div`
    margin-bottom: 20px; /* 각 섹션 사이의 간격을 설정 */
    
    &:last-child {
        margin-bottom: 0; /* 마지막 요소에는 간격을 주지 않음 */
    }
`;

export default function Main(){
    return(
        <MainContainer>
            <Section><Header /></Section>
            <Section><DashBoard/></Section>
            <Section><Map/></Section>
            <Section><NoticeMain /></Section>
        </MainContainer>
    );
}
