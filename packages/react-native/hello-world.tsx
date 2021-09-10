import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { trpc } from '@zart/react/trpc';

export function HelloWorld() {
  const posts = trpc.useQuery(['post.all'], {
    refetchInterval: 3000,
  });
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
    alignItems: 'center',
  },
});
