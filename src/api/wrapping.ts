import client from './index';
import {logApi} from './utils';

const apiGet: <T = any>(props: ApiProps) => Promise<T> = async (
  props: ApiProps,
) => {
  try {
    const fullResponse = props?.fullResponse ?? false;
    const resHeaders = props?.resHeaders ?? false;
    const res = await client.get(props?.url, {
      ...props.config,
      headers: props?.headers,
    });

    logApi({
      nameFunction: 'apiGet',
      tags: props?.tags,
      body: props?.body,
      res: res,
    });

    return Promise.resolve(
      fullResponse ? res?.data : resHeaders ? res?.headers : res?.data?.results,
    );
  } catch (e: any) {
    if ((props.retry ?? 0) > 0) {
      return await apiGet({...props, retry: props.retry ? props.retry - 1 : 0});
    }

    logApi({
      nameFunction: 'apiGet',
      tags: props?.tags,
      body: props?.body,
      e: e,
    });

    const errorData = e?.response?.data?.message || 'Terjadi Kesalahan';
    return Promise.reject(errorData);
  }
};

const apiPost: <T = any>(props: ApiProps) => Promise<T> = async (
  props: ApiProps,
) => {
  try {
    const fullResponse = props?.fullResponse ?? false;
    const res = await client.post(props?.url, props?.body, {
      ...props.config,
      headers: props?.headers,
    });

    return Promise.resolve(fullResponse ? res?.data : res.data.data);
  } catch (e: any) {
    if ((props.retry ?? 0) > 0) {
      return await apiPost({
        ...props,
        retry: props.retry ? props.retry - 1 : 0,
      });
    }

    const errorData = e?.response?.data?.message || 'Terjadi Kesalahan';
    return Promise.reject(errorData);
  }
};

export {apiGet, apiPost};
