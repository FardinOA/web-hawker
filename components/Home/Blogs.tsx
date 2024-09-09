import Image from "next/image";
import React from "react";

const Blogs = () => {
  return (
    <section className="space-y-8">
      <p className="text-center text-3xl lg:text-5xl ">Our Recent Blogs</p>
      <div className="container   space-y-4 lg:space-y-0 lg:grid  lg:grid-cols-4 lg:gap-2 ">
        {Array(4)
          .fill(0)
          .map((ele, ind) => (
            <div
              key={`blog-${ind}`}
              className="border pb-4 cursor-pointer group lg:grid lg:grid-rows-subgrid lg:row-start-1 lg:row-end-4  rounded-xl hover:rounded-tl-[40px] hover:rounded-br-[40px] overflow-hidden group transition-all duration-700 relative  "
            >
              <Image
                src={`/images/b2.jpg`}
                width={0}
                height={200}
                sizes="100"
                alt="blog"
                className="object-cover w-full    "
              />

              <p className="text-2xl group-hover:text-primary  tracking-wider mt-2 px-4 lg:px-6 transition-all duration-500  line-clamp-2  ">
                Expedita laboriosam libero illo delectus, dolorum nemo veniam
                dolorem tempore voluptatem in minus autem neque eum eius sint
                iusto
              </p>

              <p className="text-xl line-clamp-3 mt-2 px-4 lg:px-6 lg:line-clamp-5 font-sans text-gray-900 text-pretty    ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
                modi nihil eum voluptatibus, tempora nam distinctio architecto,
                explicabo provident delectus ipsam neque? Voluptate consectetur
                ratione sint nesciunt veritatis. Dolore vitae voluptas rerum, at
                ipsam quis fuga esse culpa cupiditate officia voluptatem
                adipisci quaerat. Expedita laboriosam libero illo delectus,
                dolorum nemo veniam dolorem tempore voluptatem in minus autem
                neque eum eius sint iusto
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Blogs;
