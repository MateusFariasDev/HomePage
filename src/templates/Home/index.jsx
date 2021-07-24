import React from 'react';
import './styles.css';
import Curriculo from '../../download/curriculo.pdf';

import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

export const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Mateus Farias Silva</h1>
        <small>Desenvolvedor Full Stack</small>
      </div>
      <div className="description">
        <p>
          Docker, Kubernetes, Nginx, Google Cloud Platform, API Rest, MongoDB, MySQL, HTML, CSS, Javascript, NodeJs,
          Jest, React, Redux e Git.
        </p>
        <br />
        <p>
          Para mais informações sobre meus projetos, acesse minhas redes sociais logo abaixo. Para informações de
          contato, meu currículo está disponível no último ícone.
        </p>
      </div>
      <div className="medias">
        <a href="https://www.linkedin.com/in/coda/" target="_blank" title="Acesse meu LinkedIn" rel="noreferrer">
          <FaLinkedin size={35} />
        </a>
        <a href="https://github.com/MateusFariasDev" target="_blank" title="Acesse meu Github" rel="noreferrer">
          <FaGithub size={35} />
        </a>
        <a href={Curriculo} target="_blank" title="Acesse meu currículo" rel="noreferrer">
          <FaFileDownload size={35} />
        </a>
      </div>
    </div>
  );
};
