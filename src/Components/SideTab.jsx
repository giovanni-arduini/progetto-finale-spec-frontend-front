export default function SideTab({ title, content, onClose, show, onRemove }) {
  return (
    <div
      className={`z-1 fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr] transition duration-300 ease-in-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="grid gap-5 p-4">
        <button
          className="cursor-pointer bg-black text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div>
        <h2 className="p-5 text-white text-2xl">{title}</h2>
        <div className="p-5">
          <ul className="flex flex-col gap-10 justify-between  text-white p-2 border-b-2 border-slate-700 round">
            {content}
          </ul>
        </div>
      </div>
    </div>
  );
}
