import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import  { BrowserRouter }  from "react-router-dom";
import RouteComponent from "./components/RouteComponent";
import { ReactQueryDevtools } from "react-query/devtools";


const queryClient = new QueryClient();
export default function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
       <BrowserRouter> 
        <RouteComponent />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </ChakraProvider>
  );
}