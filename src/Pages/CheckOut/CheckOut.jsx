import checkOutImg from "../../assets/images/checkout/checkout.png";

const CheckOut = () => {
  return (
    <div>
      <div className="relative">
        <img src={checkOutImg} alt="" className="w-full " />
        <h1 className="absolute top-1/2 left-12 text-3xl text-white font-bold">
          Check Out
        </h1>
        <div className="bg-[#FF3811] absolute left-[650px] bottom-0 py-4 px-16 rounded-tl-badge rounded-tr-badge text-white text-xl">
          <h3>Home/Checkout</h3>
        </div>
      </div>

      <div className="bg-[#F3F3F3] mt-10 rounded-xl p-16">
        <form className="card-body">
          <div className="form-control flex flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input w-1/2 input-bordered"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input w-1/2 input-bordered"
              required
            />
          </div>
          <div className="form-control flex flex-row gap-4">
            <input
              type="number"
              placeholder="Your Phone"
              name="phoneNumber"
              className="input w-1/2 input-bordered"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input w-1/2 input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              placeholder="Your Message"
              className="textarea h-60 textarea-bordered textarea-lg w-full max-w-full"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-white">Order Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
