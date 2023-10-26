import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        {isRouteErrorResponse(error) ? (
          <Text>Sorry,Page Not Found</Text>
        ) : (
          <Text>Unexpected Error Occured</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
