import { ResumeData } from "./types";

// CV base constants (ready to import where needed)
export const titulo = "3D Artist / Unreal Engine Developer / Web Developer";
export const location = "Buenos Aires, Argentina";
export const email = "juan.maldini@outlook.com";
export const phone = "+54 9 3576 474180";

// Compute dynamic years of experience since July 2014
const YEARS_START_DATE = new Date(2015, 1, 1); // Month is 0-based (6 = July)
const yearsOfExperience = (() => {
  const now = new Date();
  let years = now.getFullYear() - YEARS_START_DATE.getFullYear();
  const monthDiff = now.getMonth() - YEARS_START_DATE.getMonth();
  const beforeAnniversary =
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < YEARS_START_DATE.getDate());
  if (beforeAnniversary) years--;
  return Math.max(years, 0);
})();

// About Me paragraphs (render each item as a <p>)
export const aboutMe: string[] = [
  `As a 3D Artist and Developer with over ${yearsOfExperience} years of experience, I am passionate about integrating creative and technical skills. While my background is rooted in Unreal Engine and 3D, I am currently expanding my expertise into web development and broader areas of digital production.`,
  "My experience in virtual production, development, modeling, VFX, and AI technologies has equipped me with a unique skill set to tackle complex projects and adapt to evolving industry trends.",
  "I am always looking for new opportunities to expand my knowledge and collaborate with talented teams. I am open to relocation to continue advancing my career.",
];

