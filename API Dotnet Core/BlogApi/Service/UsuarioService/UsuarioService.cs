using BlogApi.DataContext;
using BlogApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogApi.Service.UsuarioService
{
    public class UsuarioService : IUsuarioInterface
    {

        private readonly ApplicationDbContext _context;
        public UsuarioService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<UsuarioModel>>> CreateUsuario(UsuarioModel novoUsuario)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = new ServiceResponse<List<UsuarioModel>>();

            try
            {
                if (novoUsuario == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Preencher dados!";
                    serviceResponse.Sucesso = false;

                    return serviceResponse;
                }
                _context.Add(novoUsuario);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Usuario.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<UsuarioModel>>> DeleteUsuario(int Id)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = new ServiceResponse<List<UsuarioModel>>();

            try
            {
                UsuarioModel usuario = _context.Usuario.FirstOrDefault(x => x.Id == Id);

                if (usuario == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuario nao encontrado!";
                    serviceResponse.Sucesso = false;
                }                

                _context.Usuario.Remove(usuario);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Usuario.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;

        }

        public async Task<ServiceResponse<UsuarioModel>> GetUsuarioById(int id)
        {

            ServiceResponse<UsuarioModel> serviceResponse = new ServiceResponse<UsuarioModel>();

            try
            {
                UsuarioModel usuario = _context.Usuario.FirstOrDefault(x => x.Id == id);

                if (usuario == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuario nao encontrado!";
                    serviceResponse.Sucesso = false;
                }
                serviceResponse.Dados = usuario;
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<UsuarioModel>>> GetUsuarios()
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = new ServiceResponse<List<UsuarioModel>>();

            try
            {
                serviceResponse.Dados = _context.Usuario.ToList();

                if (serviceResponse.Dados.Count == 0)
                {
                    serviceResponse.Mensagem = "Nenhum dado Encontrado";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<UsuarioModel>>> InativaUsuario(int Id)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = new ServiceResponse<List<UsuarioModel>>();

            try
            {
                UsuarioModel usuario = _context.Usuario.FirstOrDefault(x => x.Id == Id);

                if (usuario == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuario nao encontrado!";
                    serviceResponse.Sucesso = false;
                }

                usuario.Atividade = false;
                usuario.DataAlteracaoUsuario = DateTime.Now.ToLocalTime();

                _context.Usuario.Update(usuario);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Usuario.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<UsuarioModel>>> UpdateUsuario(UsuarioModel editadoUsuario)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = new ServiceResponse<List<UsuarioModel>>();

            try
            {
                UsuarioModel usuario = _context.Usuario.AsNoTracking().FirstOrDefault(x => x.Id == editadoUsuario.Id);

                if (usuario == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Usuario nao encontrado!";
                    serviceResponse.Sucesso = false;
                }                
                usuario.DataAlteracaoUsuario = DateTime.Now.ToLocalTime();

                _context.Usuario.Update(editadoUsuario);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = _context.Usuario.ToList();
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }
    }
}
