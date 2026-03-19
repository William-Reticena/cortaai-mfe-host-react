import { useNavigate } from 'react-router';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    const username = input?.value || '';

    alert(`Logged in as ${username}`);

    if (username.toLowerCase() === 'barber') {
      navigate('/b');
    } else {
      navigate('/c');
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input type='text' placeholder='Username' />
      <input type='password' placeholder='Password' />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
