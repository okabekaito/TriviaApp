import React, { ChangeEvent, useEffect, useState, VFC } from "react"
import axios from "axios";
import { Button, FormControl, Input, Select, Stack, Textarea } from "@chakra-ui/react";
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

    const [formData,setFormData] =useState<string>();



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

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setFormData(e.target.value);
    }

    const createPost = async(title:string,category:string,content:string) => {
      //入力値を投げる
      const {data} =  await axios.post<Post>('/api/posts',{title:title,category:category,content:content})
      return data

  }


    const onClickPost = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(formData)
    }
    




    return (
        <>
            <h1>Post Page</h1>
            <Stack spacing={3}>
              <FormControl  onSubmit={handleChange}>
  <Input variant='outline' placeholder='タイトル' />
  <Select placeholder='カテゴリーを選択'>
  <option value='option1'>家庭</option>
  <option value='option2'>生活</option>
  <option value='option3'>仕事</option>
  <option value='option4'>お金</option>
  <option value='option5'>人間関係</option>
  <option value='option6'>その他</option>
</Select>
  <Textarea placeholder='内容'  />
  <Button>投稿</Button>
  </FormControl>
</Stack>

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
