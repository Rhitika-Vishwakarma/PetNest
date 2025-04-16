import React from 'react';

const BlogSection = () => {
  const blogs = [
    { title: "5 Tips for First-Time Pet Owners", content: "Make sure to schedule regular vet checkups and give your pet plenty of love." },
    { title: "Healthy Diet for Dogs", content: "Include protein, healthy fats, and avoid toxic foods like chocolate." },
    { title: "How to Keep Your Cat Entertained", content: "Use toys, climbing posts, and interactive games." }
  ];

  return (
    <div className="blog-section">
      <h2>Pet Care Blog</h2>
      {blogs.map((blog, idx) => (
        <div key={idx} className="blog-post">
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
