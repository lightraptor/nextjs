// src/LinkPreview.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

interface LinkPreviewProps {
  url: string;
}

interface LinkPreviewData {
  title: string;
  description: string;
  image: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
  const [data, setData] = useState<LinkPreviewData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.linkpreview.net/?key=d63a378ffe16cbd5af1feae41858bb19&q=${url}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error loading preview");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.container}>
      <img src={data?.image} alt={data?.title} style={styles.image} />
      <div>
        <h2>{data?.title}</h2>
        <p>{data?.description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    marginRight: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
};

export default LinkPreview;
