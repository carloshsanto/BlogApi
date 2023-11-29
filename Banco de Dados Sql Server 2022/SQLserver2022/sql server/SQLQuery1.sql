select * from UsuariosNiveis

insert into UsuariosNiveis (UserID, NivelID) values ('11', '2' )

SELECT UsuariosNiveis.UserID, Usuarios.NomeCompleto, UsuariosNiveis.NivelID,   NiveisAcesso.NomeNivel
FROM UsuariosNiveis
INNER JOIN Usuarios ON UsuariosNiveis.UserID = Usuarios.UserID
INNER JOIN NiveisAcesso ON UsuariosNiveis.NivelID = NiveisAcesso.NivelID
WHERE Usuarios.UserID = 10
