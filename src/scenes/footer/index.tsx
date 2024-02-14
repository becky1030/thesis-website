import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-300 py-16">
      <div className="justify-centent mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            ejwoghrwilhgkrehbkfdhblkshblfshbl
            hriwobhrwljb;rlwjgb;lwgl;wrkg;bnfieb bhfieohbiwhbwlkbjkfbnkfxjvij
          </p>
          <p>@All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Mvfobsdb hiedwohveiow hviowhv</p>
          <p className="my-5">nvkflsnbklidhvsiod</p>
          <p>nvkflsnbklidhvsiod</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Mvfobsdb hiedwohveiow hviowhv</p>
          <p>(444)542-4443</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
