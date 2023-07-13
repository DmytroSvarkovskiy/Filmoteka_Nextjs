import { Container } from '@/components';
import styled from './styled.module.scss';
import { FaTelegram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={styled.section}>
      <Container>
        <h3 className={styled.title}>Communication with the author</h3>
        <div className={styled.wrapper}>
          <a
            href="https://t.me/Dmytro_Svarkovskyi"
            target="_blank"
            className={styled.link}
            title="telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="https://www.linkedin.com/in/dmitro-svarkovskiy/"
            target="_blank"
            className={styled.link}
            title="linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100017600010718"
            target="_blank"
            className={styled.link}
            title="facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/DmytroSvarkovskiy"
            target="_blank"
            className={styled.link}
            title="github"
          >
            <FaGithub />
          </a>
        </div>
      </Container>
    </footer>
  );
};
