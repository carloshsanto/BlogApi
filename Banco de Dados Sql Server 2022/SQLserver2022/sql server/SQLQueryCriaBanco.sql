-- Criar o banco de dados para o blog
CREATE DATABASE BlogDB;
GO

-- Usar o banco de dados recém-criado
USE BlogDB;
GO

-- Tabela de Usuários
CREATE TABLE Usuarios (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    NomeCompleto NVARCHAR(100),
    Email NVARCHAR(100) UNIQUE,
    Senha NVARCHAR(50),
    DataCadastro DATETIME,
    DataAtualizacao DATETIME
);

-- Tabela de Imagens de Usuários
CREATE TABLE ImagensUsuarios (
    ImagemID INT IDENTITY(1,1) PRIMARY KEY,
    UserID INT,
    Imagem VARBINARY(MAX),
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID)
);

-- Tabela de Níveis de Acesso
CREATE TABLE NiveisAcesso (
    NivelID INT IDENTITY(1,1) PRIMARY KEY,
    NomeNivel NVARCHAR(50) UNIQUE
);

-- Inserir níveis de acesso (por exemplo, Administrador, Editor e Revisor)
INSERT INTO NiveisAcesso (NomeNivel) VALUES ('Administrador');
INSERT INTO NiveisAcesso (NomeNivel) VALUES ('Editor');
INSERT INTO NiveisAcesso (NomeNivel) VALUES ('Revisor');

-- Tabela de Posts
CREATE TABLE Posts (
    PostID INT IDENTITY(1,1) PRIMARY KEY,
    Titulo NVARCHAR(200),
    Conteudo TEXT,
    AutorID INT,
    DataPublicacao DATETIME,
    ImagemCapa VARBINARY(MAX),
    FOREIGN KEY (AutorID) REFERENCES Usuarios(UserID)
);

-- Tabela de Comentários
CREATE TABLE Comentarios (
    ComentarioID INT IDENTITY(1,1) PRIMARY KEY,
    PostID INT,
    AutorID INT,
    Conteudo TEXT,
    DataComentario DATETIME,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (AutorID) REFERENCES Usuarios(UserID)
);

-- Associação de Usuários com Níveis de Acesso (muitos para muitos)
CREATE TABLE UsuariosNiveis (
    UserID INT,
    NivelID INT,
    PRIMARY KEY (UserID, NivelID),
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID),
    FOREIGN KEY (NivelID) REFERENCES NiveisAcesso(NivelID)
);
