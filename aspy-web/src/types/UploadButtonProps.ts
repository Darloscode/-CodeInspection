import { FileData } from "./FileData";

export interface UploadButtonProps {
  onFileSelected?: (fileData: FileData) => void;
}
