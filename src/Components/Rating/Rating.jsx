import React from "react";

const Rating = () => {
  return (
    <div className="flex justify-around text-sm font-Eina01-Regular dark:text-gray-300 mt-4">
      <div>
        Trusted by more than
        <span className="text-purple-950 dark:text-primary-light font-bold  ">1000+</span>
        <br />
        users across the country
      </div>
      <div className="percent">
        <div className="text-purple-950 dark:text-primary-light text-3xl font-semibold font-Eina01-Regular leading-30 ">
          1K
        </div>
        <div>
          Ratings <br></br>users
        </div>
      </div>
      <div className="percent">
        <div className="text-purple-950 dark:text-primary-light text-3xl font-Eina01-Regular font-semibold">
          20K
        </div>
        <div>
          Successful<br></br> Transactions
        </div>
      </div>
      <div className="percent">
        <div className="text-purple-950 dark:text-primary-light font-semibold text-3xl font-Eina01-Regular">
          90%
        </div>
        <div>
          Satisfied and<br></br> Happy Client
        </div>
      </div>
    </div>
  );
};

export default Rating;
