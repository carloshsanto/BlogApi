select * from Posts

SELECT UsuariosNiveis.UserID, Usuarios.NomeCompleto, UsuariosNiveis.NivelID,   NiveisAcesso.NomeNivel
FROM UsuariosNiveis
INNER JOIN Usuarios ON UsuariosNiveis.UserID = Usuarios.UserID
INNER JOIN NiveisAcesso ON UsuariosNiveis.NivelID = NiveisAcesso.NivelID
WHERE Usuarios.UserID = 10

