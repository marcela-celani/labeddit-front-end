import loadingImg from "../../assets/loading.png"
import { CircularLoading, LoadingContainer } from "./LoadingStyle"

const Loading = ({ size }) => {
  return (
    <LoadingContainer>
      <CircularLoading size={size || "200px"} src={loadingImg} alt="Carregamento" />
    </LoadingContainer>
  )

}

export default Loading
