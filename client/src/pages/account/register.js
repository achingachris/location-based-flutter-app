import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

const register = () => {
  const router = useRouter();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        }),
      });

      if (response.ok) {
        // Registration successful, redirect to profile page
        router.push('/profile');
      } else {
        // Registration not successful, handle error
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during registration');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-10 col-xl-9 mx-auto'>
          <div className='card flex-row my-5 border-0 shadow rounded-3 overflow-hidden'>
            <div className='card-body p-4 p-sm-5'>
              <h5 className='card-title text-center mb-5 fw-light fs-5'>
                Register
              </h5>
              <form>
                <div className='form-floating mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    id='floatingInputUsername'
                    placeholder='myusername'
                    required=''
                    autofocus=''
                  />
                  <label htmlFor='floatingInputUsername'>Username</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='email'
                    className='form-control'
                    id='floatingInputEmail'
                    placeholder='name@example.com'
                  />
                  <label htmlFor='floatingInputEmail'>Email address</label>
                </div>
                <hr />
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='floatingPassword'
                    placeholder='Password'
                  />
                  <label htmlFor='floatingPassword'>Password</label>
                </div>
                <div className='form-floating mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='floatingPasswordConfirm'
                    placeholder='Confirm Password'
                  />
                  <label htmlFor='floatingPasswordConfirm'>
                    Confirm Password
                  </label>
                </div>
                <div className='d-grid mb-2'>
                  <button
                    className='btn btn-lg btn-primary btn-login fw-bold text-uppercase'
                    type='submit'
                    onSubmit={handleSubmit}
                  >
                    Register
                  </button>
                </div>
                <hr className='my-4' />
                {/* {error && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    {error}
                  </div>
                )} */}
                <Link href='/account/login' legacyBehavior>
                  <a className='d-block text-center mt-2 small'>
                    Have an account? Sign In
                  </a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register
