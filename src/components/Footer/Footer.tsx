export default function Footer() {
  return (
    <footer className="bg-[var(--c3)] text-white flex items-center justify-center w-full">
      <div className="w-[1280px] max-w-[1280px] p-8 flex items-start justify-between">
        <div>
          <div className="flex items-center">
            <p className="gradient text-4xl font-bold">THE</p>
            <p className="w-[45px] h-7 ml-2 mt-1 rounded-[50px] bg-[var(--c2)]"></p>
          </div>
          <div className="gradient flex items-center text-4xl font-bold">
            <p>M</p>
            <p className="w-7 h-7 mt-2 rounded-[50%] bg-[var(--c2)]"></p>
            <p>VIE</p>
          </div>
          <div className="flex items-center">
            <p className="w-[55px] h-7 mr-2 mt-2 rounded-[50px] bg-[var(--c2)]"></p>
            <p className="gradient text-4xl font-bold">DB</p>
          </div>
        </div>
        <div>
          <p>Built using following </p>
          <div>tech</div>
        </div>
        <div>
          <p>Name: Kedar Babaleshwar</p>
          <p>Email : babaleshwarkedar@gmail.com</p>
          <p>Mobile : 6361579289</p>
          <p>GitHub : Logo</p>
        </div>
      </div>
    </footer>
  );
}
