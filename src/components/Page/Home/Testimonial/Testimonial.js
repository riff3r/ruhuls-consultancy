import React from "react";
import HeaderCenter from "../../../UI/HeaderCenter/HeaderCenter";

const Testimonial = () => {
  return (
    <div className="mt-10">
      <HeaderCenter title="Testimonial" subtitle="What They Say About Me" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="shadow-lg p-10">
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-8/12 px-4 mb-5">
                <img
                  src="https://i.ibb.co/d613gFq/review-2.jpg"
                  alt="..."
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div className="h-3 text-3xl text-left text-gray-600">“</div>
            <p className="px-4 text-sm text-center text-gray-600">
              I highly recommend. Best service . My brother's study visa got
              rejected and no other consultant was ready to reapply the file as
              everyone was scared because of the refusal and just kept on giving
              excuses, but consultants at visa sure took it with grace and got
              the visa approved just in 4 days.
            </p>
            <div className="h-3 text-3xl text-right text-gray-600">”</div>
          </div>

          <div className="shadow-lg p-10">
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-8/12 px-4 mb-5">
                <img
                  src="https://i.ibb.co/JHZxjM6/review-3.jpg"
                  alt="..."
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div className="h-3 text-3xl text-left text-gray-600">“</div>
            <p className="px-4 text-sm text-center text-gray-600">
              Very thorough and organised. Gave detailed information and
              executed the file in a professional manner. I have had two visas
              from Croyez Immigration and both were granted without any hassle.
              Keep up the good work
            </p>
            <div className="h-3 text-3xl text-right text-gray-600">”</div>
          </div>

          <div className="shadow-lg p-10">
            <div className="flex flex-wrap justify-center">
              <div className="w-6/12 sm:w-8/12 px-4 mb-5">
                <img
                  src="https://i.ibb.co/brNM3Zq/review-1.jpg"
                  alt="..."
                  className="shadow rounded-full max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div className="h-3 text-3xl text-left text-gray-600">“</div>
            <p className="px-4 text-sm text-center text-gray-600">
              I really appreciate the team of Croyez is highly recommendable and
              very professional about the Canada PR. Even though I started my PR
              Process at this pandemic situation they assisted me perfectly for
              the initial level of documentations. Very responsive and quality
              for money. So finally i have found good immigration consultants.
            </p>
            <div className="h-3 text-3xl text-right text-gray-600">”</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
