import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';

const MotionText = motion(Text);

interface ResponsiveTextProps {
  children: ReactNode;
}

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ children }) => {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState('16px');

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        const newFontSize = width / 13;
        if (newFontSize >= 50) {
          setFontSize('50px');
        } else {
          setFontSize(`${newFontSize}px`);
        }
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Box ref={ref} w='100%' textAlign='center' style={{ fontSize }}>
      {children}
    </Box>
  );
};

const MainText = () => {
  const fullText = "Shota Suzuki's Portfolio";
  const [text, setText] = useState(fullText.charAt(0)); // 最初の文字で初期化
  const [count, setCount] = useState(1); // インデックス1から開始

  useEffect(() => {
    let timer;
    if (count < fullText.length) {
      timer = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(count));
        setCount(count + 1);
      }, 100); // 150ミリ秒ごとに1文字追加
    }
    return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリア
  }, [count, fullText]);

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }

          .cursor {
            display: inline-block;
            vertical-align: middle;
            width: 2px;
            height: 1em;
            background-color: black;
            animation: blink 1s infinite;
          }
        `}
      </style>
      <Box
        my={10}
        h='40vh'
        minH='100px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >
        <MotionText
          w='100%'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ whiteSpace: 'nowrap' }}
        >
          <ResponsiveText>
            <Text fontWeight='bold'>
              {text}
              <span className='cursor' />
            </Text>
          </ResponsiveText>
        </MotionText>
      </Box>
    </>
  );
};

export default MainText;
