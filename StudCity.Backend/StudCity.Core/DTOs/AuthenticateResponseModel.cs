namespace StudCity.Core.DTOs;

public class AuthenticateResponseModel
{
    public AuthenticateResponseModel(string jwtToken, string refreshToken)
    {
        JwtToken = jwtToken;
        RefreshToken = refreshToken;
    }

    public string JwtToken { get; set; }

    public string RefreshToken { get; set; }

    public bool IsRegistration { get; set; } = false;
}
