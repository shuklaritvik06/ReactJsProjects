import { useQuery } from "react-query";
import React from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import AddPost from "./AddPost";
import { fetchPosts } from "../apis/PostApi";


export default function Home() {
  const history = useNavigate();  
  const toast = useToast();
  const { id } = useParams();
  const pageId = parseInt(id);
  const { data, isLoading, isSuccess } = useQuery(["posts",pageId], ()=>fetchPosts(pageId),{
    keepPreviousData: true,
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
  });
  return (
    <div>
      <Container maxW="1300px" mt="16">
        <AddPost />
        <Flex justifyContent="space-between" mb="5">
            <Button colorScheme="yellow" onClick={()=>{
                console.log(data);
                if(pageId>0){
                    history(`/${pageId-1}`);
                }
            }} disabled={pageId===1}>Prev</Button>
            <Text>Page: {pageId}</Text>
            <Button colorScheme="blue" onClick={()=>{
                history(`/${pageId+1}`);
            }}>Next</Button>
        </Flex>    
        {isLoading && (
          <Grid placeItems="center" height="100vh">
            <Spinner />
          </Grid>
        )}
        {isSuccess &&
          data.map((post) => {
            return (
              <Stack
                p="4"
                boxShadow="md"
                borderRadius="xl"
                border="1px solid #ccc"
                key={post.id}
                mb="4"
              >
                <Flex justifyContent="space-between">
                  <Text>{post.id}</Text>
                  <Text>{post.user_id}</Text>
                </Flex>
                <Heading>{post.title}</Heading>
                <Text>{post.body}</Text>
              </Stack>
            );
          })}
      </Container>
    </div>
  );
}
