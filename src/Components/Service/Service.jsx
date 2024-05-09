import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Service = ({ service }) => {
  const {_id, img, price, title } = service;
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-200">
      <figure className="p-4">
        <img src={img} alt={title} className="rounded-xl h-60 w-full" />
      </figure>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-col ">
          <h2 className="font-bold text-[#444444] text-xl">{title}</h2>
          <p className="text-[#FF3811] font-semibold text-lg">Price: ${price}</p>
        </div>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}><FaArrowRightLong className="text-[#FF3811] cursor-pointer mr-2"/></Link>
        </div>
      </div>
    </div>
  );
};


Service.propTypes={
  service: PropTypes.object
}


export default Service;
