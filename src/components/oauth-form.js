import { loginGoogle, loginGithub, loginSpotify, loginGitlab } from "@/lib/actions"

function OAuthForm() {

  return (
    <>
      <form className='oauth'>
        <button formAction={loginGoogle} className="social-button">
          <img src="/google.PNG" alt="Google" />  Iniciar sesión con Google
        </button>
      <br></br>
        <button formAction={loginGithub} className="social-button">
          <img src="/github.PNG" alt="Github" /> Iniciar sesión con Github
        </button>
        <br></br>
        <button formAction={loginSpotify} className="social-button">
          <img src="/spotify.png" alt="Spotify" /> Iniciar sesión con Spotify
        </button>
        <br></br>
        <button formAction={loginGitlab} className="social-button">
          <img src="/gitlab.png" alt="Gitlab" /> Iniciar sesión con gitlab
        </button>
      </form>
    </>
  )
}

export default OAuthForm;