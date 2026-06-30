import React from 'react';
import FeedGrid from './FeedGrid';
import { mockPosts } from './mockData';

export default function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold p-6">Afriscope</h1>
      <FeedGrid posts={mockPosts} currentUserId="user123" />
    </div>
  );
}
