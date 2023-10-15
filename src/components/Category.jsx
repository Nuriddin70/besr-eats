import { categories } from "../data/data"

function Category() {
  console.log(categories);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      {/* Categories*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <h1 className="font-bold sm:texl-xl">{item.name}</h1>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category