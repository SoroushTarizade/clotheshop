import React from "react";
const ProductImage = () => {
  return (
    <section className="w-full flex justify-center py-20">
      <div className="w-[1150px] max-w-full grid grid-cols-1 lg:grid-cols-[605px_438px] gap-10">
        <div className="grid grid-rows-[275px_399px] gap-10">
          <div className="grid grid-cols-2 gap-10">
            {["category-1.jpg", "category-2.jpg"].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-lg">
                <img
                  src={`./images/${img}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-90"
                />
              </div>
            ))}
          </div>

          <div
            data-aos="fade-right"
            className="group overflow-hidden rounded-lg">
            <img
              // data-aos-duration="5000"
              src="./images/category-3.jpg"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-90"
            />
          </div>
        </div>
        <div className="grid grid-rows-[424px_251px] gap-10">
          {["category-4.jpg", "category-5.jpg"].map((img, i) => (
            <div key={i}
              data-aos={i % 2 === 0 ? "" : "fade-left"}
              className="group overflow-hidden rounded-lg">
              <img
                src={`./images/${img}`}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductImage;
