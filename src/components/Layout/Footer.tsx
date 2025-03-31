import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#4B8BBE', color: '#FFFFFF', padding: '20px', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} 霍爾的移動城堡網站. 版權所有.</p>
            <p>隱私政策 | 使用條款</p>
        </footer>
    );
};

export default Footer;