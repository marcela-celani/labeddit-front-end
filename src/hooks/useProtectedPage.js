import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/Coordinator";
import { getStorageItem } from "../utils/storageManager";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getStorageItem("token");
    if (!token) {
      goToLogin(navigate)
    }
  }, [navigate]);

};

