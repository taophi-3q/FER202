import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      title: 'Traditional Gourmet Pizza',
      desc: 'Savor the authentic taste of wood-fired gourmet pizzas made with fresh organic ingredients.',
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      title: 'Our Chef Special Creations',
      desc: 'Expertly prepared dishes combining Italian heritage with modern flavor experiments.',
    },
    {
      id: 3,
      image: '/images/slide3.jpg',
      title: 'Freshly Sourced Vegetables',
      desc: 'Every herb, tomato, and cheese slice is hand-picked daily for absolute freshness.',
    },
  ];

  // Circular menu thumbnail assets
  const menuThumbnails = [
    { id: 1, image: '/images/menu-01.jpg' },
    { id: 2, image: '/images/menu-02.jpg' },
    { id: 3, image: '/images/menu-03.jpg' },
    { id: 4, image: '/images/menu-04.jpg' },
    { id: 5, image: '/images/menu-05.jpg' },
    { id: 6, image: '/images/menu-06.jpg' },
  ];

  return (
    <div className="home-page-wrapper">
      {/* Slide Carousel */}
      <Carousel fade className="hero-carousel">
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div className="carousel-img-wrapper">
              <div className="carousel-overlay"></div>
              <img
                className="carousel-img"
                src={slide.image}
                alt={slide.title}
              />
            </div>
            <Carousel.Caption className="text-start">
              <h1 className="display-4 fw-extrabold text-uppercase">{slide.title}</h1>
              <p className="lead fs-5 mb-4">{slide.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Main Home Container */}
      <Container className="text-center my-5">
        {/* Circular Menu Thumbnails linking to Quiz page */}
        <div className="circular-items-container">
          {menuThumbnails.map((item) => (
            <Link 
              key={item.id} 
              to="/quiz" 
              className="circular-item-card"
              title="Click to take the Quiz!"
            >
              <div className="circle-img-wrapper">
                <img
                  src={item.image}
                  className="circle-img"
                  alt={`Menu thumbnail ${item.id}`}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Required Red Heading */}
        <h2 className="home-page-heading text-danger fw-bold my-4">
          This is Home Page
        </h2>
      </Container>
    </div>
  );
}

export default Home;
