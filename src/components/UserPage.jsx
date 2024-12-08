import React from 'react';
import Navbar from './NavbarLogin';

const ArticleCard = ({ title, description, author }) => {
  return (
    <div className="m-5 bg-green-50 flex shadow rounded-sm overflow-hidden">
        <img className='w-28' src={`https://source.unsplash.com/random`} alt={title}></img>
      
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-4 text-gray-500 text-sm">By {author}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-white flex flex-col scroll-auto min-h-screen">
      <Navbar />
      <div className="p-5">
        <ArticleCard
          title="Understanding Quantum Computing"
          description="An in-depth exploration of the principles of quantum computing and its applications."
          author="Rupesh"
        />
        <ArticleCard
          title="AI in Healthcare"
          description="How artificial intelligence is transforming the healthcare industry."
          author="hari krishna"
        />
        <ArticleCard
          title="Renewable Energy Innovations"
          description="Recent advancements in renewable energy technologies."
          author="theATLAS"
        />
        <ArticleCard
          title="The Future of Space Exploration"
          description="Exploring the next frontiers in space technology and research."
          author="Alice"
        />
        <ArticleCard
          title="The Future of Space Exploration"
          description="Exploring the next frontiers in space technology and research."
          author="ROBERT"
        />
        <ArticleCard
          title="The Future of Space Exploration"
          description="Exploring the next frontiers in space technology and research."
          author="mentaj"
        />
        <ArticleCard
          title="The Future of Space Exploration"
          description="Exploring the next frontiers in space technology and research."
          author="devadasu"
        />
      </div>
    </div>
  );
}
