export const goToLogin = (navigate) => {
    navigate("/")
  }
  
  export const goToSignUp = (navigate) => {
    navigate("/signup" )
  }
  
  export const goToFeed = (navigate) => {
    navigate("/posts")
  }
  
  export const goToPost = (navigate, id) => {
    navigate(`/posts/${id}`)
  }
  
  export const goToError = (navigate) => {
    navigate("*")
  }