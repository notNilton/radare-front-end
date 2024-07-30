// Import Libraries
import React, { useState } from "react";
import { Email, GitHub, LinkedIn, AccountCircle } from "@mui/icons-material";

// Import Styles
import "./App.scss";
import "./styles/global.css";
import "./components/Canva/Canva.css";

// Import Components
import Node from "./components/Canva/Canva";
// import AboutModal from "./components/AboutModal";
import AboutModal from "./components/About/AboutModal";

const version = require("../package.json").version;

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>("Aba1");
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const handleTabClick = (tabName: string) => {
    setCurrentTab(tabName);
  };

  const toggleAboutPopup = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="app-container">
      <header>
        <nav className="navbar">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <button className="link-button">Arquivo</button>
              <ul>
                <li>
                  <a href="novo">Novo</a>
                </li>
                <li>
                  <a href="abrir">Abrir</a>
                </li>
                <li>
                  <a href="fechar">Fechar</a>
                </li>
                <li>
                  <a href="salvar">Salvar</a>
                </li>
                <li>
                  <a href="salvar-como">Salvar Como</a>
                </li>
                <li>
                  <a href="importar">Importar</a>
                </li>
                <li>
                  <a href="exportar">Exportar</a>
                </li>
                <li>
                  <a href="exemplos">Exemplos</a>
                </li>
                <li>
                  <a href="sair">Sair</a>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <button className="link-button">Editar</button>
              <ul>
                <li>
                  <a href="retornar">Retornar</a>
                </li>
                <li>
                  <a href="avancar">Avançar</a>
                </li>
                <li>
                  <a href="cortar">Cortar</a>
                </li>
                <li>
                  <a href="copiar">Copiar</a>
                </li>
                <li>
                  <a href="colar">Colar</a>
                </li>
                <li>
                  <a href="deletar">Deletar</a>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <button className="link-button">Desenhar</button>
              <ul>
                <li>
                  <a href="objetos-padroes">Lista de Objetos Padrões</a>
                </li>
                <li>
                  <a href="agrupar-objetos">Agrupar Objetos</a>
                </li>
                <li>
                  <a href="desagrupar-objetos">Desagrupar Objetos</a>
                </li>
              </ul>
            </li>
            <li className="navbar-item">
              <button className="link-button">Ajuda</button>
            </li>
            <li className="navbar-item" onClick={toggleAboutPopup}>
              <button className="link-button">Sobre</button>
            </li>
            <div className="navbar-icon">
              <span className="project-version">Versão: {version}</span>
              <AccountCircle className="user-icon" />
            </div>
          </ul>
        </nav>
      </header>

      <div className="central-area">
        <Node />
      </div>

      <div className="tab-structure">
        {["Aba1", "Aba2", "Aba3", "Aba4", "Aba5"].map((tab) => (
          <div
            key={tab}
            className={`tab ${currentTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            <a href={tab.toLowerCase()}>{tab}</a>
          </div>
        ))}
      </div>

      <div className="graph-bar-title">
        <a href="analise-resumida">Análise Resumida</a>
      </div>

      <div className="graph-bar-content">
        {/* Placeholder for graph bar content */}
      </div>

      <div className="r-sidebar-structure">
        <div className="sidebar-title">
          <a href="tags-originais">Tags Originais</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Tags Originais content */}
        </div>
        <div className="sidebar-title">
          <a href="tags-reconciliadas">Tags Reconciliadas</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Tags Reconciliadas content */}
        </div>
        <div className="sidebar-title">
          <a href="erros-das-tags">Erros das Tags</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Erros das Tags content */}
        </div>
      </div>

      <div className="l-sidebar-structure">
        <div className="sidebar-title">
          <a href="arvore-funcionalidades">Árvore de Funcionalidades</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Árvore de Funcionalidades content */}
        </div>
        <div className="sidebar-title">
          <a href="analise">Análise</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Análise content */}
        </div>
        <div className="sidebar-title">
          <a href="matriz">Matriz</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Matriz content */}
        </div>
        <div className="sidebar-title">
          <a href="classificacao">Classificação</a>
        </div>
        <div className="sidebar-content">
          {/* Placeholder for Classificação content */}
        </div>
      </div>

      <AboutModal showAbout={showAbout} toggleAboutPopup={toggleAboutPopup} />
    </div>
  );
};

export default App;
