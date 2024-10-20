
const CommitteeCard = ({name, designation}) => {
  return (
    <div className="flex flex-col  h-full">
      <div className="flex flex-col justify-center flex-grow px-6 py-8 space-y-2 text-center border-2 shadow-lg rounded">
        <h4 className="text-xl font-bold text-indigo-600">{name}</h4>
        <p className="text-sm font-medium text-slate-700">{designation}</p>
      </div>
    </div>
  );
};

export default CommitteeCard;
