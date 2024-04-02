import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from '@hooks/useNavigate';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const useLogin = () => {
  const {navigateScreen} = useNavigate();
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  return {navigateScreen, control, handleSubmit};
};

export default useLogin;
