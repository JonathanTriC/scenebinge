import {parseFirebaseAuthError, showErrorToast} from '@constants/functional';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useNavigation} from '@react-navigation/native';
import {useFirebaseSignUp} from '@services/firebase';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const formSchema = z
  .object({
    full_name: z.string().min(3, 'Full name must be at least 3 characters'),
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm_password: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password'],
  });

const useSignUp = () => {
  const navigation = useNavigation();
  const {navigateScreen, popScreen, resetNavigate} = useNavigate();
  const {control, handleSubmit, setError} = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: zodResolver(formSchema),
  });
  const {mutate: submitSignUp, error} = useFirebaseSignUp();

  const onSubmit = async (data: any) => {
    const signUpData: FirebaseSignUp = {
      email: data?.email,
      password: data?.password,
      full_name: data?.full_name,
    };

    await submitSignUp(signUpData);
  };

  useEffect(() => {
    if (error) {
      const errTxt = parseFirebaseAuthError(error?.code);
      showErrorToast(errTxt);
    }
  }, [error]);

  return {
    navigation,
    navigateScreen,
    popScreen,
    control,
    handleSubmit,
    onSubmit,
  };
};

export default useSignUp;
