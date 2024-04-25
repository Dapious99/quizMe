import React, { useState } from "react";
import axios from "axios";

const QuickTest = () => {
  const [subjectIdInput, setSubjectIdInput] = useState("");
  const [data, setData] = useState({
    subject: "",
    topic: "",
  });

  const postSubject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_IGCARTS_BASE_URL}/social/getPosts/${subjectIdInput}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={postSubject}>
      <input
        type="text"
        placeholder="Subject ID"
        value={subjectIdInput}
        onChange={(e) => setSubjectIdInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={data.subject}
        name="subject"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Topic"
        value={data.topic}
        name="topic"
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuickTest;