export const resumeData: ResumeData = {
  experiences: [
    {
      position: "Technical Artist & Unreal Engine Developer",
      company: "Vanishing Point 3D",
      location: "Buenos Aires, Argentina",
      period: "04/2025 - Present",
      description:
        "As an Unreal Engine Developer, I design and develop interactive 3D applications and product configurators that integrate real-time visualization with backend systems. My work involves creating immersive environments and digital experiences where clients can explore, customize, and manage their products online. These applications connect with AWS services for authentication, data storage, and API communication, ensuring responsive interaction between Unreal Engine’s Pixel Streaming and web frontends. I also handle 3D modeling and visualization tasks using 3ds Max, Blender, and Houdini, combining artistic and technical workflows to deliver efficient and high-quality results.",
      technologies: [
        "3ds Max",
        "Blender",
        "Houdini",
        "Unreal Engine",
        "FStorm",
        "MaxScript",
        "Illustrator",
        "Photoshop",
        "Git",
        "GitHub",
        "AWS",
        "Visual Studio",
      ],
    },
    {
      position: "Unreal Engine Developer",
      company: "In2Real",
      location: "Remote",
      period: "01/2025 - 03/2025",
      description:
        "Updated and optimized the company's internal plugin, enhancing project visualization and improving artist's workflow. Implemented new tools using C++, Blueprints, and Python, adapting functionalities to Unreal Engine 5.0 - 5.5. Also updated materials with Substrate and worked with Plastic SCM for version control.",
      technologies: [
        "Unreal Engine",
        "Git",
        "Plastic SCM",
        "C++",
        "Python",
        "Blueprint",
      ],
    },
    {
      position: "3D Artist & Unreal Engine Generalist",
      company: "Byzantian Interactive, Inc.",
      location: "Remote",
      period: "04/2024 - 06/2024",
      description:
        "3D Artist & Unreal Generalist specialized in procedural 3D modeling using Houdini, with a focus on integrating assets into Unreal Engine for game design purposes. Proficient in landscape and environment creation using Unreal Engine and procedural content generation tools like PCG and Houdini. Collaborating remotely with a talented team via GitHub for seamless collaboration.",
      technologies: [
        "3ds Max",
        "Blender",
        "Houdini",
        "Unreal Engine",
        "After Effects",
        "Illustrator",
        "Git",
        "GitHub",
      ],
    },
    {
      position: "3D Construction Visualizer & BIM Consultant",
      company: "XL Consulting",
      location: "Remote",
      period: "09/2023 - 01/2024",
      description:
        "I heavily contributed to the app's development and pipeline, particularly in integrating BIM 4D models. My tasks involved automating data import from Synchro, iTwin, or SketchUp into Unreal Engine, alongside automating scene setup using Python scripts.",
      technologies: [
        "3ds Max",
        "Unreal Engine",
        "After Effects",
        "Illustrator",
        "Git",
        "GitHub",
        "Python",
        "Visual Studio",
      ],
    },
    {
      position: "Unreal Engine VR Developer",
      company: "HITO",
      location: "Hybrid",
      period: "06/2023 - 09/2023",
      description:
        "I collaborate in the development of the VR app and team's pipeline. Focused on technical environments and modeling assets to integrate into the virtual experience.",
      technologies: [
        "3ds Max",
        "Blender",
        "Unreal Engine",
        "Illustrator",
        "Git",
        "GitHub",
        "Visual Studio",
      ],
    },
    {
      position: "3D Artist - Unreal Engine Developer",
      company: "3DUS",
      location: "Córdoba, Argentina",
      period: "07/2021 - 08/2023",
      description:
        "As a Technical 3D Artist, I specialize in modeling furniture, buildings, and works of art to create high-quality representations. Additionally, I develop projects in Unreal Engine 5 for real estate web applications.",
      technologies: [
        "3ds Max",
        "Blender",
        "Houdini",
        "Unreal Engine",
        "Corona Renderer",
        "V-Ray",
        "Itoo Software",
        "After Effects",
        "Illustrator",
        "Photoshop",
        "Git",
        "GitHub",
        "Visual Studio",
      ],
    },
    {
      position: "3D Artist",
      company: "3DM Digital",
      location: "Buenos Aires, Argentina",
      period: "01/2021 - 06/2021",
      description:
        "As a General 3D Artist, my role involves decorating scenes to ensure environments appear both realistic and visually appealing, essential for architectural visualization in commerce like animations and renderings.",
      technologies: [
        "3ds Max",
        "Corona Renderer",
        "V-Ray",
        "Itoo Software",
        "After Effects",
        "Illustrator",
        "Photoshop",
      ],
    },
    {
      position: "3D Artist",
      company: "Arktura",
      location: "Remote",
      period: "07/2020 - 10/2020",
      description:
        "Responsible for lighting the virtual scenes, texturing 3D models, and decorating environments with company products such as HVAC elements and panel decorations across various commercial settings.",
      technologies: [
        "3ds Max",
        "Corona Renderer",
        "V-Ray",
        "Itoo Software",
        "Photoshop",
      ],
    },
    {
      position: "3D Artist",
      company: "Archelier Studio",
      location: "Córdoba, Argentina",
      period: "07/2018 - 10/2018",
      description:
        "From blueprints to the final product, I lead the modeling of buildings, followed by UV mapping, texturing, and rendering. Subsequently, I oversee the transition to post-production, ensuring a seamless and polished outcome.",
      technologies: [
        "3ds Max",
        "V-Ray",
        "Itoo Software",
        "After Effects",
        "Illustrator",
        "Photoshop",
      ],
    },
  ],
  education: [
    // Educación formal
    {
      titulo: "Dr. Dalmacio Vélez Sársfield",
      subtitulo: "2008 - 2014",
      datos: ["High School - Bachelor with Orientation in Natural Sciences"],
    },
    {
      titulo: "UNC",
      subtitulo: "2015 - 2019",
      datos: ["Architecture / incomplete"],
    },
    // Cursos y certificaciones
    {
      titulo: "Image Campus",
      subtitulo: "2021",
      datos: [
        "Virtual Production",
        "Programación C++ para Videojuegos",
        "Modelado 3D para videojuegos",
      ],
    },
    {
      titulo: "Coderhouse",
      subtitulo: "2022",
      datos: ["Desarrollo Web", "Diseño 3D (Blender)"],
    },
    {
      titulo: "Hola Mundo",
      subtitulo: "2023",
      datos: [
        "Ultimate JavaScript",
        "Ultimate Python: de cero a programador experto",
        "Ultimate React",
      ],
    },
    {
      titulo: "DevTalles",
      subtitulo: "2024",
      datos: ["Node js de Cero a Experto"],
    },
    {
      titulo: "Codeacademy",
      subtitulo: "2022",
      datos: ["Learn C++"],
    },
    {
      titulo: "Figma",
      subtitulo: "2024",
      datos: ["UI Design & Figma Mastery"],
    },
    {
      titulo: "Build Academia",
      subtitulo: "2018",
      datos: [
        "V-ray For 3DS MAX ArchViz N1",
        "V-ray For 3DS MAX Professional N2",
        "Certification by BuildGroup ChaosGroup & ItooSoftware Authorized Training Center",
      ],
    },
    {
      titulo: "DVIZ",
      subtitulo: "2021",
      datos: [
        "Virtual Reality Course for Archviz",
        "Advanced Blueprints for Archviz",
      ],
    },
    {
      titulo: "Rebelway",
      subtitulo: "2022",
      datos: ["Houdini - Introduccion to FX"],
    },
    {
      titulo: "Udemy",
      subtitulo: "2018 - 2025",
      datos: [
        "Unreal Engine desde 0: Crea 3 Juegos con Blueprints y C++",
        "Unreal Engine 4 Class: Blueprints",
        "Unreal Engine 4 - Creación de materiales desde 0 a AVANZADO",
        "Unreal Engine 5 - Learn to Make a Professional Main Menu",
        "Master Unreal Engine 4 Desarrollo Videojuegos con Blueprints",
        "3D Studio Max: Espacios arquitectónicos",
        "Houdini - Procedural Japanese Castle in Unreal Engine",
        "Houdini - Procedural House",
        "Houdini - Master Create Stunning fx",
        "Houdini - Procedural Chinese knife",
        "Blender 2.9 Iluminación y Render con Cycles de 0 a EXPERTO",
        "Blender 3D - Model and texture a stylised shield",
        "Blender 2.9 EXPERTO en Modelado 3D desde CERO hasta Avanzado",
        "Blender 2.9x Modelado 3D para Videojuegos FLUJO COMPLETO",
        "Blender 2.8 EXPERTO en UV Mapping de Assets para Videojuegos",
      ],
    },
    {
      titulo: "Others",
      subtitulo: "2016 - 2025",
      datos: [
        "Houdini - Art Directing Cloth in Houdini",
        "Autodesk 3ds Max Master Class MaxScript Secrets Revealed",
      ],
    },
  ],
  skills: [
    { skill: "Spanish", level: "Native" },
    { skill: "English", level: "Advanced" },
    { skill: "Italian", level: "Beginner" },
    { skill: "Unreal Engine", level: "Advanced" },
    { skill: "Niagara", level: "Intermediate" },
    { skill: "Blueprints", level: "Advanced" },
    { skill: "3ds Max", level: "Expert" },
    { skill: "Blender", level: "Intermediate" },
    { skill: "Houdini", level: "Intermediate" },
    { skill: "ZBrush", level: "Beginner" },
    { skill: "Rizom UV", level: "Intermediate" },
    { skill: "V-Ray", level: "Advanced" },
    { skill: "Corona", level: "Advanced" },
    { skill: "FStorm", level: "Advanced" },
    { skill: "Cycles", level: "Intermediate" },
    { skill: "Mantra", level: "Beginner" },
    { skill: "Revit", level: "Beginner" },
    { skill: "AutoCAD", level: "Intermediate" },
    { skill: "HTML", level: "Intermediate" },
    { skill: "CSS", level: "Intermediate" },
    { skill: "JavaScript", level: "Intermediate" },
    { skill: "React", level: "Intermediate" },
    { skill: "Node", level: "Intermediate" },
    { skill: "Bootstrap", level: "Intermediate" },
    { skill: "Python", level: "Intermediate" },
    { skill: "C++", level: "Beginner" },
    { skill: "Git", level: "Intermediate" },
    { skill: "GitHub", level: "Intermediate" },
    { skill: "Perforce", level: "Beginner" },
    { skill: "Photoshop", level: "Intermediate" },
    { skill: "Illustrator", level: "Intermediate" },
    { skill: "After Effects", level: "Intermediate" },
    { skill: "Figma", level: "Advanced" },
    { skill: "Nuke", level: "Beginner" },
    { skill: "Teamwork", level: "Advanced" },
    { skill: "Linux", level: "Beginner" },
  ],
};

export default resumeData;
