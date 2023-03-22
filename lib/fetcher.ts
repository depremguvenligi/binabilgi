import axios from "axios";
import { Fetcher } from "swr";

const fetcher: Fetcher<any, string | null> = async (url?) => {
  if (!url) return null;
  const response = await axios.get(url);
  return response.data;
};

export default fetcher;
