const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom websites built with modern technologies like React, Next.js, and more.",
      price: "From $999",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Beautiful, user-centered designs that enhance engagement and conversion.",
      price: "From $799",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      price: "From $1,499",
    },
    {
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Improve your search rankings and drive organic traffic to your business.",
      price: "From $499",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure setup and management for your applications.",
      price: "From $699",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with our analytics services.",
      price: "From $899",
    },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="price">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
