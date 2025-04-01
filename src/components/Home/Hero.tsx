import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// 視差滾動背景容器
const ParallaxContainer = styled.div.attrs<{ offsetY: number }>((props) => ({
  style: {
    transform: `translateY(${props.offsetY * 0.5}px)`,
  },
}))`
  position: relative;
  overflow: hidden;
  height: 100vh;
  background: url("./howls-castle.jpg") no-repeat center center fixed;
  background-size: cover;
  transition: transform 0.2s ease-in-out;
`;

// 打字機效果動畫
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
  animation: ${typing} 4s steps(40, end), ${blink} 0.5s step-end infinite;
`;

// 粒子背景容器
const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  canvas {
    display: block;
  }
`;

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
    }[] = [];
    const particleCount = 100;

    if (ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fill();
          p.x += p.dx;
          p.y += p.dy;

          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      canvas.remove();
    };
  }, []);

  return (
    <ParallaxContainer offsetY={offsetY}>
      <ParticleBackground />
      <TypingText>
        打造您的專屬形象網站 | 購物車網站 | 中英文翻譯 | 音檔逐字稿
      </TypingText>
    </ParallaxContainer>
  );
};

export default Hero;
