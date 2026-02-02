

const StoryCard = ({story}) => {
  return (
    <div >
      <div >

        
          <div
           
          >
            <img
  src={story.image}
  alt={story.name}
  className="w-28 h-28 mx-auto rounded-full border-[5px] border-gradient-to-r from-indigo-500 to-purple-600 object-cover shadow-lg"
/>

<h2 className="mt-5 text-2xl font-extrabold text-gray-900 tracking-tight">
  {story.name}
</h2>

<p className="text-indigo-600 font-semibold uppercase text-sm tracking-wide mt-1">
  {story.designation}
</p>

<p className="text-sm text-gray-400 italic mt-1">
  {story.company}
</p>

<p className="mt-4 text-sm text-gray-600">
  Experience:
  <span className="ml-1 font-bold text-gray-800">
    {story.experience}
  </span>
</p>

<div className="flex flex-wrap justify-center gap-2 mt-5">
  {story.skills.map((skill, index) => (
    <span
      key={index}
      className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition"
    >
      {skill}
    </span>
  ))}
</div>

<button
  className="mt-7 w-full py-2.5 rounded-full text-white font-semibold tracking-wide
  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
  hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
  shadow-md hover:shadow-lg transition-all duration-300"
>
  View Details
</button>

          </div>
       

      </div>
    </div>
  );
};

export default StoryCard;
