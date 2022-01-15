import React, { useCallback, useEffect, useState, VFC } from "react"
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'

type Post = {
    id?:number;
    title:string;
    category:string;
    content:string;
    created_at:Date;
    updated_at:Date;
}


export const PostPage : VFC = () => {
    
    const [posts, setPosts] = useState<Post[]>([]);

    const [formData,setFormData] = useState({title:'',category:'',content:''});

    useEffect(() =>  {
        getPostsData();
    },[])

    const getPostsData = () => {
        axios
            .get<Post[]>('api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }





    return (
        <>
            <h1>Post Page</h1>
            <Table variant='simple'>
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>タイトル</Th>
      <Th>カテゴリー</Th>
      <Th>内容</Th>
      <Th>作成日</Th>
    </Tr>
  </Thead>
  <Tbody>

{posts.map((post) => (
        <Tr key={post.id}>
              <Td>{post.title}</Td>
              <Td>{post.category}</Td>
              <Td>{post.content}</Td>
              <Td>{post.created_at}</Td>
        <Button>編集</Button>
        <Button>削除</Button>
    </Tr>
))}

  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>
        </>
    )
}
