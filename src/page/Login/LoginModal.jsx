import React, { useState } from 'react';
import styled from 'styled-components';
import axiosInstance from '../../auth/axiosInstance';
import { Arrow, CheckBox } from '../../img/Logo';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    width: 390px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    background-color: #FFFFFF;
    padding: 0px;
    padding-bottom: 100px;
`;

const Title = styled.h1`
    font-family: Inter;
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 22px;
    text-align: left;
    color: #000000;
    font-weight: 400;
    margin-left: 20px;
`;

const InfoText = styled.p`
    font-size: 9pt;
    color: #A3A3A3;
    margin-bottom: 30px;
    font-weight: 100; 
    font-family: Inter;
    margin-left: 20px;
    font-weight: 500;
`;

const AgreementContainer = styled.div`
    margin-bottom: 30px;
`;

const AgreementTitle = styled.h2`
    font-size: 13px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    cursor: pointer;
    font-family: Inter;
    margin-left: 19px;
`;

const Divider = styled.div`
    height: 1px;
    background-color: #ccc;
    margin-bottom: 10px;
    width: 90%;
    margin-left: 20px;
`;

const AgreementItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 390px;
    padding: 12px 0;
    cursor: pointer;
    
`;


const ArrowContainer = styled.div`
    margin-left: auto;
    padding-right: 10px;
    display: flex;
    align-items: center;
    transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
`;

const StyledArrow = styled(Arrow)`
    fill: #A3A3A3;
    transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
`;
const CheckboxLabel = styled.span`
    margin-left: 13px;
    font-size: 13px;
    font-family: Inter;
    margin-left: 20px;
`;

const AgreementContent = styled.div`
    background-color: #FFFFFF;
    padding: 10px;
    margin-top: 5px;
    font-size: 12px;
    line-height: 1.5;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    margin-left: 20px;
`;

const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 390px;
    margin-top: 90px;
`;

const SubmitButton = styled.button`
    padding: 10px 100px;
    background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
    color: ${props => props.disabled ? '#959595' : '#FFFFFF'};
    border: none;
    border-radius: 5px;
    font-size: 13.39px;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;

    &:hover {
        background-color: ${props => props.disabled ? '#ECECEC' : '#5D96E8'};
    }
`;

const StyledCheckBox = styled(CheckBox)`
    fill: ${props => props.checked ? '#5D96E8' : '#D1D1D1'};
