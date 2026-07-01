const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
      title: "Web Development",
      category: "Technology",
    },
    {
      url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      title: "UI Design",
      category: "Design",
    },
    {
      url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      title: "Mobile Apps",
      category: "Technology",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      title: "Data Analytics",
      category: "Business",
    },
    {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      title: "Cloud Computing",
      category: "Technology",
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      title: "Marketing",
      category: "Business",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Our Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.url} alt={image.title} />
            <div className="gallery-overlay">
              <h3>{image.title}</h3>
              <p>{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
