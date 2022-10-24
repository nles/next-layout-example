export default function Footer() {
  return (
    <footer className="bg-accent-2-500">
      <div className="section section-small pt-20 pb-20">
        <div className="md:container md:mx-auto max-w-7xl pr-6 pl-6">
          <div className="row-cta sm:flex sm:justify-between sm:items-center text-center sm:text-left">
            <h3 className="cta-row-heading text-3xl font-medium uppercase text-white max-w-sm mx-auto sm:mx-0">
              Footer text
            </h3>
          </div>
        </div>
      </div>
      <hr className="border-white border-opacity-10" />

      <div className="footer text-center sm:text-left">
        <div className="md:container md:mx-auto max-w-7xl pr-6 pl-6">
          <div className="footer-row sm:flex pt-20 pb-20">
            <div className="footer-left">
              <a href="/" aria-current="page" className="footer-logo w-inline-block w--current">
                <img
                  className="m-auto"
                  src="https://via.placeholder.com/350x150"
                  width="145"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="footer-lower-row pt-5 pb-10">
            <div>© Example</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