`;

const agreementContents = [
    `제1조(목적)\n본 약관은 와이즈올(이하 "서비스")이 제공하는 모든 서비스(이하 "서비스"라 함)의 이용과 관련하여 서비스 제공자와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.\n
    제2조(정의)\n"서비스"란 와이즈올이 제공하는 모든 온라인 플랫폼 및 관련 부가 서비스를 의미합니다. "이용자"란 본 약관에 따라 서비스에 접속하여 서비스를 이용하는 모든 회원 및 비회원을 말합니다. "회원"이란 서비스에 회원가입을 하고 서비스를 지속적으로 이용할 수 있는 자를 의미합니다. "비회원"이란 회원가입 없이 서비스를 이용하는 자를 의미합니다.\n
    제3조(약관의 게시 및 개정)\n본 약관은 서비스 초기 화면 또는 연결 화면에 게시됩니다. 서비스는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다. 개정된 약관은 적용일자 및 개정 사유를 명시하여 공지하며, 공지 후 7일 이내에 이용자가 이의를 제기하지 않으면 동의한 것으로 간주합니다.\n
    제4조(서비스 이용 계약 체결)\n이용계약은 이용자가 본 약관에 동의하고 서비스가 이를 승낙함으로써 체결됩니다. 서비스는 다음의 경우 이용신청을 거절하거나 사후에 이용계약을 해지할 수 있습니다:
    - 허위 정보를 제공한 경우
    - 타인의 명의를 도용한 경우
    - 기타 관련 법령 및 본 약관을 위반한 경우\n
    제5조(서비스 제공 및 변경)\n서비스는 이용자에게 아래와 같은 기능을 제공합니다:
    - 캠퍼스 지도 및 학사 정보 제공
    - 졸업 요건 관리 및 관련 정보 제공
    - 커뮤니티 및 알림 서비스 제공\n
    제6조(서비스 이용 제한)\n서비스는 다음의 경우 이용을 제한하거나 중단할 수 있습니다:
    - 시스템 유지보수 및 점검이 필요한 경우
    - 천재지변, 비상사태 등 불가항력적 사유가 있는 경우\n
    제7조(이용자의 의무)\n이용자는 본 약관 및 관련 법령을 준수해야 합니다. 이용자는 다음 행위를 해서는 안 됩니다:
    - 타인의 개인정보 도용
    - 서비스 내 게시물의 무단 복제 및 배포
    - 서비스의 정상적 운영을 방해하는 행위\n
    제8조(개인정보 보호)\n서비스는 개인정보 보호법 등 관련 법령에 따라 이용자의 개인정보를 보호하기 위해 최선을 다하며, 개인정보 처리 방침은 별도로 공지합니다.\n
    제9조(면책 조항)\n서비스는 천재지변, 서버 장애, 네트워크 오류 등 서비스 제공이 불가능한 경우 책임을 지지 않습니다. 이용자의 부주의로 인해 발생한 손해에 대해 서비스는 책임을 지지 않습니다.\n
    제10조(분쟁 해결)\n본 약관과 관련하여 발생하는 모든 분쟁은 대한민국 법령에 따라 해결합니다. 관할법원은 서비스 제공자의 주소지를 관할하는 법원으로 합니다.`,
    
    `와이즈올(이하 "서비스")은 서비스 제공을 위해 아래와 같이 이용자의 개인정보를 수집·이용하고자 합니다. 이용자는 본 동의서를 읽고 충분히 이해한 후 동의 여부를 결정할 수 있습니다.\n
    1. 개인정보 수집 항목\n와이즈올은 서비스 제공을 위해 아래의 정보를 필수적으로 수집합니다. 이름과 연락처(이메일 주소 및 휴대전화 번호)는 서비스 이용자 식별과 중요한 안내 사항 전달을 위해 사용되며, 학번과 학교명은 캠퍼스 맞춤형 서비스 제공을 위해 필요합니다. 해당 정보는 서비스 제공 및 이용자의 편의 향상을 목적으로만 활용됩니다.\n
    2. 개인정보 이용 목적\n와이즈올은 수집된 개인정보를 다음과 같은 목적으로 사용합니다:
    - 학사 관련 정보 제공
    - 캠퍼스 알림 서비스 제공
    - 회원 가입 및 서비스 이용 인증\n
    3. 개인정보 보유 및 이용 기간\n와이즈올은 이용자의 개인정보를 이용자의 탈퇴 시까지 보유하며, 법적 요구사항에 따라 보관 기간을 유지합니다. 탈퇴 후 개인정보는 즉시 파기됩니다.\n
    4. 개인정보 처리 위탁\n와이즈올은 개인정보 처리 업무의 일부를 외부 업체에 위탁할 수 있습니다. 이 경우 위탁 업체의 정보 및 위탁 내용은 별도로 고지합니다.\n
    5. 개인정보 보호\n와이즈올은 이용자의 개인정보를 보호하기 위해 노력하며, 이에 대한 구체적인 보호 방침은 개인정보 처리 방침에 명시되어 있습니다.`,

    `본 알림 서비스 이용약관은 와이즈올에서 제공하는 알림 서비스를 이용함에 있어 적용됩니다.\n
    1. 서비스 제공\n알림 서비스는 주로 학사 관련 정보 및 기타 중요 알림을 이용자에게 전달하는 서비스입니다.\n
    2. 서비스 이용\n이용자는 알림을 원하는 항목을 선택하여 해당 알림을 수신할 수 있습니다. 알림은 이메일 또는 SMS를 통해 제공되며, 서비스 이용 중 변경이 있을 경우 이에 대해 공지합니다.\n
    3. 수신 동의\n알림 서비스는 선택사항이며, 이용자는 언제든지 수신 동의를 변경할 수 있습니다. 수신 동의는 각 설정에서 쉽게 변경 가능합니다.\n
    4. 서비스 제공 중단\n서비스는 시스템 문제, 법적 요구사항 등 다양한 이유로 일시적으로 중단될 수 있습니다.\n
    5. 개인정보 보호\n알림 서비스에서 수집되는 개인정보는 서비스 제공을 위한 최소한의 정보에 한하며, 그 외에는 어떠한 용도로도 사용되지 않습니다.`,

    `와이즈올은 이용자에게 유용한 서비스 정보와 혜택을 제공하기 위해 E-mail 및 SMS를 통해 광고성 정보를 발송할 수 있습니다. 본 동의는 선택 사항이며, 동의하지 않더라도 기본 서비스 이용에는 제한이 없습니다.\n
    1. 광고성 정보의 목적\n와이즈올은 이벤트, 프로모션, 신규 서비스 안내 및 캠퍼스 관련 혜택 정보를 전달하기 위해 광고성 정보를 발송합니다. 이를 통해 이용자는 서비스와 관련된 최신 정보를 빠르게 받아볼 수 있습니다.\n
    2. 수집 및 이용 항목\n광고성 정보 발송을 위해 이름, 이메일 주소, 휴대전화 번호를 수집하며, 동의한 이용자에 한하여 활용됩니다.\n
    3. 보유 및 이용 기간\n수집된 정보는 광고성 정보 수신 동의가 유지되는 동안 보유되며, 이용자가 동의를 철회하거나 회원 탈퇴 시 즉시 파기됩니다.\n
    4. 동의 철회 방법\n이용자는 언제든지 광고성 정보 수신에 대한 동의를 철회할 수 있습니다. 철회는 이메일 하단의 "수신 거부" 링크를 클릭하거나, SMS 안내에 따라 거부 의사를 표시하거나, 서비스 설정 페이지 또는 고객 지원을 통해 요청할 수 있습니다.\n
    5. 유의사항\n광고성 정보 수신에 동의하지 않을 경우, 특정 이벤트 참여 및 혜택 제공이 제한될 수 있습니다. 다만, 이용자는 동의 여부를 언제든 변경할 수 있으며, 철회 이후에는 광고성 정보가 발송되지 않습니다.`
];



// \n을 <br>로 변환하여 HTML로 삽입
const formattedContents = agreementContents.map(content => content.replace(/\n/g, "<br />"));

export default function LoginModal() {
    const [checkedList, setCheckedList] = useState(Array(5).fill(false));
    const [openSections, setOpenSections] = useState(Array(4).fill(false)); // 각 섹션의 열림/닫힘 상태
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleCheckboxClick = (index) => {
        const newCheckedList = [...checkedList];
        
        if (index === 0) {
            const newValue = !newCheckedList[0];
            setCheckedList(Array(5).fill(newValue));
        } else {
            newCheckedList[index] = !newCheckedList[index];
            const allChecked = newCheckedList.slice(1).every(checked => checked);
            newCheckedList[0] = allChecked;
            setCheckedList(newCheckedList);
        }
    };

    const toggleSection = (index) => {
        const newOpenSections = [...openSections];
        newOpenSections[index] = !newOpenSections[index];
        setOpenSections(newOpenSections);
    };

    const handleSubmit = async () => {
        const profileAgreement = checkedList[4];
        const data = { profile_agreement: profileAgreement };

        try {
            const response = await axiosInstance.post('/api/accounts/agree/', data);
            if (response.status === 200) navigate('/info');
            else setErrorMessage('서버 오류: 약관 동의가 처리되지 않았습니다.');
        } catch (error) {
            setErrorMessage(error.response.data.message, '서버에 연결할 수 없습니다. 나중에 다시 시도해주세요.');
        }
    };

    const isAllRequiredChecked = checkedList.slice(1, 4).every(checked => checked);

    return (
        <PageContainer>
            <Title>
                와이즈올<br />
                서비스약관에 동의해주세요.
            </Title>
            <InfoText>
                와이즈올 서비스를 사용하기 위해서는 아래의 <br />
                약관 동의가 필요합니다.
            </InfoText>

            <AgreementContainer>
                <AgreementTitle onClick={() => handleCheckboxClick(0)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StyledCheckBox checked={checkedList[0]} />
                        <CheckboxLabel>모두 동의합니다.</CheckboxLabel>
                    </div>
                </AgreementTitle>
                <Divider />
                
             
                {['와이즈올 계정 약관 (필수)', '개인정보 수집 및 이용 동의 (필수)', '알림 서비스 이용약관 동의 (필수)', 'E-mail 및 SMS 광고성 정보 수신 동의 (선택)'].map((text, index) => (
                    <div key={index}>
                        <AgreementItem>
                            <AgreementTitle onClick={() => handleCheckboxClick(index + 1)}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <StyledCheckBox checked={checkedList[index + 1]} />
                              
                                <CheckboxLabel>{text}</CheckboxLabel>
                                
                               
                            </div>
                            </AgreementTitle>
                            <ArrowContainer isOpen={openSections[index]} onClick={(e) => { e.stopPropagation(); toggleSection(index); }}>
                                <StyledArrow />
                            </ArrowContainer>
                        </AgreementItem>
                        <AgreementContent isOpen={openSections[index]}>
                            <div dangerouslySetInnerHTML={{ __html: formattedContents[index] }} />
                        </AgreementContent>
                    </div>
                ))}
            </AgreementContainer>

            {errorMessage && (
                <div style={{ color: 'red', fontSize: '14px', marginTop: '20px' }}>
                    {errorMessage}
                </div>
            )}

            <SubmitButtonContainer>
                <SubmitButton onClick={handleSubmit} disabled={!isAllRequiredChecked}>다음</SubmitButton>
            </SubmitButtonContainer>
        </PageContainer>
    );
}
