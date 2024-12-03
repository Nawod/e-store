/**
 * @class Footer
 * @description purpose of this component is to render footer of the application
 * @author Nawod Madhuwantha
 */

const Footer = () => {
    return (
        <a
            href="https://www.nawodmadhuwantha.com"
            className="container text-center cursor-pointer text-gray-500 hover:text-gray-600 pt-12 pb-8 border-t block"
            target="_blank"
            rel="noopener"
        >
            ©️ {new Date().getFullYear()} E-Store - Nawod Madhuwantha
        </a>
    );
};

export default Footer;
