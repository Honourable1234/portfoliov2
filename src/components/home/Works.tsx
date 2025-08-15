import { projects } from "../../data/projects";

const Works = () => {
  return (
    <div id="skills" className="grid lg:grid-cols-2 mt-[24px] gap-[24px]">
      {projects.map((project, index) => {
        // Add a conditional class for the 5th item
        // const colSpanClass = index === 4 ? "lg:col-span-2 h-[350px]" : "";
        return (
          <div
            key={index}
            className={`group cursor-pointer relative work-card lg:rounded-[30px] rounded-[20px] lg:min-h-[650px] min-h-[350px] overflow-hidden bg-neutralDarker `}
          >
            <div className="h-full overflow-hidden">
              <img
                src={project.image}
                alt=""
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className=" absolute bottom-0 left-0 right-0  rounded-b-[20px] p-[25px] translate-y-full group-hover:translate-y-0 transition-transform duration-300 title-background">
                <div className="flex gap-x-[20px] items-center">
                  <h1
                    style={{ color: `${project.nameColor}` }}
                    className="text-[28px] uppercase"
                  >
                    {project.name}
                  </h1>
                  {project.link !== "" ? (
                    <a
                      href={project.link}
                      className="flex w-[48px] h-[48px] bg-gray-600/20 rounded-full justify-center items-center"
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.230287 0.840139L0.230733 1.12092C0.231027 1.30679 0.381543 1.4573 0.567412 1.4576L7.6245 1.4668L0.203495 8.88782C0.0731982 9.01811 0.0735366 9.23166 0.204247 9.36237L0.402294 9.56042C0.533004 9.69113 0.746556 9.69147 0.876853 9.56117L8.29786 2.14016L8.30905 9.19924C8.30934 9.38511 8.45986 9.53562 8.64573 9.53592L8.92651 9.53636C9.11238 9.53665 9.26242 9.38662 9.26212 9.20075L9.25087 0.854433C9.25058 0.668564 9.10006 0.518049 8.91419 0.517754L0.567882 0.506506C0.378058 0.506205 0.229993 0.65427 0.230287 0.840139Z"
                          fill={project.nameColor}
                        ></path>
                      </svg>
                    </a>
                  ) : (
                    <div
                      style={{ color: `${project.nameColor}` }}
                      className="card-work-soon "
                    >
                      In Progress
                    </div>
                  )}
                </div>
                <div>
                  <p style={{ color: `${project.nameColor}` }}>
                    {project.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
