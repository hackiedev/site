import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";
import { remove, union } from "lodash";

import Text from "../../Text";
import Container from "../../Container";
import { colors } from "../../../utils/style";
import Input from "../../Input";
import Button from "../../Button";

const Tag = styled(Chip)`
  && {
    margin: 10px;
  }
`;

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [services, setServices] = useState<Array<string>>([]);
  const [budgets, setBudgets] = useState([]);

  return (
    <Container padding="large">
      <Container direction="row">
        <Container direction="column" paddingBottom="default" size={0.5}>
          <Text size="default" color={colors.white}>
            Contacts
          </Text>
          <Text paddingTop="default" size="medium" color={colors.white}>
            hackie.dev@gmail.com
          </Text>
        </Container>
        <Container direction="column">
          <Text color={colors.white}>Hire us</Text>
          <Text size="big" color={colors.white}>
            A project with Hackie?
          </Text>
          <Text component="h4" color={colors.white}>
            Services
          </Text>
          <Container direction="row">
            {["Mobile", "Webpage"].map((tag_label) => (
              <Tag
                color={services.includes(tag_label) ? "primary" : ""}
                label={tag_label}
                onClick={() => {
                  if (services.includes(tag_label)) {
                    setServices(
                      remove(services, (curr: string) => curr !== tag_label)
                    );
                  } else {
                    setServices(union(services, [tag_label]));
                  }
                }}
              />
            ))}
          </Container>
          <Text component="h4" color={colors.white}>
            Budget in EUR
          </Text>
          <Container direction="row">
            {["less than 5K", "5k-10K", "10K-50K", "more than 50K"].map(
              (tag_label) => (
                <Tag
                  color={services.includes(tag_label) ? "primary" : ""}
                  label={tag_label}
                  onClick={() => {
                    if (services.includes(tag_label)) {
                      setServices(
                        remove(services, (curr: string) => curr !== tag_label)
                      );
                    } else {
                      setServices(union(services, [tag_label]));
                    }
                  }}
                />
              )
            )}
          </Container>
          <Container
            direction="row"
            paddingBottom="default"
            paddingTop="default"
            size={1}
          >
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
      </Container>
    </Container>
  );
};

export default ContactUs;
