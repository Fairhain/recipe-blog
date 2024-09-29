import React, { useEffect, useState } from 'react';
import { getCollection } from 'astro:content'; // Assuming getCollection is available globally
import RecentBlogPosts from '../generic/RecentBlogPosts.astro';
import { useAuth } from '../login/AuthContext';

interface Props {
  count: number;
}

const RecentBlogPostsWrapper: React.FC<Props> = ({ count }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const blogPosts = await getCollection('blog');
      setPosts(blogPosts.reverse().slice(0, count)); // Update the posts state with fetched data
    };
    fetchPosts(); // Call the async function
  }, [count]); // Re-run the effect if `count` prop changes

  return (
    <RecentBlogPosts posts={posts} count={count} user={user} />
  );
};

export default RecentBlogPostsWrapper;
