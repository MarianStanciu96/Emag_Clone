const About = () => {
  const smartphones = [
    { name: "Pixel 8a", id: 1, picturePath: "Pictures/Google Pixel 8a.jpg" },
    {
      name: "iPhone 15 Plus",
      id: 2,
      picturePath: "Pictures/iPhone 15 Plus.jpg",
    },
    {
      name: "iPhone 15 Pro Max",
      id: 3,
      picturePath: "Pictures/iPhone 15 Pro Max.jpg",
    },
    { name: "iPhone 15", id: 4, picturePath: "Pictures/iPhone 15.jpg" },
    { name: "One Plus 12", id: 5, picturePath: "Pictures/One Plus 12.jpg" },
    { name: "One Plus 12R", id: 6, picturePath: "Pictures/One Plus 12R.jpg" },
  ];

  const cubes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {}
      <div className="flex justify-around w-full flex-wrap">
        {smartphones.map((smartphone) => {
          return (
            <div key={smartphone.id}>
              <h3>{smartphone.name}</h3>
              <img src={smartphone.picturePath} alt="" className="w-96" />
            </div>
          );
        })}
      </div>

      <div className="flex justify-around w-full flex-wrap">
        {cubes.map((cube) => (
          <div key={cube} className="w-96 h-96 bg-emerald-700 mb-4">
            {cube}
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
