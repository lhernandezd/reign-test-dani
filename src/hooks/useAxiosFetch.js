import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://hn.algolia.com/api/v1";

const useAxiosFetch = ({ url, method, body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios(
        `${baseURL}/${url}`,
        JSON.parse(headers),
        JSON.parse(body)
      );
      setResponse(response.data);
      setloading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxiosFetch;
