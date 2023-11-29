using System.Text.Json.Serialization;

namespace BlogApi.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum NivelUsuarioEnum
    {
        Administrador,
        Revidor,
        Editor
    }
}
