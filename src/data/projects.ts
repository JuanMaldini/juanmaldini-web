import { Project, MediaType } from "./types";

/**
 * Raw media manifest. Heavy assets live in /public/assets and are
 * referenced by URL (served at /assets/*). Add new work here only.
 */
type MediaItem = { path: string; category: string };

export const projectMedia: MediaItem[] = [
  { path: "/assets/3D_Max/01.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Apto01-01.webp", category: "3D Max" },
  { path: "/assets/3D_Max/01-FP.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Apto01-03.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Arnaudo front.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Arnaudo's House - 02.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Arnaudo's House - 03.webp", category: "3D Max" },
  { path: "/assets/3D_Max/LS00.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Moro's House - 01.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Moro's House - 02.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Moro's House - 03.webp", category: "3D Max" },
  { path: "/assets/3D_Max/Moro's House - 04.webp", category: "3D Max" },
  { path: "/assets/3D_Max/TGN-03.webp", category: "3D Max" },

  { path: "/assets/Blender/Blender_modelling.mp4", category: "Blender" },
  { path: "/assets/Blender/Classroom test.webp", category: "Blender" },
  { path: "/assets/Blender/Motion.mp4", category: "Blender" },

  { path: "/assets/Houdini/Fractures.mp4", category: "Houdini" },
  { path: "/assets/Houdini/HDA_Bridge.mp4", category: "Houdini" },
  { path: "/assets/Houdini/House_Generator.mp4", category: "Houdini" },
  { path: "/assets/Houdini/Portal.mp4", category: "Houdini" },

  { path: "/assets/Unreal_Engine/Image Campus-Reality Glitch.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Reel Unreal.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Scene Manager.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Automotive Truck.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Ezerril Backstage.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Metahuman.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Terrain Hodini.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Extra Crowd.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Show S1.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Unreal from Source 51 Lumen Nanite.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Previz JM Unreal.mov", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Scanned Apartment.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Bracciale Tennis.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/C_Shoot0022.webp", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/First VCam.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/FX Sphere.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Halloween.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Laser Attack.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Living JS.webp", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Metahuman Dance.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Meteorite.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Portal.mp4", category: "Unreal Engine" },
  { path: "/assets/Unreal_Engine/Sofa Set.mp4", category: "Unreal Engine" },
  { path: "/assets/Max Script/MaxScript_Ceiling.mp4", category: "Max Script" },

  { path: "/assets/Python/Bump_to_normal.mp4", category: "Python" },
];

const VIDEO_RE = /\.(mp4|mov|webm)$/i;
const mediaType = (path: string): MediaType =>
  VIDEO_RE.test(path) ? "video" : "image";

/** All projects, derived once from the manifest. */
export const projects: Project[] = projectMedia.map((item, idx) => {
  const type = mediaType(item.path);
  return {
    id: `project_${idx}`,
    type,
    category: item.category,
    media: [{ url: item.path, type }],
  };
});

/** Category tabs, "all" first, then unique categories in manifest order. */
export const projectCategories: string[] = [
  "all",
  ...Array.from(new Set(projectMedia.map((item) => item.category))),
];

/** Filter helper used by the Projects page. */
export const getProjectsByCategory = (category: string): Project[] =>
  category === "all"
    ? projects
    : projects.filter((project) => project.category === category);

/** External, deployed projects shown as badges. */
export const externalProjects = [
  { label: "HYWorld", url: "https://hyworldweb.vercel.app/" },
  { label: "Taggings", url: "https://taggings.vercel.app/" },
  { label: "Woloviz", url: "https://www.woloviz.com/" },
  { label: "Vizor 3D", url: "https://www.vizor3d.com/" },
  { label: "QR Code", url: "/qrcode" },
] as const;
