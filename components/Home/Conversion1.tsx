import Image from 'next/image';

const Conversion1 = () => {
  return (
    <section className="relative w-full bg-white md:pb-20 ">
      <div className="relative max-w-[1300px] md:flex justify-between mx-auto px-4 md:px-0">
        {/* Left Card */}
        <div>
          <div
            className="
            bg-white rounded-2xl shadow-xl p-6 
            w-full md:w-[450px]
            mx-auto md:mx-0
            relative md:absolute md:top-0 md:left-0
          "
          >
            <h3 className="text-[18px] font-bold uppercase mb-3">
              Interface de conversation centralisée
            </h3>

            <p className="text-gray-700 text-[14px] leading-[22px] mb-5">
              Toutes vos conversations client dans une seule interface
              intuitive. Plus besoin de jongler entre applications – tout est au
              même endroit.
            </p>

            <ul className="space-y-3 text-[14px] text-gray-800">
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Historique complet par client
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Tous les canaux visibles
              </li>
              <li className="flex items-start gap-3">
                <Image
                  src="/images/check-orange.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                Interface mobile et desktop
              </li>
            </ul>
          </div>

          {/* Vertical Line + Icon (Hides on Mobile) */}
          <div className="hidden md:flex absolute  top-[270px] flex-col items-center">
            <div className="w-2 h-2 bg-gray-300 rounded-full mb-4" />
            <div className="border-l-[2.5px] border-dashed border-gray-300 h-60" />
            <div className="relative -top-4">
              <div className="bg-[#FF9500] rounded-full w-[90px] h-[90px] flex items-center justify-center shadow-xl">
                <Image src="/images/pen.svg" width={45} height={45} alt="pen" />
              </div>
            </div>
            <div className="-mt-3 border-l-[2px] border-dashed border-gray-300 h-60" />
            <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
          </div>
        </div>

        {/*right iPhone Mockup */}
        <div className="border border-amber-400 relative">
          <Image src="/images/apple.png" alt="phone" width={425} height={878} />

          {/* Chat Bubble */}
          <div className="absolute top-[19%] right-[12%] sm:right-[14%] md:right-[42px] ">
            <div className="bg-[#5FB544] text-white rounded-xl px-3 sm:px-4 py-2 text-[12px] sm:text-[13px] w-[180px] sm:w-[220px] leading-[17px] shadow">
              Allô ! Je tiens à ce que j’ai rassemblé tous les documents qu’il
              faut pour notre prochaine rencontre. Mais je dois confirmer.
              Possible de répliquer ?
              <br />
              <span className="text-[10px] sm:text-[11px] opacity-80">
                – Alphonse Clerc
              </span>
            </div>
          </div>
          {/* Bottom Badge */}
          <div className="absolute bottom-2 right-48 -translate-x-1/2 bg-white rounded-l-2xl z-0 shadow-lg  uppercase whitespace-nowrap">
            <h1 className="px-12 font-bold py-12 mr-40 text-[20px]">
              Tchat Omnichannel
            </h1>
          </div>
        </div>
        {/* Bottom Badge */}
      </div>
    </section>
  );
};

export default Conversion1;
