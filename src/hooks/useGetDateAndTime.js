import { useEffect, useState } from 'react';

import * as utils from '../utils';

const useGetDateAndTime = () => {
  const dayNumber = utils.getDayNumber();
  const monthName = utils.getMonthName();
  const timeAtLoad = utils.getTime();
  const [currentTime, setCurrentTime] = useState(timeAtLoad);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(utils.getTime());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return { dayNumber, monthName, currentTime };
};

export default useGetDateAndTime;
