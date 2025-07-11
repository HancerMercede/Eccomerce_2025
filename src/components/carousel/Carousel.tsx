import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import ofertas from "../../assets/images/SuperOfertas.png";
import styles from "./Carousel.module.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1610444833641-0542660a4ed7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZyZXNoJTIwRnJ1aXRzfGVufDB8fDB8fHww",
    alt: "Fresh Fruits",
  },
  {
    src: "https://media.istockphoto.com/id/1644577817/photo/assortment-of-various-types-of-vegetables-arranged-in-a-rainbow-gradient-pattern.webp?a=1&b=1&s=612x612&w=0&k=20&c=BWzxygiskIvtywJ34RSduTn09VjcnVTCF6lsCRyAXJI=",
    alt: "Organic Vegetables",
  },
  {
    src: "https://imgs.search.brave.com/e01iBEhUj-gWAiSm9oct--_FOxzC_0EsHvw1UFxxQvQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjQ2ODQxNi9lcy9m/b3RvL2ZhbWlsaWEt/ZW4tc3VwZXJtZXJj/YWRvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RM3BocTJi/Y0VNTXhnRTcxY3JZ/Qnl5VjRMc25JQm1o/R29mZXZ0cVRqZGZJ/PQ",
    alt: "Delicious Snacks",
  },
  {
    src: ofertas,
    alt: "Ofertas",
  },
];

const MiniMarketCarousel: React.FC = () => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} className={styles.carouselImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MiniMarketCarousel;
