const Features = () => {
  return (
    <div>
      <section className="w-full py-16 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          TOUS VOS CANAUX DE COMMUNICATION EN
          <br />
          <span className="text-orange-500">
            <span className="text-black">UN </span>SEUL ENDROIT
          </span>
        </h2>

        {/* Sub Text */}
        <p className="text-sm text-gray-600 mt-3">
          Fini les conversations fragmentées – Tchat Omnicanal centralise tout.
        </p>
      </section>
    </div>
  );
};

export default Features;
