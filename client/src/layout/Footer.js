const Footer = () => {
  // get current year
  const currentYear = new Date().getFullYear()
  return (
    <footer className='py-5 bg-dark'>
      <div className='container'>
        <p className='m-0 text-center text-white'>
          Copyright © NewsCenter {currentYear}
        </p>
      </div>
    </footer>
  )
}

export default Footer
