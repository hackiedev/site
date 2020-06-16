import React, { useState } from "react";

import Text from "../../Text";
import Container from "../../Container";
import { colors } from "../../../utils/style";
import Input from "../../Input";
import Button from "../../Button";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container padding="large">
      <Text size="big" component="h1" color={colors.white}>
        Contact us
      </Text>
      <Container direction="row" paddingBottom="default">
        <Container paddingRight="small" size={1}>
          <Input
            label="Name"
            value={name}
            onChange={setName}
            color="grey"
            activeColor="white"
          />
        </Container>
        <Container size={1}>
          <Input
            label="Email"
            value={email}
            onChange={setEmail}
            color="grey"
            activeColor="white"
          />
        </Container>
      </Container>
      <Container paddingBottom="small">
        <Input
          label="Content"
          multiline
          rows={5}
          value={content}
          onChange={setContent}
          color="grey"
          activeColor="white"
        />
      </Container>
      <Container size={1}>
        <Button
          color="red"
          textColor="white"
          disabled={!name || !email || !content}
          onClick={() => {}}
          size={1}
        >
          Submit form
        </Button>
      </Container>
    </Container>
  );
};

export default ContactUs;
