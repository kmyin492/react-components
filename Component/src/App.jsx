// App.jsx
import React, { useState } from "react";
import Radio from "./Radio";
import Input from "./input";
import TextArea from "./TextArea";

const App = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Regular expression for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [textAreaValue, setTextAreaValue] = useState("");
  return (
    <div className="p-10">
      <Input
        label="Your Name"
        isRequired={true}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        errorMessage={name === "" ? "Name is required" : ""}
      />
      <Input
        label="Your Email"
        isRequired={true}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        errorMessage={
          email === ""
            ? "Email is required"
            : !emailRegex.test(email)
            ? "Invalid email format"
            : ""
        }
      />
      <Radio
        label="Gender"
        isRequired={true}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        value={selectedGender}
        onChange={(value) => setSelectedGender(value)}
        errorMessage={selectedGender === "" ? "Please select a gender" : ""}
      />
      <TextArea
        isRequired={true}
        label="Additional information"
        value={textAreaValue}
        placeholder="Enter additional information"
        onChange={(value) => setTextAreaValue(value)}
        errorMessage={textAreaValue === "" ? "This field is required" : ""}
      />

      <p className="mt-4">
        Selected Gender: {selectedGender} <br />
        Your Name: {name} <br />
        Your Email: {email} <br />
        Your Additional Information: {textAreaValue}
      </p>
    </div>
  );
};

export default App;
