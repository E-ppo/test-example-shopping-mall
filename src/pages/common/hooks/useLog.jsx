import { apiRoutes } from '@/apiRoutes';
import { api } from '@/helpers/axios';
import { useUserStore } from '@/store/user';

const level = {
  INFO: 'INFO',
  ERROR: 'ERROR',
};

const useLog = () => {
  const user = useUserStore(state => state.user);

  const sendInfoLog = message => {
    const userId = user?.id;
    if (!userId) {
      return;
    }

    api.post(apiRoutes.log, {
      userId,
      level: level.INFO,
      message: JSON.stringify(message),
    });
  };

  const sendErrorLog = message => {
    const userId = user?.id;
    if (!userId) {
      return;
    }

    api.post(apiRoutes.log, {
      userId,
      level: level.ERROR,
      message: JSON.stringify(message),
    });
  };

  return {
    sendInfoLog,
    sendErrorLog,
  };
};

export default useLog;
