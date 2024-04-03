import {parseFirebaseAuthError, showErrorToast} from '@constants/functional';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useFirebaseLogin} from '@services/firebase';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const useLogin = () => {
  const {navigateScreen, resetNavigate} = useNavigate();
  const {control, handleSubmit, setError} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const {mutate: submitLogin, error} = useFirebaseLogin();

  const onSubmit = async (data: any) => {
    const loginData: FirebaseLogIn = {
      email: data?.email,
      password: data?.password,
    };
    await submitLogin(loginData);
  };

  useEffect(() => {
    if (error) {
      const errTxt = parseFirebaseAuthError(error?.code);
      showErrorToast(errTxt);
    }
  }, [error]);

  return {navigateScreen, control, handleSubmit, onSubmit};
};

export default useLogin;
