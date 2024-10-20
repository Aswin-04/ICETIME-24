
const CommitteeCard2 = ({name, designation}) => {
  return (
    <div className="max-sm:w-72 w-80 h-28 flex flex-col justify-center  px-6 py-8 space-y-2 text-center border-2 shadow-lg rounded">
    <h4 className="text-xl font-bold text-indigo-600">{name}</h4>
    <p className="text-sm font-medium text-slate-700">{designation}</p>
  </div>
  )
}

export default CommitteeCard2
