import React, { useEffect, useState } from "react";
import { getRtaings } from "../../services/getRtaings";

const Rating = ({ searchQuery }) => {
  const [ratings, setRatings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatingData = async () => {
      try {
        const ratingData = await getRtaings(searchQuery);
        setRatings(ratingData);
      } catch (err) {
        setError("Failed to fetch ratings. Please try again later.");
      }
    };
    fetchRatingData();
  }, [searchQuery]);

  return (
    <>
      <div className=" w-full h-full m-4 p-4 ">
        <div className="flex justify-center items-center m-8 p-8">
          <h2 className="font-semibold text-2xl ">Rating</h2>
        </div>
        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="flex justify-evenly items-start px-10 gap-10">
            {ratings?.map((rating, index) => (
              <div key={index}>
                <h2>{rating.Source}</h2>
                <p>{rating.Value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Rating;
