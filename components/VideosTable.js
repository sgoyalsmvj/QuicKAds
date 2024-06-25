import React from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

export function addCommasToNumber(number) {
  const numStr = number.toString();
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return numStr.replace(regex, ',');
}

const VideosTable = ({ videosData }) => {
  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="table-auto w-full rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Thumbnail</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Title</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Brand</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Total Ad Spend</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Ad Spend 30</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Publish Date</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {videosData.results.map((video, index) => (
              <tr key={index} className="text-sm md:text-base border dark:border-gray-700">
                <td className="px-2 py-1 md:px-4 md:py-2">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                </td>
                <td className="font-semibold px-2 py-1 md:px-4 md:py-2">
                  {video.title}
                </td>
                <td className="font-semibold text-blue-400 px-2 py-1 md:px-4 md:py-2">
                  {video.brandName}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  ${video.totalSpend ? addCommasToNumber(video.totalSpend) : 0}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  ${video.last30Days ? addCommasToNumber(video.last30Days) : 0}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  {video.publishedAt.split("T")[0]}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  {formatTime(video.duration)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center p-2 space-x-4">
        <button
          className="shadow px-3 border py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg"
          disabled={videosData.page === 1}
        >
          <IoArrowBackOutline />
        </button>
        <span className="mx-2">{videosData.page}</span>
        <button
          className="shadow border px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg"
          disabled={!videosData.hasMore}
        >
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default VideosTable;
