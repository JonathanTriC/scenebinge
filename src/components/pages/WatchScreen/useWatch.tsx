import {apiGetWithoutToken} from '@api/wrapping';
import {YT_METADATA} from '@constants/url';
import {useNavigate} from '@hooks/useNavigate';
import {useQuery} from '@tanstack/react-query';

const useWatch = () => {
  const {popScreen, getRouteParams} = useNavigate();
  const {youtubeKey, name} = getRouteParams<WatchScreenParams>();

  const {data: videoMetadata} = useQuery<IVideoMetadata>({
    queryKey: ['videoMetadata'],
    queryFn: async () => {
      const res = await apiGetWithoutToken({
        url: YT_METADATA(youtubeKey),
        fullResponse: true,
      });
      return res;
    },
  });

  const videoData = videoMetadata?.items?.[0]?.snippet;

  return {
    popScreen,
    youtubeKey,
    name,
    videoData,
  };
};

export default useWatch;
