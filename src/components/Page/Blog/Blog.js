import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="my-5">
        <h2 className="py-5 text-4xl text-orange-700">
          Difference Between Authentication and Authorization?
        </h2>
        <p>
          Authentication is the process where user need to verify himself who is
          the user and Authorization determines how much a user can access.
          Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user.
          Authorization works through settings that are implemented and
          maintained by the organization. Authentication Verifies credentials
          and Grants or denies permissions
        </p>
      </div>

      <div className="my-5">
        <h2 className="py-5 text-4xl text-orange-700">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Right now i'm using firebase for authentication purpose. I can easily
          implement authentication by using authentication method like email,
          facebook, google, git hub etc. <br />
          Some alternative option of firebase - AuthO, Supabase, Authress,
          OneLogin etc
        </p>
      </div>

      <div className="my-5">
        <h2 className="py-5 text-4xl text-orange-700">
          What other services does firebase provide other than authentication?
        </h2>
        <p>
          Firebase is a full package that can help in developing your mobile or
          web applications faster with fewer resources and more efficiency.
          Firebase provides cloud messaging. Firebase Dynamic Links which is URL
          shortener. One of the powerful tool isGoogle Analytics. Firebase
          service helps making predictions about your product decisions. Another
          service is Remote Config. It helps in remotely change application UI
          and content, without publishing it again.
        </p>
      </div>
    </div>
  );
};

export default Blog;
