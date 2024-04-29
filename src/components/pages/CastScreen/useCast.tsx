import {apiGet} from '@api/wrapping';
import {URL_PATH} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {useQuery} from '@tanstack/react-query';
import {ICastDetail} from 'type/castDetail';

const useCast = () => {
  const {navigation, navigateScreen, getRouteParams} = useNavigate();
  const {castID, name} = getRouteParams<CastScreenParams>();

  const {data: detailCastData} = useQuery<ICastDetail>({
    queryKey: ['detailCast'],
    queryFn: async () => {
      const res = await apiGet({
        url: URL_PATH.detailCast(castID),
        fullResponse: true,
      });
      return res;
    },
  });

  return {
    navigation,
    navigateScreen,
    name,
    detailCastData,
  };
};

export default useCast;
