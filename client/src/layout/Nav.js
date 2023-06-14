import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link href='/' legacyBehavior>
          <a className='navbar-brand'>NewsCenter</a>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link href='/about' legacyBehavior>
                <a className='nav-link active' aria-current='page'>
                  About
                </a>
              </Link>
            </li>
          </ul>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  My Account
                </a>
                <div
                  className='dropdown-menu dropdown-menu-end animate slideIn'
                  aria-labelledby='navbarDropdown'
                >
                  <Link href='account/profile' legacyBehavior>
                    <a className='dropdown-item'>My Profile</a>
                  </Link>
                  <Link href='account/login' legacyBehavior>
                    <a className='dropdown-item'>Login</a>
                  </Link>
                  <Link href='account/register' legacyBehavior>
                    <a className='dropdown-item'>Register</a>
                  </Link>

                  <div className='dropdown-divider' />
                  <Link href='' legacyBehavior>
                    <a className='dropdown-item'>Logout</a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
