import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "../styles";

const SearchForm = ({ searchGithubUsername }) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      return alert("Username Can't be empty");
    }
    setUsername("");
    searchGithubUsername(username);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Input
          required
          placeholder="Enter Github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormGroup>
      <Button disabled={username === ""} type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
