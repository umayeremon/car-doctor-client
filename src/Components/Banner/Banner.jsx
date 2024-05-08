import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] object-cover">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl " />

        <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
         <div className="w-1/2 pl-12 text-white space-y-4 ">
         <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-error mr-4 text-white">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
         <div className="w-1/2 pl-12 text-white space-y-4 ">
         <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-error mr-4 text-white">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
         <div className="w-1/2 pl-12 text-white space-y-4 ">
         <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-error mr-4 text-white">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
         <div className="w-1/2 pl-12 text-white space-y-4 ">
         <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-error mr-4 text-white">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
         <div className="w-1/2 pl-12 text-white space-y-4 ">
         <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-error mr-4 text-white">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute flex items-center h-full top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
         <div className="w-1/2 pl-12 text-white space-y-4 ">
         <h2 className="text-6xl ">Affordable Price For Car Servicing</h2>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-error mr-4 text-white">
              Discover More
            </button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
         </div>
        </div>
        <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
