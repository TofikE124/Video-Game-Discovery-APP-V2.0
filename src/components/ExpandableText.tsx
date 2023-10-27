import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  maxChars: number;
  children: string;
}

const ScallableText = ({ maxChars, children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) {
    return null;
  }
  if (children.length <= maxChars) {
    return <Text>{children}</Text>;
  }
  const summary = expanded ? children : children.substring(0, maxChars) + "...";

  return (
    <Text>
      {summary}
      {
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
          marginLeft={1}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      }
    </Text>
  );
};

export default ScallableText;
