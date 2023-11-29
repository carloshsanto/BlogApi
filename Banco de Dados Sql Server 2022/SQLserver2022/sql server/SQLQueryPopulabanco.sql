USE BlogDB; -- Certifique-se de estar usando o banco de dados que você criou

-- Script para criar dados falsos de usuários
DECLARE @Counter INT = 1;
WHILE @Counter <= 100
BEGIN
    INSERT INTO Usuarios (NomeCompleto, Email, Senha, DataCadastro, DataAtualizacao)
    VALUES (
        'Usuário ' + CAST(@Counter AS NVARCHAR(3)),
        'usuario' + CAST(@Counter AS NVARCHAR(3)) + '@example.com',
        'senha' + CAST(@Counter AS NVARCHAR(3)),
        DATEADD(DAY, -@Counter, GETDATE()),
        GETDATE()
    );
    SET @Counter = @Counter + 1;
END;

-- Script para criar dados falsos de posts e comentários
DECLARE @PostCounter INT = 1;
WHILE @PostCounter <= 100
BEGIN
    INSERT INTO Posts (Titulo, Conteudo, AutorID, DataPublicacao)
    VALUES (
        'Título do Post ' + CAST(@PostCounter AS NVARCHAR(3)),
        'Conteúdo do post ' + CAST(@PostCounter AS NVARCHAR(3)),
        (SELECT TOP 1 UserID FROM Usuarios ORDER BY NEWID()), -- Seleciona um autor aleatório
        DATEADD(DAY, -@PostCounter, GETDATE())
    );

    DECLARE @CommentCounter INT = 1;
    WHILE @CommentCounter <= RAND() * 5 -- Insere de 1 a 5 comentários por post
    BEGIN
        INSERT INTO Comentarios (PostID, AutorID, Conteudo, DataComentario)
        VALUES (
            @PostCounter,
            (SELECT TOP 1 UserID FROM Usuarios ORDER BY NEWID()), -- Seleciona um autor aleatório
            'Comentário no post ' + CAST(@PostCounter AS NVARCHAR(3)),
            DATEADD(SECOND, @CommentCounter, DATEADD(DAY, -@PostCounter, GETDATE()))
        );
        SET @CommentCounter = @CommentCounter + 1;
    END;

    SET @PostCounter = @PostCounter + 1;
END;
