

export const SectionTitle = () => {
  return (
    <div className="w-full mt-20 mb-10 flex items-center justify-center">
      <div className="w-[90%] flex flex-col items-center">
        <div className="w-full my-3">
          <h3 className="text-3xl font-bold">Recent Writing</h3>
        </div>
        <div className="w-full h-2 bg-black rounded-xl">
          <div className="w-[20%] bg-red h-full rounded-inherit bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};
