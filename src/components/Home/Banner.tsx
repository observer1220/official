import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  50% { border-color: transparent; }
`;

const TypingText = styled.h1`
  font-size: 2.5rem;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #fff;
  width: 0;
  animation: ${typing} 4s steps(40, end), ${blink} 0.5s step-end infinite; // 打字機效果
  animation-fill-mode: forwards;
`;

/** 打字機效果動畫 */
const Banner: React.FC = () => {
  return (
    <TypingText>
      打造您的專屬形象網站 | 購物車網站 | 中英文翻譯 | 音檔逐字稿 //{" "}
    </TypingText>
  );
};

export default Banner;
