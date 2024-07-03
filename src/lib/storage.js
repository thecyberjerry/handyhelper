import { storage } from "@/config/firebase";
import { ref, uploadBytes } from "firebase/storage";

export const uploadFile = async (file, folder) => {
  try {
    const storageRef = ref(storage, `${folder}${file.name}`);
    const res = await uploadBytes(storageRef, file);
    return res.metadata.fullPath;
  } catch (error) {
    throw error;
  }
}