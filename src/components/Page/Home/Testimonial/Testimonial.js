import React from "react";
import HeaderCenter from "../../../UI/HeaderCenter/HeaderCenter";

const Testimonial = () => {
  return (
    <div className="mt-10">
      <HeaderCenter
        title="Testimonial"
        subtitle="What They Say About Homefoodie"
      />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="shadow-lg p-10">
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:w-8/12 px-4 mb-5">
                <img
                  src="https://i.ibb.co/d613gFq/review-2.jpg"
                  alt="..."
                  class="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div class="h-3 text-3xl text-left text-gray-600">“</div>
            <p class="px-4 text-sm text-center text-gray-600">
              You can select from couple of pre-made menus for every occasion
              that should please many different palates or work with us to
              create your own menu.
            </p>
            <div class="h-3 text-3xl text-right text-gray-600">”</div>
          </div>

          <div className="shadow-lg p-10">
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:w-8/12 px-4 mb-5">
                <img
                  src="https://i.ibb.co/JHZxjM6/review-3.jpg"
                  alt="..."
                  class="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div class="h-3 text-3xl text-left text-gray-600">“</div>
            <p class="px-4 text-sm text-center text-gray-600">
              Planning an important business meeting with your partners? Impress
              them with lunch in Royal Plate. Royal Plate covers everything from
              business lunches, to custom team building programs and corporate
              parties.
            </p>
            <div class="h-3 text-3xl text-right text-gray-600">”</div>
          </div>

          <div className="shadow-lg p-10">
            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:w-8/12 px-4 mb-5">
                <img
                  src="https://i.ibb.co/brNM3Zq/review-1.jpg"
                  alt="..."
                  class="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div class="h-3 text-3xl text-left text-gray-600">“</div>
            <p class="px-4 text-sm text-center text-gray-600">
              Weather you are celebrating your birthday, have a family reunion
              or something else, we'll make it enjoying and memorable. Our
              experts have years of experience in party planning
            </p>
            <div class="h-3 text-3xl text-right text-gray-600">”</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
