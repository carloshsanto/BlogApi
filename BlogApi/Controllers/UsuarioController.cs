using BlogApi.Models;
using BlogApi.Service.UsuarioService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BlogApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioInterface _usuarioInterface;
        public UsuarioController(IUsuarioInterface usuarioInterface)
        {
            _usuarioInterface = usuarioInterface;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<UsuarioModel>>>> GetUsuarios()
        {
            return Ok(await _usuarioInterface.GetUsuarios());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<UsuarioModel>>> GetUsuarioById(int id)
        {
            ServiceResponse<UsuarioModel> serviceResponse = await _usuarioInterface.GetUsuarioById(id);

            return Ok(serviceResponse);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<UsuarioModel>>>> CreateUsuario(UsuarioModel novoUsiario)
        {
            return Ok(await _usuarioInterface.CreateUsuario(novoUsiario));
        }


        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<UsuarioModel>>>> UpdateUsuario(UsuarioModel editadoUsuario)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = await _usuarioInterface.UpdateUsuario(editadoUsuario);

            return Ok(serviceResponse);
        }

        [HttpPut("InativaUsuario")]
        public async Task<ActionResult<ServiceResponse<List<UsuarioModel>>>> InativaUsuario(int id)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = await _usuarioInterface.InativaUsuario(id);

            return Ok(serviceResponse);
        }


        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<UsuarioModel>>>> DeleteUsuario(int id)
        {
            ServiceResponse<List<UsuarioModel>> serviceResponse = await _usuarioInterface.DeleteUsuario(id);

            return Ok(serviceResponse);
        }

    }
}
