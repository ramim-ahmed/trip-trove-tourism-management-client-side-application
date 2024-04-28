import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import reviewProfileOne from "../assets/r1.jpeg";
import reviewProfileTwo from "../assets/r2.webp";
import reviewProfilethree from "../assets/r3.jpeg";
export default function Reviews() {
  return (
    <div className="grid grid-cols-12 bg-gray-100 dark:bg-black">
      <div className="lg:col-span-5 col-span-12">
        <img
          className="h-full object-cover"
          src="https://images.unsplash.com/photo-1712650827891-cf87e3b8aaec?q=80&w=1539&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="lg:col-span-7 col-span-12 py-10 flex items-center justify-center px-3">
        <div>
          <div>
            <h1 className="text-3xl font-medium text-center">Our Reviews</h1>
          </div>
          <Carousel className="w-[300px] md:w-[450px] mt-10">
            <CarouselContent className="w-[300px] md:w-[450px]">
              <CarouselItem className="w-[300px] md:w-[450px]">
                <div className="">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={reviewProfileOne}
                    />
                    <p className="leading-relaxed">
                      I have been your customer since 2019. And every time I
                      book with you I know I am getting the best. First my Fiji
                      trip and now the Bali trip. I will again come back to you
                      for another annual holiday. Thanks you
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-white">
                      Avantee Chatterjee
                    </h2>
                    <p className="text-gray-500">Malaysia</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-[300px] md:w-[450px]">
                <div className="">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={reviewProfileTwo}
                    />
                    <p className="leading-relaxed">
                      Great Communication from Start to Finish with everything
                      promoted delivered.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-white">
                      Timothy Anderson
                    </h2>
                    <p className="text-gray-500">Indonesia</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="w-[300px] md:w-[450px]">
                <div className="">
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src={reviewProfilethree}
                    />
                    <p className="leading-relaxed">
                      So easy to deal with. Everything was organised and the
                      itinerary sent which was easy to understand & navigate.
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-white">
                      Scott Frewer
                    </h2>
                    <p className="text-gray-500">Thailand</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
