import { useEffect, useState } from 'react';

import * as utils from '../utils';

const useGetDateAndTime = () => {
  const dayNumber = utils.getDayNumber();
  const monthName = utils.getMonthName();
  const [currentTime, setCurrentTime] = useState(utils.getTime());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(utils.getTime());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, [currentTime]);

  return { dayNumber, monthName, currentTime };
};

export default useGetDateAndTime;
