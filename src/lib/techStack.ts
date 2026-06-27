// Central manifest for the tech-stack icon wall (About page).
// Assets live in /public/assets and are served at /assets/*.

export type TechIcon = {
  src: string;
  alt: string;
};

const icon = (file: string, alt: string): TechIcon => ({
  src: `/assets/${file}`,
  alt,
});

export const techStack: TechIcon[] = [
  icon("Unreal.png", "Unreal Engine"),
  icon("3dMax.jpg", "3ds Max"),
  icon("Blender.png", "Blender"),
  icon("Houdini.png", "Houdini"),
  icon("Rizom.png", "Rizom UV"),
  icon("Vray.png", "V-Ray"),
  icon("Corona.png", "Corona Render"),
  icon("Itoo.png", "Itoo Software"),
  icon("revit.png", "Revit"),
  icon("autocad.png", "AutoCAD"),
  icon("Polycam.png", "Polycam"),
  icon("sketchfab.png", "Sketchfab"),
  icon("HTML.png", "HTML"),
  icon("CSS.png", "CSS"),
  icon("Python.png", "Python"),
  icon("Javascript.png", "JavaScript"),
  icon("C++.png", "C++"),
  icon("bootstrap.png", "Bootstrap"),
  icon("react.png", "React"),
  icon("node.png", "Node.js"),
  icon("docker.svg", "Docker"),
  icon("Icons/dokploy-dark.svg", "Dokploy"),
  icon("Icons/n8n-icon.svg", "n8n"),
  icon("aws.svg", "AWS"),
  icon("cloudflare.svg", "Cloudflare"),
  icon("Wix.png", "Wix"),
  icon("Linux.png", "Linux"),
  icon("github-b.png", "GitHub"),
  icon("Icons/gitlab.svg", "GitLab"),
  icon("Git.png", "Git"),
  icon("VS.png", "Visual Studio"),
  icon("Perforce.png", "Perforce"),
  icon("photoshop.png", "Photoshop"),
  icon("Illustrator.png", "Illustrator"),
  icon("Figma.png", "Figma"),
  icon("AE.png", "After Effects"),
  icon("Nuke.png", "Nuke"),
];

// Shared assets referenced across the app.
export const ASSETS = {
  profilePhoto: "/assets/Maldini, Juan Augusto.jpg",
  logo: "/assets/Icons/Logo.svg",
  cvPdf: "/assets/CV/Maldini_Juan_Augusto.pdf",
} as const;
