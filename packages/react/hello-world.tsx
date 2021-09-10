import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { trpc } from './trpc';

export function HelloWorld() {
  const posts = trpc.useQuery(['post.all']);
  return (
    <View style={styles.container}>
      <Text>{posts.status}</Text>
      {posts.data?.map((post) => (
        <Text key={post.id}>{post.title}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
