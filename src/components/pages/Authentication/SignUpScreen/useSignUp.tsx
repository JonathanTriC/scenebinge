import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useNavigation} from '@react-navigation/native';
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
  const {navigateScreen, popScreen} = useNavigate();
  const {control, handleSubmit} = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    resolver: zodResolver(formSchema),
  });

  return {navigation, navigateScreen, popScreen, control, handleSubmit};
};

export default useSignUp;
