const Header = () => {
  const styles = {
    ContOfHeader: {
      width: '95vw',
      background: '#282C33',
      height: '60px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    DivOneNTwo: {
      width: '20%',
      display: 'flex',
      alignItems: 'center',
    },
    DivThree: {
      width: '60%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    divOfRoutes: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
    },
  };
  return (
    <>
      <div style={styles.ContOfHeader}>
        <div style={styles.DivOneNTwo}>
          <h4>Oxterhal</h4>
        </div>
        <div className="w-[60%]  justify-evenly items-center hidden lg:flex">
          <div style={styles.divOfRoutes}>
            <h5>
              <strong style={{ color: '#C778DD' }}>#</strong>
              Home
            </h5>
          </div>
          <div style={styles.divOfRoutes}>
            <h5>
              <strong style={{ color: '#C778DD' }}>#</strong>
              Projects
            </h5>
          </div>{' '}
          <div style={styles.divOfRoutes}>
            <h5>
              <strong style={{ color: '#C778DD' }}>#</strong>
              About
            </h5>
          </div>{' '}
          <div style={styles.divOfRoutes}>
            <h5>
              <strong style={{ color: '#C778DD' }}>#</strong>
              Contacts
            </h5>
          </div>
        </div>
        <div className="w-[60%]  justify-end items-center flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
export default Header;
