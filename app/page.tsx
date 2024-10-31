import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full h-[100vh]">

      <Image
        src="/giacomino.svg"
        height={100}
        width={900}
        alt="Giacomino"
      className="absolute -bottom-32 -right-56"
        priority
      />
      <div className="absolute bottom-[15%]  right-[55%]">
        <div className="flex flex-col">
          <div className="mb-10">
            <a href="mailto:lavoro@cazzi.it" className="relative">Contatti</a>
          </div>

          <div className="mb-10">
          <a href="#Progetti" className="relative">Progetti</a>
          </div>
          
          <div className="mb-10 ml-10">
          <a href="#Università" className="relative">Università</a>
          </div>

          <div className="mb-10">
          <a href="#Scuola" className="relative">Scuola</a>
          </div>
        </div>
      </div>
    </div>
  );
}
