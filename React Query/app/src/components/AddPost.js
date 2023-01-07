import { Heading, Stack, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { useMutation, useQueryClient } from "react-query";
import { addNewPost, updatePost } from "../apis/PostApi";

export default function AddPost({ isUpdates, id }) {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { isLoading, data, mutateAsync } = useMutation(
    isUpdates ? "updatePost" : "addNewPost",
    isUpdates ? updatePost : addNewPost,
    {
      onSuccess: () => {
        isUpdates
          ? queryClient.invalidateQueries(["posts", id])
          : queryClient.invalidateQueries("posts");
      },
      onError: (error) => {
        toast({
          status: "error",
          title: error.message,
          duration: 500,
          isClosable: true,
        });
      },
    }
  );
  return (
    <div>
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={async (values) => {
          isUpdates
            ? await mutateAsync({ title: values.title, body: values.body, id })
            : await mutateAsync({ title: values.title, body: values.body });
        }}
      >
        <Form>
          <Stack my="4">
            <Heading fontSize="2xl" textAlign="center">
            {isUpdates ? "Update" : "Add New"} Post
            </Heading>
            <InputControl name="title" label="Title" />
            <TextareaControl name="body" label="Content" />
            <SubmitButton isLoading={isLoading}>
              {isUpdates ? "Update" : "Add"} Post
            </SubmitButton>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
}
