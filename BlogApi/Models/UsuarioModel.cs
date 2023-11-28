using BlogApi.Enums;
using System.ComponentModel.DataAnnotations;

namespace BlogApi.Models
{
    public class UsuarioModel
    {
        [Key]
        public int Id { get; set; }
        public string NomeCompleto { get; set; }
        public string Email { get; set; }
        public string NomeUsuario { get; set; }
        public string? FotoUsuario { get; set; }
        public string Senha { get; set; }
        public string Cargo { get; set; }
        public string Endereco { get; set; }
        public string Cidade { get; set; }
        public string Biografia { get; set; }
        public DataType Aniversario { get; set; }
        public string Skype { get; set; }
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string linkedin { get; set; }
        public bool Atividade { get; set; }
        public NivelUsuarioEnum NivelUsuario { get; set; }
        public DateTime DataCriaçãoUsuario { get; set; } = DateTime.Now.ToLocalTime();
        public DateTime DataAlteracaoUsuario { get; set; } = DateTime.Now.ToLocalTime();
    }
}
