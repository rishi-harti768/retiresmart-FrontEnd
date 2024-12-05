import { useState, useEffect } from "react";

const useSignup = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "POST",
        body: `{"email":"${email}","password":"${password}"}`,
      };

      fetch("http://localhost:9876/auth/register", options)
        .then((response) => setLoading(false))
        .then((response) => setData(response))
        .catch((err) => setError(err));
    };

    fetchData();
  }, [email, password]);

  return { data, loading, error };
};

export default useSignup;
