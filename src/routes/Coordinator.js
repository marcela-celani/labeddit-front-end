export const goToLogin = (navigate) => {
    navigate("/login")
  }
  
  export const goToSignUp = (navigate) => {
    navigate("/signup" )
  }
  
  export const goToFeed = (navigate) => {
    navigate("/")
  }
  
  export const goToPost = (navigate, id) => {
    const post_id = id
    navigate(`/posts/${post_id}/comments`)
  }
  
  export const goToError = (navigate) => {
    navigate("*")
  }